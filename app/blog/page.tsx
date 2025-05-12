import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "PDF to Image Conversion Blog | Tips & Tutorials | PDF2IMG",
  description:
    "Learn about PDF to Image conversion with our expert guides, tutorials, and tips. Discover the best PDF to Image converters, formats, and techniques for all your document needs.",
  openGraph: {
    title: "PDF to Image Conversion Blog | Tips & Tutorials",
    description: "Expert guides and tutorials on PDF to Image conversion techniques and tools.",
  },
}

const blogPosts = [
  {
    id: "top-5-pdf-to-image-tools-2025",
    title: "Top 5 PDF to Image Conversion Tools in 2025",
    description:
      "Discover the best PDF to Image converters available online and offline. Compare features, pricing, and performance to find the perfect tool for your needs.",
    date: "May 10, 2025",
    readTime: "8 min read",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["PDF to Image", "Comparison", "Tools"],
    slug: "/blog/top-5-pdf-to-image-tools-2025",
  },
  {
    id: "convert-pdf-to-image-windows-mac",
    title: "How to Convert PDF to Image on Windows, Mac, and Online",
    description:
      "Step-by-step guide to converting PDF to Image on different platforms. Learn the best methods for Windows, Mac, and browser-based PDF to Image conversion.",
    date: "May 5, 2025",
    readTime: "10 min read",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Tutorial", "PDF to Image", "Windows", "Mac"],
    slug: "/blog/convert-pdf-to-image-windows-mac",
  },
  {
    id: "pdf-to-image-benefits",
    title: "PDF to Image Conversion: Benefits and Use Cases",
    description:
      "Explore the advantages of converting PDF to Image and discover practical applications across different industries and scenarios.",
    date: "April 28, 2025",
    readTime: "7 min read",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["PDF to Image", "Benefits", "Use Cases"],
    slug: "/blog/pdf-to-image-benefits",
  },
  {
    id: "optimize-pdf-to-image-quality",
    title: "How to Optimize PDF to Image Conversion Quality",
    description:
      "Expert tips to achieve the best quality when converting PDF to Image. Learn about resolution, format selection, and optimization techniques.",
    date: "April 20, 2025",
    readTime: "9 min read",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["PDF to Image", "Quality", "Optimization"],
    slug: "/blog/optimize-pdf-to-image-quality",
  },
  {
    id: "secure-pdf-to-image-conversion",
    title: "Secure PDF to Image Conversion: Protecting Your Documents",
    description:
      "Learn how to safely convert PDF to Image while maintaining document security and privacy. Best practices for handling sensitive information.",
    date: "April 15, 2025",
    readTime: "6 min read",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["PDF to Image", "Security", "Privacy"],
    slug: "/blog/secure-pdf-to-image-conversion",
  },
  {
    id: "batch-pdf-to-image-conversion",
    title: "Batch PDF to Image Conversion: Handling Multiple Documents",
    description:
      "Efficient techniques for converting multiple PDFs to images simultaneously. Save time with batch processing and automation.",
    date: "April 8, 2025",
    readTime: "8 min read",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["PDF to Image", "Batch Processing", "Automation"],
    slug: "/blog/batch-pdf-to-image-conversion",
  },
]

export default function BlogPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">PDF to Image Conversion Blog</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Expert guides, tutorials, and tips to help you master PDF to Image conversion for all your document needs.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.id} className="flex flex-col overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={`Illustration for ${post.title} - PDF to Image blog post`}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="flex-1">
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">{post.description}</CardDescription>
              </CardHeader>
              <CardFooter className="border-t bg-muted/50 p-4">
                <div className="flex w-full justify-between text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <CalendarIcon className="mr-1 h-3 w-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-3 w-3" />
                    {post.readTime}
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
