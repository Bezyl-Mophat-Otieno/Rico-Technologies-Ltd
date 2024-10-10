export interface Product {
  id: number
  name: string
  type?: 'Laptop' | 'Desktop'
  description?: string
  price: number | string
  image: string
}