import type { Metadata } from "next"
import { Converter } from "@/components/converter"
import Link from "next/link"
import AdsterraBanner from "@/components/AdsterraBanner"

export const metadata: Metadata = {
  title: "PDF to JPEG Converter | Free Online PDF to JPEG Tool | PDF2IMG",
  description:
    "Convert PDF to JPEG online with our free tool. Transform PDF documents to JPEG images with excellent compression. No uploads, 100% private conversion.",
  alternates: {
    canonical: "https://pdf2img.com/pdf-to-jpeg",
  },
}

export default function PdfToJpegPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">PDF to JPEG Converter</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Transform your PDF documents into optimized JPEG images with our free converter. No uploads required, all
          processing happens securely in your browser.
        </p>
      </div>
      {/* ---- Adsterra Native Banner Ad ---- */}
      <AdsterraBanner />
      {/* ---- End Ad ---- */}
      <Converter defaultFormat="jpeg" />

      <div className="mt-8 mx-auto max-w-3xl prose dark:prose-invert">
        <p>
          Our PDF to JPEG converter transforms your PDF documents into optimized JPEG images with excellent file size
          compression. JPEG is perfect for photographs and complex images where file size efficiency matters. This
          format provides smaller file sizes than PNG while maintaining good visual quality, making it ideal for sharing
          on social media, websites, or via email.
        </p>
        <p>
          This free tool processes your files entirely in your browser - your PDFs are never uploaded to any server,
          ensuring complete privacy and security. Try our other conversion options:
          <Link href="/pdf-to-png"> PDF to PNG</Link>,<Link href="/pdf-to-jpg"> PDF to JPG</Link>, or
          <Link href="/pdf-to-svg"> PDF to SVG</Link> for different use cases.
        </p>
      </div>
    </div>
  )
}
