"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Send, Mail } from "lucide-react"

export default function ContactPageClient() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Prepare form data for Formsubmit
    const formData = new FormData()
    formData.append("name", name)
    formData.append("email", email)
    formData.append("message", message)
    // Spam protection (honeypot)
    formData.append("_honey", "")
    // Disable CAPTCHA
    formData.append("_captcha", "false")

    try {
      const res = await fetch("https://formsubmit.co/contact@pdf2img.com", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      })

      if (res.ok) {
        toast({
          title: "Message sent",
          description: "Thank you for your message. We'll get back to you soon.",
        })
        setName("")
        setEmail("")
        setMessage("")
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again later or email us directly.",
          variant: "destructive"
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later or email us directly.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Contact Us</h1>
        <p className="mt-4 text-lg text-muted-foreground">Have questions or feedback? We'd love to hear from you.</p>

        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                {/* Honeypot field for spam protection */}
                <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
                {/* Disable CAPTCHA */}
                <input type="hidden" name="_captcha" value="false" />
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">Alternatively, you can email us directly at:</p>
            <a href="mailto:contact@pdf2img.com" className="mt-2 inline-flex items-center text-primary hover:underline">
              <Mail className="mr-2 h-4 w-4" />
              contact@pdf2img.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
