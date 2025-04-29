"use client"

import { useCallback } from "react"
import type { ImageFormat, Resolution } from "@/components/converter"

export function usePdfToImage() {
  // Load PDF.js dynamically with proper worker handling
  const loadPdfJs = async () => {
    const pdfjsLib = await import("pdfjs-dist")

    // Create a blob URL for the worker to avoid CORS issues
    const pdfjsWorker = await import("pdfjs-dist/build/pdf.worker.mjs")
    const workerBlob = new Blob([pdfjsWorker.default], { type: "text/javascript" })
    const workerBlobURL = URL.createObjectURL(workerBlob)

    pdfjsLib.GlobalWorkerOptions.workerSrc = workerBlobURL
    return pdfjsLib
  }

  const generateThumbnails = useCallback(async (file: File) => {
    try {
      const pdfjsLib = await loadPdfJs()

      // Read the file as ArrayBuffer
      const arrayBuffer = await file.arrayBuffer()

      // Load the PDF document
      const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer })
      const pdf = await loadingTask.promise
      const pageCount = pdf.numPages

      // Generate thumbnails for each page
      const thumbnails: string[] = []

      for (let i = 1; i <= pageCount; i++) {
        const page = await pdf.getPage(i)
        const viewport = page.getViewport({ scale: 0.5 }) // Lower scale for thumbnails

        // Prepare canvas for rendering
        const canvas = document.createElement("canvas")
        const context = canvas.getContext("2d")
        canvas.width = viewport.width
        canvas.height = viewport.height

        // Render PDF page to canvas
        await page.render({
          canvasContext: context!,
          viewport,
        }).promise

        // Convert canvas to image data URL
        const thumbnail = canvas.toDataURL("image/png")
        thumbnails.push(thumbnail)
      }

      return { thumbnails, pageCount }
    } catch (error) {
      console.error("Error in generateThumbnails:", error)
      throw new Error(`Failed to generate thumbnails: ${error instanceof Error ? error.message : String(error)}`)
    }
  }, [])

  const convertPdfToImages = useCallback(async (file: File, format: ImageFormat, resolution: Resolution) => {
    try {
      const pdfjsLib = await loadPdfJs()

      // Calculate scale based on resolution (72 DPI is the default for PDF)
      const scale = resolution / 72

      // Read the file as ArrayBuffer
      const arrayBuffer = await file.arrayBuffer()

      // Load the PDF document
      const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer })
      const pdf = await loadingTask.promise
      const pageCount = pdf.numPages

      // Generate high-resolution images for each page
      const images: string[] = []

      for (let i = 1; i <= pageCount; i++) {
        const page = await pdf.getPage(i)
        const viewport = page.getViewport({ scale })

        // Prepare canvas for rendering
        const canvas = document.createElement("canvas")
        const context = canvas.getContext("2d")
        canvas.width = viewport.width
        canvas.height = viewport.height

        // Render PDF page to canvas
        await page.render({
          canvasContext: context!,
          viewport,
        }).promise

        // Convert canvas to image data URL based on format
        let imageData: string

        if (format === "svg") {
          // For SVG, we'd need a different approach
          // This is a simplified placeholder that just uses PNG
          imageData = canvas.toDataURL("image/png")
        } else {
          const mimeType = format === "jpg" ? "image/jpeg" : `image/${format}`
          const quality = format === "png" ? 1.0 : 0.9 // PNG uses lossless compression
          imageData = canvas.toDataURL(mimeType, quality)
        }

        images.push(imageData)
      }

      return images
    } catch (error) {
      console.error("Error in convertPdfToImages:", error)
      throw new Error(`Failed to convert PDF to images: ${error instanceof Error ? error.message : String(error)}`)
    }
  }, [])

  return {
    generateThumbnails,
    convertPdfToImages,
  }
}
