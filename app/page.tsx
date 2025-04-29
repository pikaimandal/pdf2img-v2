import type { Metadata } from "next"
import { Converter } from "@/components/converter"

export const metadata: Metadata = {
  title: "PDF2IMG - Convert PDF to Images | Online PDF to Image Converter",
  description:
    "Convert PDF files to images (PNG, JPG, JPEG, SVG) securely in your browser. No uploads, 100% private. Free online PDF to image converter.",
}

export default function Home() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Convert PDF to Images</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Transform your PDF documents into high-quality images securely in your browser. No uploads, 100% private.
        </p>
      </div>
      <Converter />
    </div>
  )
}
