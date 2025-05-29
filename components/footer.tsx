"use client"

import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { ShoppingCart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [showBuyButton, setShowBuyButton] = useState(true) // Easy toggle for visibility

  // After mounting, we can safely show the UI that depends on the theme
  useEffect(() => {
    setMounted(true)
  }, [])

  const logoSrc = theme === "dark" ? "/pdf2imgblacklogo.png" : "/pdf2imgwhitelogo.png"

  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "FAQ", path: "/faq" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Privacy", path: "/privacy" },
    { name: "Contact", path: "/contact" },
  ]

  const conversionLinks = [
    { name: "PDF to PNG", path: "/pdf-to-png" },
    { name: "PDF to JPG", path: "/pdf-to-jpg" },
    { name: "PDF to JPEG", path: "/pdf-to-jpeg" },
    { name: "PDF to SVG", path: "/pdf-to-svg" },
  ]

  const handleBuyClick = () => {
    window.open("https://www.escrow.com/checkout?token=92d3bd68-d282-44f5-bc6f-531f8f11495d", "_blank")
  }

  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-2 mb-4">
              {mounted ? (
                <Image
                  src={logoSrc || "/placeholder.svg"}
                  alt="PDF to Image Converter Logo - PDF2IMG"
                  width={120}
                  height={30}
                  className="h-6 w-auto"
                />
              ) : (
                <div className="h-6 w-24 bg-muted animate-pulse rounded" />
              )}
            </Link>
            <p className="text-sm text-muted-foreground">
              Free online PDF to Image converter. Convert your PDF files to images securely in your browser.
            </p>
            <div className="mt-4">
              <ThemeToggle />
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Pages</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Converters</h3>
            <ul className="space-y-2">
              {conversionLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
            
            {/* Buy PDF2IMG Button - positioned below legal section */}
            {showBuyButton && (
              <div className="mt-6">
                <Button 
                  onClick={handleBuyClick}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                  size="default"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Buy PDF2IMG
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 border-t pt-6">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {currentYear} pdf2img.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
