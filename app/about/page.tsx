import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Zap, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "About PDF2IMG - PDF to Image Converter | Secure PDF to Image Conversion",
  description:
    "PDF2IMG's mission is to provide the best PDF to Image converter online. Convert your PDFs to PNG, JPG, JPEG, or SVG without uploading files. Free and secure PDF to Image conversion.",
  openGraph: {
    title: "About PDF2IMG | Secure PDF to Image Conversion",
    description: "Learn about PDF2IMG's mission to provide secure, private, and free PDF to image conversion.",
    url: "https://pdf2img.com/about",
    type: "website",
    images: [
      {
        url: "https://pdf2img.com/pdf2imgwhitelogo.png",
        width: 1200,
        height: 630,
        alt: "PDF2IMG - Convert PDF to Images",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About PDF to Image Converter | PDF2IMG - Secure PDF to Image Conversion",
    description: "Learn about PDF2IMG's mission to provide the best PDF to Image converter online. Convert your PDFs to PNG, JPG, JPEG, or SVG without uploading files. Free and secure PDF to Image conversion.",
    image: "https://pdf2img.com/pdf2imgwhitelogo.png",
    site: "@pdf2img",
  },
  alternates: {
    canonical: "https://pdf2img.com/about",
  },
}

export default function AboutPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">About Our PDF to Image Converter</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Our mission is to provide the best PDF to Image converter online, helping users convert PDF to images securely
          and privately.
        </p>

        <div className="mt-8 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
              <CardDescription>
                Providing simple, secure, and private PDF to image conversion for everyone.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                PDF2IMG was created with a simple goal: to provide a free, easy-to-use tool for converting PDF documents
                to images without compromising user privacy. We believe that document conversion should be accessible to
                everyone without requiring complex software installations or risking your data privacy.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-6 sm:grid-cols-2">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Shield className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>100% Private</CardTitle>
                  <CardDescription>
                    All processing happens in your browser. Your files never leave your device.
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Lock className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Secure</CardTitle>
                  <CardDescription>No server uploads, no data collection, no tracking.</CardDescription>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Zap className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Fast</CardTitle>
                  <CardDescription>Optimized for speed with client-side processing and web workers.</CardDescription>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Globe className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Accessible</CardTitle>
                  <CardDescription>
                    Available to everyone, everywhere, on any device with a modern browser.
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                PDF2IMG uses modern web technologies to convert your PDF documents to images directly in your browser:
              </p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>We use PDF.js to parse and render your PDF documents</li>
                <li>The rendered pages are converted to images using HTML Canvas</li>
                <li>Web Workers are used for performance-intensive tasks to keep the UI responsive</li>
                <li>All processing happens locally in your browser - no data is sent to any server</li>
                <li>You can download individual images or all pages as a ZIP file</li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
