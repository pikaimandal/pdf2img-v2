import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PDF2IMG - Convert PDF to Images | Online PDF to Image Converter",
  description:
    "Convert PDF files to images (PNG, JPG, JPEG, SVG) securely in your browser. No uploads, 100% private. Free online PDF to image converter.",
  keywords:
    "PDF to Image, PDF to PNG, PDF to JPG, PDF to JPEG, PDF to SVG, PDF2IMG, PDF to Image converter, Convert PDF into Images, PDF conversion, online PDF converter, PDF2IMG, secure PDF converter, private PDF conversion",
  authors: [{ name: "PDF2IMG Team" }],
  creator: "PDF2IMG",
  publisher: "PDF2IMG",
  openGraph: {
    type: "website",
    url: "https://pdf2img.com",
    title: "PDF2IMG - Convert PDF to Images",
    description: "Convert PDF files to images securely in your browser. No uploads, 100% private.",
    siteName: "PDF2IMG",
    images: [
      {
        url: "/pdf2imgwhitelogo.png",
        width: 1200,
        height: 630,
        alt: "PDF2IMG - Convert PDF to Images",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF2IMG - Convert PDF to Images",
    description: "Convert PDF files to images securely in your browser. No uploads, 100% private.",
    images: ["/pdf2imgwhitelogo.png"],
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://pdf2img.com",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "PDF2IMG",
              url: "https://pdf2img.com",
              description: "Convert PDF files to images securely in your browser. No uploads, 100% private.",
              applicationCategory: "Utility",
              operatingSystem: "Any",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
