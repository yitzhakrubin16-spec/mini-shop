import type { Product } from '../types/product'
import { Link } from 'react-router'
import { useFavoritesStore } from '../store/favoritesStore'

type ProductCardProps = {
    product: Product
}

function ProductCard({ product }: ProductCardProps) {
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore()
  

  const favorite = isFavorite(product.id)
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
      <button
      onClick={() =>{
        if (favorite){
          removeFavorite(product.id)
        } else {
          addFavorite(product)
        }
      }}>
        {favorite ? "♥" : "♡"}
      </button>
    </div>
  )
}

export default ProductCard