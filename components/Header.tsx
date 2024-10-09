"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, Truck } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold text-primary flex items-center">
          <Truck className="mr-2" />
          Rico Technologies
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
          <Link href="/products" className="text-foreground hover:text-primary transition-colors">Products</Link>
          <Link href="/#why-choose-us" className="text-foreground hover:text-primary transition-colors">Why Choose Us</Link>
          <Link href="/#contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
        </nav>
        <Button className="hidden md:inline-flex">Order Now</Button>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 p-4">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
            <Link href="/products" className="text-foreground hover:text-primary transition-colors">Products</Link>
            <Link href="/#why-choose-us" className="text-foreground hover:text-primary transition-colors">Why Choose Us</Link>
            <Link href="/#contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
            <Button className="w-full">Order Now</Button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header