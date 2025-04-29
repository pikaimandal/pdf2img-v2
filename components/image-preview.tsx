"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, RefreshCw, DownloadCloud } from "lucide-react"
import type { ImageFormat } from "@/components/converter"

interface ImagePreviewProps {
  images: string[]
  format: ImageFormat
  onReset: () => void
  onDownloadAll: () => void
}

export function ImagePreview({ images, format, onReset, onDownloadAll }: ImagePreviewProps) {
  const handleDownloadImage = (imageData: string, index: number) => {
    const link = document.createElement("a")
    link.href = imageData
    link.download = `pdf2img-page-${index + 1}.${format}`
    link.click()
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h3 className="text-lg font-medium">
          Converted Images ({images.length} {images.length === 1 ? "page" : "pages"})
        </h3>
        <div className="flex gap-2">
          <Button variant="outline" onClick={onReset}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Convert Another PDF
          </Button>
          <Button onClick={onDownloadAll}>
            <DownloadCloud className="mr-2 h-4 w-4" />
            Download All
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative">
              <img
                src={image || "/placeholder.svg"}
                alt={`Converted PDF page ${index + 1}`}
                className="w-full object-contain"
              />
              <div className="absolute bottom-4 right-4">
                <Button size="sm" onClick={() => handleDownloadImage(image, index)}>
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
              <div className="absolute left-4 top-4 rounded-md bg-background/80 px-2 py-1 text-xs backdrop-blur-sm">
                Page {index + 1}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
