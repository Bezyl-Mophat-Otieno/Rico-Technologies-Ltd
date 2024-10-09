import Link from 'next/link'
import { Truck, Facebook, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t border-border/40">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center text-primary">
              <Truck className="mr-2" />
              Rico Technologies
            </h3>
            <p>Your one-stop shop for all your computing needs in Kenya.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#products" className="hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="#why-choose-us" className="hover:text-primary transition-colors">Why Choose Us</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Contact Info</h3>
            <p>Email: info@ricotechnologies.com</p>
            <p>Phone: +254 700 000 000</p>
            <p>Address: Nairobi, Kenya</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                <Facebook />
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                <Twitter />
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Rico Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer