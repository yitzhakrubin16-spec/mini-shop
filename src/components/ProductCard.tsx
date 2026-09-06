
import type { Product } from '../types/product'

type ProductCardProps = {
    product: Product
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div>
        <h2>{product.title}</h2>
        <p>${product.price}</p>
    </div>
  )
}

export default ProductCard