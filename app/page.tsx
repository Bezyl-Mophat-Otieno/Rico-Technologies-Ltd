import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProductSection from '@/components/ProductSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <ProductSection />
      <section className="py-16 bg-secondary/50 text-center">
        <h2 className="text-3xl font-bold mb-4 text-primary">Explore Our Full Range</h2>
        <p className="mb-8">Discover our complete selection of laptops and desktops tailored for students and professionals.</p>
        <Link href="/products">
          <Button size="lg">View All Products
          </Button>
        </Link>
      </section>
      <WhyChooseUs />
      <ContactSection />
      <Footer />
    </main>
  )
}