import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Privacy Policy | PDF2IMG - Secure PDF to Image Conversion",
  description:
    "PDF2IMG's privacy policy. Learn how we protect your data with our 100% client-side PDF to image converter. No uploads, no tracking, complete privacy.",
  openGraph: {
    title: "Privacy Policy | PDF2IMG - Secure PDF to Image Conversion",
    description:
      "PDF2IMG's privacy policy. Learn how we protect your data with our 100% client-side PDF to image converter.",
  },
}

export default function PrivacyPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Your privacy is our top priority. Learn how PDF2IMG protects your data.
        </p>

        <div className="mt-8 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Our Privacy Commitment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                At PDF2IMG, we are committed to protecting your privacy. This Privacy Policy explains how we handle your
                data when you use our service.
              </p>
              <p>
                <strong>Last updated:</strong> April 29, 2025
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Collection</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                <strong>We do not collect any personal data.</strong> PDF2IMG operates entirely within your browser, and
                we do not track, store, or transmit any of your information or documents.
              </p>
              <p>When you upload a PDF file to convert it to an image:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>The file is processed entirely in your browser</li>
                <li>The file is never uploaded to our servers</li>
                <li>We have no access to the content of your documents</li>
                <li>No data is stored after you close the browser tab</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cookies and Local Storage</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>PDF2IMG uses minimal browser storage for essential functionality:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>We use local storage only to remember your theme preference (light/dark mode)</li>
                <li>We do not use any tracking cookies</li>
                <li>We do not use any third-party analytics services</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Third-Party Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                PDF2IMG does not integrate with any third-party services that would collect your data. We do not use:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Analytics services</li>
                <li>Advertising networks</li>
                <li>Social media integrations</li>
                <li>User tracking systems</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p>If you have any questions about our Privacy Policy, please contact us through our Contact page.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
