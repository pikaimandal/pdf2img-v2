"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import { usePdfToImage } from "@/hooks/use-pdf-to-image"

interface PDFPreviewProps {
  file: File
}

export function PDFPreview({ file }: PDFPreviewProps) {
  const [thumbnails, setThumbnails] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [pageCount, setPageCount] = useState(0)
  const { generateThumbnails } = usePdfToImage()

  useEffect(() => {
    const loadPdfPreview = async () => {
      try {
        setIsLoading(true)
        const { thumbnails, pageCount } = await generateThumbnails(file)
        setThumbnails(thumbnails)
        setPageCount(pageCount)
      } catch (error) {
        console.error("Error generating thumbnails:", error)
        // Show error toast
        const { toast } = require("@/hooks/use-toast")
        toast({
          title: "Error loading PDF",
          description: "There was a problem loading your PDF. Please try again with a different file.",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    loadPdfPreview()
  }, [file, generateThumbnails])

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="mt-4 text-sm text-muted-foreground">Loading PDF preview...</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">
          {file.name} ({pageCount} {pageCount === 1 ? "page" : "pages"})
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {thumbnails.map((thumbnail, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative aspect-[3/4]">
              <img
                src={thumbnail || "/placeholder.svg"}
                alt={`Page ${index + 1}`}
                className="h-full w-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-background/80 p-1 text-center text-xs backdrop-blur-sm">
                Page {index + 1}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
