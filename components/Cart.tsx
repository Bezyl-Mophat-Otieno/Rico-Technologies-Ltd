import { Product } from '@/types/product'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { X } from 'lucide-react'

interface CartProps {
  cart: Product[]
  removeFromCart: (productId: number) => void
  placeOrder: () => void
}

const Cart: React.FC<CartProps> = ({ cart, removeFromCart, placeOrder }) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Cart</CardTitle>
      </CardHeader>
      <CardContent>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul className="space-y-2">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <span>{item.name} - KSh {item.price.toLocaleString()}</span>
                <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                  <X className="h-4 w-4" />
                </Button>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
      <CardFooter className="flex flex-col items-stretch">
        <p className="text-xl font-bold mb-4">Total: KSh {totalPrice.toLocaleString()}</p>
        <Button onClick={placeOrder} disabled={cart.length === 0} className="w-full">
          Place Order via WhatsApp
        </Button>
      </CardFooter>
    </Card>
  )
}

export default Cart