import type { Metadata } from "next"
import { Converter } from "@/components/converter"
import Link from "next/link"

export const metadata: Metadata = {
  title: "PDF to JPG Converter | Free Online PDF to JPG Tool | PDF2IMG",
  description:
    "Convert PDF to JPG online with our free tool. Transform PDF documents to JPG images with excellent compression. No uploads, 100% private conversion.",
  alternates: {
    canonical: "https://pdf2img.com/pdf-to-jpg",
  },
}

export default function PdfToJpgPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">PDF to JPG Converter</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Transform your PDF documents into optimized JPG images with our free converter. No uploads required, all
          processing happens securely in your browser.
        </p>
      </div>

      <Converter defaultFormat="jpg" />

      <div className="mt-8 mx-auto max-w-3xl prose dark:prose-invert">
        <p>
          Our PDF to JPG converter is here to turn your PDF documents into beautifully optimized JPG images, all while keeping file sizes in check. JPG is the go-to format for photos and intricate images where size really counts. It offers smaller file sizes compared to PNG, 
          yet still delivers great visual quality, making it perfect for sharing on social media, websites, or through email.
        </p>
        <p>
          This free tool processes your files entirely in your browser - your PDFs are never uploaded to any server,
          ensuring complete privacy and security. Try our other conversion options:
          <Link href="/pdf-to-png"> PDF to PNG</Link>,<Link href="/pdf-to-jpeg"> PDF to JPEG</Link>, or
          <Link href="/pdf-to-svg"> PDF to SVG</Link> for different use cases.
        </p>
      </div>
    </div>
  )
}
