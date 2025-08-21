import type { Metadata } from "next"
import { Converter } from "@/components/converter"
import AdsterraBanner from "@/components/AdsterraBanner"

export const metadata: Metadata = {
  title: "PDF to Image Converter | Free Online PDF to Image Tool | PDF2IMG",
  description:
    "Free PDF to Image converter. Transform PDF to PNG, JPG, JPEG, SVG securely in your browser with no uploads. 100% private conversion tool.",
}

export default function Home() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          PDF to Image Converter Online
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Transform your PDF documents into high-quality images with our free PDF to Image converter. Convert PDF to
          PNG, JPG, JPEG, or SVG securely in your browser. No uploads, 100% private PDF to Image conversion.
        </p>
      </div>
      {/* ---- Adsterra Native Banner Ad ---- */}
      <AdsterraBanner />
      {/* ---- End Ad ---- */}
      <Converter />
    </div>
  )
}
