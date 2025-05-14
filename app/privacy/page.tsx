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
    <CardTitle>Your Rights Under GDPR and State Laws</CardTitle>
  </CardHeader>
  <CardContent className="space-y-4">
    <p>If you are located in the European Union or specific U.S. states like California, Virginia, or Colorado, you have the following rights regarding your personal data:</p>
    <ul className="list-disc pl-5 space-y-2">
      <li><strong>Right to Access:</strong> You can request access to the personal data we hold about you.</li>
      <li><strong>Right to Rectify:</strong> You can request corrections to inaccurate or incomplete data.</li>
      <li><strong>Right to Erasure:</strong> You can request that we delete your personal data, subject to certain exceptions.</li>
      <li><strong>Right to Restrict Processing:</strong> You can request restrictions on how we process your data.</li>
      <li><strong>Right to Data Portability:</strong> You can request a copy of your data in a machine-readable format.</li>
      <li><strong>Right to Object:</strong> You can object to certain types of processing, such as direct marketing.</li>
      <li><strong>Right to Withdraw Consent:</strong> If we rely on your consent to process your data, you can withdraw it at any time.</li>
      <li><strong>Right to File a Complaint:</strong> You can file a complaint with your local data protection authority.</li>
    </ul>
    <p>To exercise any of these rights, please contact us through our <a href="/contact" className="text-blue-500 underline">Contact page</a>.</p>
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
    <CardTitle>Legal Basis for Data Processing</CardTitle>
  </CardHeader>
  <CardContent className="space-y-4">
    <p>Under GDPR, we process your data based on one or more of the following legal grounds:</p>
    <ul className="list-disc pl-5 space-y-2">
      <li><strong>Consent:</strong> You have given us explicit consent for specific purposes.</li>
      <li><strong>Performance of a Contract:</strong> Processing is necessary to provide the services you requested.</li>
      <li><strong>Compliance with Legal Obligations:</strong> We may process your data to comply with applicable laws.</li>
      <li><strong>Legitimate Interests:</strong> Processing is necessary for our legitimate business interests, such as improving our services, provided these interests do not override your rights.</li>
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
    <CardTitle>Data Retention Policy</CardTitle>
  </CardHeader>
  <CardContent className="space-y-4">
    <p>We do not store any of your data as PDF2IMG operates entirely within your browser. However, if you contact us or provide information through our site, we will retain your data for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law.</p>
    <p>Once your data is no longer needed, we will securely delete or anonymize it.</p>
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
    <CardTitle>CCPA/CPRA Compliance</CardTitle>
  </CardHeader>
  <CardContent className="space-y-4">
    <p>If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA):</p>
    <ul className="list-disc pl-5 space-y-2">
      <li><strong>Right to Know:</strong> You can request information about the categories of personal data we collect and the purposes for which we use it.</li>
      <li><strong>Right to Delete:</strong> You can request deletion of your personal data.</li>
      <li><strong>Right to Opt-Out:</strong> You can opt out of the sale of your personal data. (Note: PDF2IMG does not sell user data.)</li>
      <li><strong>Right to Non-Discrimination:</strong> You will not face discrimination for exercising your privacy rights.</li>
    </ul>
    <p>To exercise these rights, please contact us through our <a href="/contact" className="text-blue-500 underline">Contact page</a>.</p>
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
