import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact PDF2IMG | Get in Touch",
  description:
    "Contact the PDF2IMG team with questions, feedback, or support requests about our free PDF to image converter.",
  alternates: {
    canonical: "https://pdf2img.com/contact",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
