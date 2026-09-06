import type { Product } from '../types/product'
import { Link } from 'react-router'

type ProductCardProps = {
    product: Product
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div>
      <Link to={`/products/${product.id}`}>
        <img 
        src={product.image} 
        alt={product.title}
        width="150" />

        <h2>{product.title}</h2>
        <p>${product.price}</p>
      </Link>
    </div>
  )
}

export default ProductCard