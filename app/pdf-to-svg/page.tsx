import type { Metadata } from "next"
import { Converter } from "@/components/converter"
import Link from "next/link"

export const metadata: Metadata = {
  title: "PDF to SVG Converter | Free Online PDF to SVG Tool | PDF2IMG",
  description:
    "Convert PDF to SVG online with our free tool. Transform PDF documents to scalable vector graphics. No uploads, 100% private conversion.",
}

export default function PdfToSvgPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">PDF to SVG Converter</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Transform your PDF documents into scalable vector graphics (SVG) with our free converter. No uploads required,
          all processing happens securely in your browser.
        </p>
      </div>

      <Converter defaultFormat="svg" />

      <div className="mt-8 mx-auto max-w-3xl prose dark:prose-invert">
        <p>
          Our PDF to SVG converter transforms your PDF documents into scalable vector graphics that maintain perfect
          quality at any size. SVG is ideal for logos, icons, diagrams, and illustrations that need to be resized
          without losing quality. Unlike raster formats (PNG, JPG), SVG files use mathematical formulas to define
          shapes, resulting in crisp edges at any resolution.
        </p>
        <p>
          This free tool processes your files entirely in your browser - your PDFs are never uploaded to any server,
          ensuring complete privacy and security. Try our other conversion options:
          <Link href="/pdf-to-png"> PDF to PNG</Link>,<Link href="/pdf-to-jpg"> PDF to JPG</Link>, or
          <Link href="/pdf-to-jpeg"> PDF to JPEG</Link> for different use cases.
        </p>
      </div>
    </div>
  )
}
