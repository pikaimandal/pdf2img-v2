import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Script from "next/script"

export const metadata: Metadata = {
  title: "PDF to Image Conversion FAQ | PDF2IMG",
  description:
    "Frequently asked questions about PDF to Image conversion. Learn how to convert PDF to Image, best formats, and why our free PDF to Image converter is safe and secure.",
  openGraph: {
    title: "PDF to Image Conversion FAQ | PDF2IMG",
    description: "Frequently asked questions about PDF to Image conversion. Learn how to convert PDF to Image online.",
  },
}

export default function FAQPage() {
  // FAQ structured data for rich snippets
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How can I convert PDF to Image?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Converting PDF to Image with PDF2IMG is simple: 1) Upload your PDF file by dragging and dropping it or browsing your files. 2) Choose your preferred image format (PNG, JPG, JPEG, or SVG) and resolution. 3) Click 'Convert to Images' and download your converted images individually or as a ZIP file. Our PDF to Image converter processes everything in your browser for maximum privacy and security.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best format for PDF to Image conversion?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The best format for PDF to Image conversion depends on your needs: PNG is ideal for documents with text and graphics that require high quality and transparency. JPG/JPEG is better for photographs and complex images where file size matters more than perfect quality. SVG is best for graphics, diagrams, and illustrations that need to be scalable without quality loss. For most document conversions, we recommend PNG at 150 DPI for a good balance of quality and file size.",
        },
      },
      {
        "@type": "Question",
        name: "Is it safe to convert PDF to Image online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "With PDF2IMG, converting PDF to Image online is 100% safe. Our converter processes your files entirely in your browser - your PDFs are never uploaded to any server. This client-side processing ensures complete privacy and security for your sensitive documents. We don't store, track, or access your files in any way, making our PDF to Image converter one of the safest options available.",
        },
      },
      {
        "@type": "Question",
        name: "Why should I convert PDF to Image?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Converting PDF to Image has several benefits: 1) Improved compatibility - images can be viewed on any device without special software. 2) Easy sharing - images can be quickly shared on social media, messaging apps, and websites. 3) Content extraction - extract specific pages or elements from a PDF. 4) Editing capabilities - modify content using image editing software. 5) Presentation purposes - include PDF content in presentations without formatting issues.",
        },
      },
      {
        "@type": "Question",
        name: "What resolution should I use for PDF to Image conversion?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For PDF to Image conversion, the ideal resolution depends on your purpose: 72 DPI is sufficient for screen viewing and web use. 150 DPI offers a good balance between quality and file size for general purposes. 300 DPI is recommended for printing and professional use where high quality is essential. Higher resolutions result in larger file sizes but better image quality, especially when zooming in or printing.",
        },
      },
      {
        "@type": "Question",
        name: "Can I convert multiple PDF pages to images at once?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our PDF to Image converter automatically processes all pages in your PDF. You'll see thumbnails of each page after uploading, and once converted, you can download individual images or all pages as a ZIP file. This makes it easy to convert multi-page PDFs to images in one simple operation.",
        },
      },
      {
        "@type": "Question",
        name: "Is PDF2IMG's PDF to Image converter really free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, PDF2IMG's PDF to Image converter is completely free to use with no hidden costs or premium features. We don't require registration, payment information, or email addresses. Our service is supported by minimal, non-intrusive advertising, allowing us to provide a high-quality PDF to Image conversion tool at no cost to users.",
        },
      },
    ],
  }

  return (
    <>
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <div className="container py-8 md:py-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">PDF to Image Conversion FAQ</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Frequently asked questions about converting PDF to Image with our free online tool.
          </p>

          <div className="mt-8 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Common Questions About PDF to Image Conversion</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How can I convert PDF to Image?</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">Converting PDF to Image with PDF2IMG is simple:</p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>Upload your PDF file by dragging and dropping it or browsing your files</li>
                        <li>Choose your preferred image format (PNG, JPG, JPEG, or SVG) and resolution</li>
                        <li>
                          Click 'Convert to Images' and download your converted images individually or as a ZIP file
                        </li>
                      </ol>
                      <p className="mt-4">
                        Our PDF to Image converter processes everything in your browser for maximum privacy and
                        security.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>What is the best format for PDF to Image conversion?</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">The best format for PDF to Image conversion depends on your needs:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <strong>PNG</strong> is ideal for documents with text and graphics that require high quality
                          and transparency
                        </li>
                        <li>
                          <strong>JPG/JPEG</strong> is better for photographs and complex images where file size matters
                          more than perfect quality
                        </li>
                        <li>
                          <strong>SVG</strong> is best for graphics, diagrams, and illustrations that need to be
                          scalable without quality loss
                        </li>
                      </ul>
                      <p className="mt-4">
                        For most document conversions, we recommend PNG at 150 DPI for a good balance of quality and
                        file size.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Is it safe to convert PDF to Image online?</AccordionTrigger>
                    <AccordionContent>
                      <p>
                        With PDF2IMG, converting PDF to Image online is 100% safe. Our converter processes your files
                        entirely in your browser - your PDFs are never uploaded to any server. This client-side
                        processing ensures complete privacy and security for your sensitive documents. We don't store,
                        track, or access your files in any way, making our PDF to Image converter one of the safest
                        options available.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>Why should I convert PDF to Image?</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">Converting PDF to Image has several benefits:</p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>
                          <strong>Improved compatibility</strong> - images can be viewed on any device without special
                          software
                        </li>
                        <li>
                          <strong>Easy sharing</strong> - images can be quickly shared on social media, messaging apps,
                          and websites
                        </li>
                        <li>
                          <strong>Content extraction</strong> - extract specific pages or elements from a PDF
                        </li>
                        <li>
                          <strong>Editing capabilities</strong> - modify content using image editing software
                        </li>
                        <li>
                          <strong>Presentation purposes</strong> - include PDF content in presentations without
                          formatting issues
                        </li>
                      </ol>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger>What resolution should I use for PDF to Image conversion?</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">For PDF to Image conversion, the ideal resolution depends on your purpose:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <strong>72 DPI</strong> is sufficient for screen viewing and web use
                        </li>
                        <li>
                          <strong>150 DPI</strong> offers a good balance between quality and file size for general
                          purposes
                        </li>
                        <li>
                          <strong>300 DPI</strong> is recommended for printing and professional use where high quality
                          is essential
                        </li>
                      </ul>
                      <p className="mt-4">
                        Higher resolutions result in larger file sizes but better image quality, especially when zooming
                        in or printing.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6">
                    <AccordionTrigger>Can I convert multiple PDF pages to images at once?</AccordionTrigger>
                    <AccordionContent>
                      <p>
                        Yes, our PDF to Image converter automatically processes all pages in your PDF. You'll see
                        thumbnails of each page after uploading, and once converted, you can download individual images
                        or all pages as a ZIP file. This makes it easy to convert multi-page PDFs to images in one
                        simple operation.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7">
                    <AccordionTrigger>Is PDF2IMG's PDF to Image converter really free?</AccordionTrigger>
                    <AccordionContent>
                      <p>
                        Yes, PDF2IMG's PDF to Image converter is completely free to use with no hidden costs or premium
                        features. We don't require registration, payment information, or email addresses. Our service is
                        supported by minimal, non-intrusive advertising, allowing us to provide a high-quality PDF to
                        Image conversion tool at no cost to users.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
