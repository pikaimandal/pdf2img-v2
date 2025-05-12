import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Clock, ArrowLeft } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "How to Convert PDF to Image on Windows, Mac, and Online | PDF2IMG Blog",
  description:
    "Step-by-step guide to converting PDF to Image on different platforms. Learn the best methods for Windows, Mac, and browser-based PDF to Image conversion.",
  openGraph: {
    title: "How to Convert PDF to Image on Windows, Mac, and Online",
    description: "Step-by-step guide to converting PDF to Image on different platforms.",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "How to Convert PDF to Image on Windows, Mac, and Online",
      },
    ],
  },
}

export default function BlogPost() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-3xl">
        <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary">Tutorial</Badge>
          <Badge variant="secondary">PDF to Image</Badge>
          <Badge variant="secondary">Windows</Badge>
          <Badge variant="secondary">Mac</Badge>
        </div>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
          How to Convert PDF to Image on Windows, Mac, and Online
        </h1>

        <div className="flex items-center text-sm text-muted-foreground mb-8">
          <div className="flex items-center mr-4">
            <CalendarIcon className="mr-1 h-4 w-4" />
            May 5, 2025
          </div>
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            10 min read
          </div>
        </div>

        <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Illustration showing PDF to Image conversion on different platforms"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="lead">
            Converting PDF documents to images is a common task that can be accomplished on various platforms. Whether
            you're using Windows, Mac, or prefer an online solution, this comprehensive guide will walk you through the
            best methods for PDF to Image conversion on each platform.
          </p>

          <p>
            PDFs are great for preserving document formatting, but sometimes you need images instead. You might want to
            include a PDF page in a presentation, share content on social media, or edit the content in an image editor.
            Let's explore how to convert PDF to Image across different platforms.
          </p>

          <h2>Converting PDF to Image Online with PDF2IMG</h2>

          <p>
            The easiest and most accessible way to convert PDF to Image is using an online converter like PDF2IMG. This
            method works on any device with a web browser, including Windows, Mac, Linux, and mobile devices.
          </p>

          <h3>Step-by-Step Guide:</h3>

          <ol>
            <li>
              <strong>Visit PDF2IMG</strong> - Go to <a href="https://pdf2img.com">pdf2img.com</a> in your web browser
            </li>
            <li>
              <strong>Upload your PDF</strong> - Drag and drop your PDF file onto the upload area or click "Browse
              Files" to select it from your device
            </li>
            <li>
              <strong>Choose your settings</strong> - Select your preferred output format (PNG, JPG, JPEG, or SVG) and
              resolution (72, 150, or 300 DPI)
            </li>
            <li>
              <strong>Convert</strong> - Click the "Convert to Images" button to process your PDF
            </li>
            <li>
              <strong>Download</strong> - Once conversion is complete, download individual images or all pages as a ZIP
              file
            </li>
          </ol>

          <h2>Converting PDF to Image on Windows</h2>

          <p>Windows users have several options for converting PDF to Image:</p>

          <h3>Method 1: Using Adobe Acrobat DC</h3>

          <p>
            If you have Adobe Acrobat DC installed (not just the free Adobe Reader), you can use it to convert PDFs to
            images.
          </p>

          <h2>Converting PDF to Image on Mac</h2>

          <p>Mac users have some built-in tools that make PDF to Image conversion straightforward:</p>

          <h3>Method 1: Using Preview</h3>

          <p>The built-in Preview app on Mac is powerful for PDF manipulation.</p>

          <h2>Conclusion</h2>

          <p>
            Converting PDF to Image doesn't have to be complicated. Whether you prefer the simplicity and cross-platform
            compatibility of an online converter like PDF2IMG, or the integrated tools available on Windows and Mac, you
            now have multiple methods at your disposal.
          </p>

          <p>
            For most users, we recommend starting with PDF2IMG for its ease of use, privacy features, and zero cost. Its
            browser-based approach means you can convert PDF to Image on any device without installation, making it the
            most accessible option for quick conversions.
          </p>
        </div>

        <div className="not-prose">
          <Card className="mt-8 bg-primary/5">
            <CardHeader>
              <CardTitle>Try PDF2IMG Today</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Ready to convert your PDF to Image? Experience the simplicity and security of PDF2IMG's free online
                converter.
              </p>
              <Link
                href="/"
                className="inline-block rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
              >
                Convert PDF to Image Now
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
