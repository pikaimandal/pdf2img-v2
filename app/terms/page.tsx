import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Terms of Service | PDF2IMG - Secure PDF to Image Conversion",
  description:
    "Read the Terms of Service for PDF2IMG. Understand the rules, responsibilities, and limitations when using our 100% client-side PDF to image converter.",
  openGraph: {
    title: "Terms of Service | PDF2IMG - Secure PDF to Image Conversion",
    description:
      "PDF2IMG Terms of Service. Learn about your rights and responsibilities when using our secure, client-side PDF to image converter.",
  },
}

export default function TermsPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Terms of Service</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Please read these Terms of Service carefully before using PDF2IMG.
        </p>

        <div className="mt-8 space-y-8">

          <Card>
            <CardHeader>
              <CardTitle>Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                By accessing or using PDF2IMG, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our service.
              </p>
              <p>
                <strong>Last updated:</strong> April 29, 2025
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Service Description</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                PDF2IMG provides a client-side tool for converting PDF files to images directly in your browser. No files are uploaded or stored on our servers.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>All processing happens locally in your browser</li>
                <li>We do not access, store, or transmit your files</li>
                <li>There is no registration required</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc pl-5 space-y-2">
                <li>You are responsible for ensuring you have the rights to use any PDF files you process with PDF2IMG.</li>
                <li>Do not use PDF2IMG for unlawful, harmful, or malicious purposes.</li>
                <li>You agree not to attempt to reverse-engineer or interfere with the service.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                All trademarks, logos, and content related to PDF2IMG are the property PDF2IMG.com. You may not use our branding or code without explicit permission.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Disclaimer of Warranties</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                PDF2IMG is provided "as is" and "as available" without warranties of any kind. We do not guarantee that the service will be error-free, secure, or uninterrupted.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Under no circumstances shall PDF2IMG or its contributors be liable for any indirect, incidental, or consequential damages arising from your use of the service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Modifications to the Service</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We reserve the right to modify, suspend, or discontinue the service at any time without notice.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Changes to These Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We may update these Terms from time to time. Changes will be effective immediately upon posting on this page, with the "Last updated" date revised accordingly.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                If you have any questions about these Terms, please contact us through our <a href="/contact" className="text-blue-500 underline">Contact page</a>.
              </p>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  )
}
