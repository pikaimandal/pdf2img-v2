import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact PDF2IMG | Get in Touch",
  description:
    "Contact the PDF2IMG team with questions, feedback, or support requests about our free PDF to image converter.",
  openGraph: {
    title: "Contact PDF2IMG | Get in Touch",
    description: "Contact the PDF2IMG team with questions, feedback, or support requests.",
    type: "website",
    url: "https://pdf2img.com/contact",
    images: [
      {
        url: "https://pdf2img.com/pdf2imgwhitelogo.png", 
        alt: "PDF2IMG - Convert PDF to Images",
        width: 1200,
        height: 630,
        type: "image/png",
      },
    ], 
  },
  alternates: {
    canonical: "https://pdf2img.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF to Image Converter | Free Online PDF to Image Tool",
    description: "Convert PDF files to images securely in your browser. No uploads, 100% private.",
    image: "https://pdf2img.com/pdf2imgwhitelogo.png",
    site: "@pdf2img"
  }  
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
