"use client"

import { useState } from "react"
import { FileUploader } from "@/components/file-uploader"
import { ConversionOptions } from "@/components/conversion-options"
import { PDFPreview } from "@/components/pdf-preview"
import { ImagePreview } from "@/components/image-preview"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { usePdfToImage } from "@/hooks/use-pdf-to-image"

export type ImageFormat = "png" | "jpg" | "jpeg" | "svg"
export type Resolution = 72 | 150 | 300

export function Converter() {
  const [file, setFile] = useState<File | null>(null)
  const [format, setFormat] = useState<ImageFormat>("png")
  const [resolution, setResolution] = useState<Resolution>(150)
  const [isConverting, setIsConverting] = useState(false)
  const [convertedImages, setConvertedImages] = useState<string[]>([])
  const { toast } = useToast()
  const { convertPdfToImages } = usePdfToImage()

  const handleFileChange = (file: File | null) => {
    setFile(file)
    setConvertedImages([])
  }

  // Update the handleConvert function to better handle errors
  const handleConvert = async () => {
    if (!file) return

    try {
      setIsConverting(true)
      const images = await convertPdfToImages(file, format, resolution)

      if (images.length === 0) {
        throw new Error("No images were generated")
      }

      setConvertedImages(images)
      toast({
        title: "Conversion complete",
        description: `Successfully converted ${images.length} pages to ${format.toUpperCase()}`,
      })
    } catch (error) {
      console.error("Conversion error:", error)
      toast({
        title: "Conversion failed",
        description: "There was an error converting your PDF. Please try again with a different file.",
        variant: "destructive",
      })
    } finally {
      setIsConverting(false)
    }
  }

  const handleDownloadAll = () => {
    if (convertedImages.length === 0) return

    // Create a zip file with JSZip and download it
    import("jszip").then((JSZip) => {
      const zip = new JSZip.default()

      convertedImages.forEach((image, index) => {
        const imgData = image.split(",")[1]
        zip.file(`pdf2img-page-${index + 1}.${format}`, imgData, { base64: true })
      })

      zip.generateAsync({ type: "blob" }).then((content) => {
        const link = document.createElement("a")
        link.href = URL.createObjectURL(content)
        link.download = `pdf2img-${file?.name.replace(".pdf", "")}.zip`
        link.click()
      })
    })
  }

  return (
    <div className="mt-8 space-y-8">
      <Card className="p-6">
        {!file ? (
          <FileUploader onFileChange={handleFileChange} />
        ) : convertedImages.length > 0 ? (
          <ImagePreview
            images={convertedImages}
            format={format}
            onReset={() => {
              setFile(null)
              setConvertedImages([])
            }}
            onDownloadAll={handleDownloadAll}
          />
        ) : (
          <div className="space-y-6">
            <PDFPreview file={file} />

            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <ConversionOptions
                format={format}
                resolution={resolution}
                onFormatChange={setFormat}
                onResolutionChange={setResolution}
              />

              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setFile(null)}>
                  Cancel
                </Button>
                <Button onClick={handleConvert} disabled={isConverting}>
                  {isConverting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Converting...
                    </>
                  ) : (
                    "Convert to Images"
                  )}
                </Button>
              </div>
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}
