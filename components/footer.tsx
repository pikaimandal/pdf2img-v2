"use client"

import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // After mounting, we can safely show the UI that depends on the theme
  useEffect(() => {
    setMounted(true)
  }, [])

  const logoSrc = theme === "dark" ? "/pdf2imgblacklogo.png" : "/pdf2imgwhitelogo.png"

  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link href="/" className="flex items-center gap-2">
            {mounted ? (
              <Image
                src={logoSrc || "/placeholder.svg"}
                alt="PDF2IMG Logo"
                width={120}
                height={30}
                className="h-6 w-auto"
              />
            ) : (
              <div className="h-6 w-24 bg-muted animate-pulse rounded" />
            )}
          </Link>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {currentYear} pdf2img.com. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
          <nav className="flex gap-4 sm:gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  )
}
