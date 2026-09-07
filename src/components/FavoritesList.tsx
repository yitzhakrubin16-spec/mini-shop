import type { Product } from "../types/product"
import ProductCard from "./ProductCard"

type FavoritesListProps = {
  favorites: Product[]
}

function FavoritesList({ favorites }: FavoritesListProps) {
  return (
    <div className="products-grid">
      {favorites.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  )
}

export default FavoritesList