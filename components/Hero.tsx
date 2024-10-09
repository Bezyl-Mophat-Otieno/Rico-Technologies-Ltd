import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { CreditCard, Clock, Truck } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-tech-pattern">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80"
          alt="Tech background"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary">Empower Your Tech Journey</h1>
        <p className="text-xl md:text-2xl mb-8">Premium computers and accessories for students and professionals in Kenya</p>
        <Link href='/products'>
        <Button size="lg" className="text-lg px-8 py-6 mb-8">Explore Our Products</Button>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="bg-secondary/50 p-4 rounded-lg flex items-center">
            <CreditCard className="mr-2 text-primary" />
            <span>Pay on Delivery</span>
          </div>
          <div className="bg-secondary/50 p-4 rounded-lg flex items-center">
            <Clock className="mr-2 text-primary" />
            <span>24/7 Customer Support</span>
          </div>
          <div className="bg-secondary/50 p-4 rounded-lg flex items-center">
            <Truck className="mr-2 text-primary" />
            <span>Fast Nationwide Delivery</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero