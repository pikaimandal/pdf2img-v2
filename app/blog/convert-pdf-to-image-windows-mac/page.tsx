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
            Converting PDF documents into images is a task many of us encounter, and luckily, it can be done on a variety of platforms. Whether you're on Windows, Mac, or looking for an online option, 
            this detailed guide will help you navigate the best ways to convert PDFs to images on each platform.
          </p>

          <p>
           PDFs are fantastic for keeping document formatting intact, but there are times when you might need images instead. Perhaps you want to include a PDF page in a presentation, share something on social media, or edit the content in an image editor. 
           Let’s dive into how to convert PDF to image across different platforms.
          </p>

          <h2>Converting PDF to Image Online with PDF2IMG</h2>

          <p>
            The simplest and most user-friendly way to convert a PDF to an image is by using an online converter like PDF2IMG. 
            This method is compatible with any device that has a web browser, including Windows, Mac, Linux, and mobile devices.
          </p>

          <h3>Step-by-Step Guide:</h3>

          <ol>
            <li>
              <strong>Visit PDF2IMG</strong> - Open your web browser and go to <a href="https://pdf2img.com">pdf2img.com</a>.
            </li>
            <li>
              <strong>Upload your PDF</strong> - You can either drag and drop your PDF file into the upload area or click "Browse Files" to select it from your device.
            </li>
            <li>
              <strong>Choose your settings</strong> - Pick your desired output format (PNG, JPG, JPEG, or SVG) and resolution (72, 150, or 300 DPI).
            </li>
            <li>
              <strong>Convert</strong> - Click the "Convert to Images" button to start processing your PDF.
            </li>
            <li>
              <strong>Download</strong> - Once conversion is complete, you can download individual images or grab all pages as a ZIP file.

              file
            </li>
          </ol>

          <h2>Converting PDF to Image on Windows</h2>

          <p>If you're using Windows, you have a few options for converting PDFs to images:</p>

          <h3>Method 1: Using Adobe Acrobat DC</h3>

          <p>
            If you have Adobe Acrobat DC (not just the free Adobe Reader), you can easily convert PDFs to images.
          </p>

          <h2>Converting PDF to Image on Mac</h2>

          <p>Mac users have some handy built-in tools that make converting PDFs to images a breeze:</p>

          <h3>Method 1: Using Preview</h3>

          <p>The Preview app on Mac is a powerful tool for manipulating PDFs.</p>

          <h2>Conclusion</h2>

          <p>
            Converting PDF to image doesn’t have to be a hassle. Whether you prefer the ease and cross-platform functionality of an online converter 
            like PDF2IMG or the built-in tools available on Windows and Mac, you now have a variety of methods at your fingertips.
          </p>

          <p>
            For most users, we suggest using PDF2IMG because it's super user-friendly, respects your privacy, and best of all, it's free! Since it runs right in your browser, you can easily convert PDFs to images on any device without needing to install anything. 
            This makes it the go-to choice for quick and hassle-free conversions.
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
