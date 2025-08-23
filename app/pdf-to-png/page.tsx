import type { Metadata } from "next"
import { Converter } from "@/components/converter"
import Link from "next/link"

export const metadata: Metadata = {
  title: "PDF to PNG Converter | Free Online PDF to PNG Tool | PDF2IMG",
  description:
    "Convert PDF to PNG online with our free tool. Transform PDF documents to high-quality PNG images with transparency support. No uploads, 100% private conversion.",
  alternates: {
    canonical: "https://pdf2img.com/pdf-to-png",
  },
}

export default function PdfToPngPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">PDF to PNG Converter</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Transform your PDF documents into high-quality PNG images with our free converter. No uploads required, all
          processing happens securely in your browser.
        </p>
      </div>

      <Converter defaultFormat="png" />

      <div className="mt-8 mx-auto max-w-3xl prose dark:prose-invert">
        <p>
          Our PDF to PNG converter transforms your PDF documents into high-quality PNG images while preserving
          transparency and image quality. PNG is the go-to format for documents that feature text, graphics, and diagrams, as it keeps those sharp edges and supports transparency beautifully. Unlike other formats, 
          PNG uses lossless compression, which means your converted images will look just as clear and detailed as the originals.
        </p>
        <p>
          This free tool processes your files entirely in your browser - your PDFs are never uploaded to any server,
          ensuring complete privacy and security. Try our other conversion options:
          <Link href="/pdf-to-jpg"> PDF to JPG</Link>,<Link href="/pdf-to-jpeg"> PDF to JPEG</Link>, or
          <Link href="/pdf-to-svg"> PDF to SVG</Link> for different use cases.
        </p>
      </div>
    </div>
  )
}
