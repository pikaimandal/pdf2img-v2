"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu } from "lucide-react"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // After mounting, we can safely show the UI that depends on the theme
  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { name: "Home", path: "/" },
    { name: "FAQ", path: "/faq" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Privacy", path: "/privacy" },
    { name: "Contact", path: "/contact" },
  ]

  const conversionItems = [
    { name: "PDF to PNG", path: "/pdf-to-png" },
    { name: "PDF to JPG", path: "/pdf-to-jpg" },
    { name: "PDF to JPEG", path: "/pdf-to-jpeg" },
    { name: "PDF to SVG", path: "/pdf-to-svg" },
  ]

  const logoSrc = theme === "dark" ? "/pdf2imgblacklogo.png" : "/pdf2imgwhitelogo.png"

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {mounted ? (
            <Image
              src={logoSrc || "/placeholder.svg"}
              alt="PDF to Image Converter Logo - PDF2IMG"
              width={150}
              height={40}
              className="h-8 w-auto"
              priority
            />
          ) : (
            <div className="h-8 w-32 bg-muted animate-pulse rounded" />
          )}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-between gap-4">
          <div className="flex gap-1">
            {navItems.map((item) => (
              <Button
                key={item.path}
                asChild
                variant="ghost"
                className={cn("text-sm", pathname === item.path && "bg-muted font-medium")}
              >
                <Link href={item.path}>{item.name}</Link>
              </Button>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm gap-1">
                  Converters <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {conversionItems.map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link href={item.path}>{item.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <div className="flex flex-col gap-6 pt-6">
                {navItems.map((item) => (
                  <Button
                    key={item.path}
                    asChild
                    variant="ghost"
                    className={cn("justify-start", pathname === item.path && "bg-muted font-medium")}
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href={item.path}>{item.name}</Link>
                  </Button>
                ))}

                <div className="px-4 py-2 font-medium">Converters</div>
                {conversionItems.map((item) => (
                  <Button
                    key={item.path}
                    asChild
                    variant="ghost"
                    className={cn("justify-start pl-6", pathname === item.path && "bg-muted font-medium")}
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href={item.path}>{item.name}</Link>
                  </Button>
                ))}

                <div className="flex items-center">
                  <ThemeToggle />
                  <span className="ml-2 text-sm">Dark Mode On/Off</span>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
