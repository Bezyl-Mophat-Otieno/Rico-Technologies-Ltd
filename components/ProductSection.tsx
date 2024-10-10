"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { Product } from "@/types/product"

const products = [
  {
    id:1,
    name: "Student Laptop Bundle",
    description: "Perfect for university students. Includes laptop, backpack, and accessories.",
    price: 65000,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
  },
  {
    id:2,
    name: "Developer Workstation",
    description: "High-performance desktop setup for software engineers.",
    price: 150000,
    image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id:3,
    name: "Accessories Pack",
    description: "Essential accessories including mouse, keyboard, and headphones.",
    price: 15000,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2028&q=80"
  }
]

const placeOrder = (product: Product) => {
  const orderMessage = `${product.name} - KSh ${product.price}`
  const totalPrice = product.price
  const whatsappMessage = `Hello, I'd like to place an order for:\n\n${orderMessage}\n\nTotal: KSh ${totalPrice}`
  const whatsappUrl = `https://wa.me/254711415486?text=${encodeURIComponent(whatsappMessage)}`
  window.open(whatsappUrl, '_blank')
}

const ProductSection = () => {
  return (
    <section id="products" className="py-16 bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Our Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden">
              <Image src={product.image} alt={product.name} width={400} height={200} className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary">{product.price}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={()=>placeOrder(product)}>Order Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductSection