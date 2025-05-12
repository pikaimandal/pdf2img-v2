import type { Metadata } from "next"
import { Converter } from "@/components/converter"

export const metadata: Metadata = {
  title: "PDF to Image Converter | Free Online PDF to Image Tool | PDF2IMG",
  description:
    "Best PDF to Image converter online. Convert PDF to PNG, JPG, JPEG, SVG images securely in your browser. Free PDF to Image tool with no uploads required. 100% private PDF to Image conversion.",
}

export default function Home() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">PDF to Image Converter Online</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Transform your PDF documents into high-quality images with our free PDF to Image converter. Convert PDF to
          PNG, JPG, JPEG, or SVG securely in your browser. No uploads, 100% private PDF to Image conversion.
        </p>
      </div>
      <Converter />
    </div>
  )
}
