import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact PDF2IMG | Get in Touch",
  description:
    "Contact the PDF2IMG team with questions, feedback, or support requests about our free PDF to image converter.",
  openGraph: {
    title: "Contact PDF2IMG | Get in Touch",
    description: "Contact the PDF2IMG team with questions, feedback, or support requests.",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
