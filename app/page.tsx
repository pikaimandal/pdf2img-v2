"use client"

import { useEffect } from "react"
import type { Metadata } from "next"
import { Converter } from "@/components/converter"

export const metadata: Metadata = {
  title: "PDF to Image Converter | Free Online PDF to Image Tool | PDF2IMG",
  description:
    "Free PDF to Image converter. Transform PDF to PNG, JPG, JPEG, SVG securely in your browser with no uploads. 100% private conversion tool.",
}

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "//pl27474176.profitableratecpm.com/d06b49829cb22fc3b16c1a7d37f50a08/invoke.js"
    script.async = true
    script.setAttribute("data-cfasync", "false")
    document.body.appendChild(script)
    // Optional cleanup (for hot reloads/dev)
    return () => {
      script.remove()
    }
  }, [])

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
      <div className="flex justify-center my-6">
        <div id="container-d06b49829cb22fc3b16c1a7d37f50a08" style={{ width: "100%" }}></div>
      </div>
      {/* ---- End Ad ---- */}
      <Converter />
    </div>
  )
}
