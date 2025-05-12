import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PDF to Image Converter | Free Online PDF to Image Tool | PDF2IMG",
  description:
    "Best PDF to Image converter online. Convert PDF to PNG, JPG, JPEG, SVG images securely in your browser. Free PDF to Image tool with no uploads required. 100% private PDF to Image conversion.",
  keywords:
    "PDF to Image, PDF to PNG, PDF to JPG, PDF to JPEG, PDF to SVG, PDF2IMG, PDF to Image converter, Convert PDF into Images, Best PDF to Image converter, Free PDF to Image conversion online, Convert PDF to Image securely, PDF conversion, online PDF converter, secure PDF converter, private PDF conversion",
  authors: [{ name: "PDF2IMG Team" }],
  creator: "PDF2IMG",
  publisher: "PDF2IMG",
  openGraph: {
    type: "website",
    url: "https://pdf2img.com",
    title: "PDF to Image Converter | Free Online PDF to Image Tool",
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
    title: "PDF to Image Converter | Free Online PDF to Image Tool",
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
  generator: "PDF2IMG Team",
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1EHEEG5E7D"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1EHEEG5E7D');
            `,
          }}
        />
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
