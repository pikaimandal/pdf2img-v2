"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Upload, FileUp } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface FileUploaderProps {
  onFileChange: (file: File | null) => void
}

export function FileUploader({ onFileChange }: FileUploaderProps) {
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { toast } = useToast()

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0]
      validateAndSetFile(file)
    }
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      validateAndSetFile(file)
    }
  }

  const validateAndSetFile = (file: File) => {
    if (file.type !== "application/pdf") {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF file",
        variant: "destructive",
      })
      return
    }

    if (file.size > 10 * 1024 * 1024) {
      // 10MB limit
      toast({
        title: "File too large",
        description: "Please upload a PDF file smaller than 10MB",
        variant: "destructive",
      })
      return
    }

    onFileChange(file)
  }

  return (
    <div
      className={`flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-12 text-center ${
        isDragging ? "border-primary bg-primary/5" : "border-muted-foreground/25"
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="rounded-full bg-primary/10 p-4">
          <Upload className="h-8 w-8 text-primary" />
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Drag & drop your PDF here</h3>
          <p className="text-sm text-muted-foreground">or click to browse your files</p>
        </div>
        <Button variant="outline" onClick={() => fileInputRef.current?.click()} className="mt-2">
          <FileUp className="mr-2 h-4 w-4" />
          Browse Files
        </Button>
        <input ref={fileInputRef} type="file" accept=".pdf" onChange={handleFileInput} className="hidden" />
        <p className="text-xs text-muted-foreground">Max file size: 10MB. Your files stay in your browser.</p>
      </div>
    </div>
  )
}
