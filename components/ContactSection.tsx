"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MessageSquare, Phone, Mail } from 'lucide-react'

const ContactSection = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ name, email, message })
    setName('')
    setEmail('')
    setMessage('')
  }

  const whatsappNumber = "+254711415486"
  const whatsappMessage = "Hello, I'm interested in your computer products!"

  return (
    <section id="contact" className="py-16 bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
          <div className="flex flex-col justify-center items-center space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Quick Contact</h3>
              <p className="flex items-center mb-2">
                <Phone className="mr-2 text-primary" />
                +254 700 000 000
              </p>
              <p className="flex items-center mb-4">
                <Mail className="mr-2 text-primary" />
                info@ricotechnologies.com
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Order via WhatsApp</h3>
              <p className="mb-4 text-center">
                Need a quick response? Reach out to us directly on WhatsApp for instant assistance and orders.
              </p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="flex items-center w-full justify-center">
                  <MessageSquare className="mr-2" />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection