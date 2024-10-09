import { Product } from '@/types/product'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image'

interface ProductListProps {
  products: Product[]
  addToCart: (product: Product) => void
}

const ProductList: React.FC<ProductListProps> = ({ products, addToCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden">
          <Image src={product.image} alt={product.name} width={400} height={200} className="w-full h-48 object-cover" />
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
            <CardDescription>{product.type}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-primary">KSh {product.price.toLocaleString()}</p>
          </CardContent>
          <CardFooter>
            <Button onClick={() => addToCart(product)} className="w-full">Add to Cart</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default ProductList