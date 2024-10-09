'use client'
import { useState } from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductList from '@/components/ProductList'
import Cart from '@/components/Cart'
import { Product } from '@/types/product'

const products: Product[] = [
  { id: 1, name: 'Student Laptop Pro', type: 'Laptop', price: 38000, image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80' },
  { id: 2, name: 'Business Laptop Elite', type: 'Laptop', price: 39500, image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1468&q=80' },
  { id: 3, name: 'Developer Workstation', type: 'Desktop', price: 55000, image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1442&q=80' },
  { id: 4, name: 'Gaming Desktop Ultra', type: 'Desktop', price: 58000, image: 'https://images.unsplash.com/photo-1593640495253-23196b27a87f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1442&q=80' },
]

export default function ProductsPage() {
  const [cart, setCart] = useState<Product[]>([])

  const addToCart = (product: Product) => {
    setCart([...cart, product])
  }

  const removeFromCart = (productId: number) => {
    setCart(cart.filter(item => item.id !== productId))
  }

  const placeOrder = () => {
    const orderMessage = cart.map(item => `${item.name} - KSh ${item.price}`).join('\n')
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)
    const whatsappMessage = `Hello, I'd like to place an order for:\n\n${orderMessage}\n\nTotal: KSh ${totalPrice}`
    const whatsappUrl = `https://wa.me/254711415486?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Products - Rico Technologies</title>
        <meta name="description" content="Browse our selection of laptops and desktops" />
      </Head>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-primary">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <ProductList products={products} addToCart={addToCart} />
          </div>
          <div>
            <Cart cart={cart} removeFromCart={removeFromCart} placeOrder={placeOrder} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}