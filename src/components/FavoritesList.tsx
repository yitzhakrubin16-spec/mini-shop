import type { Product } from "../types/product"
import ProductCard from "./ProductCard"

type FavoritesListProps = {
  favorites: Product[]
}

function FavoritesList({ favorites }: FavoritesListProps) {
  return (
    <>
      {favorites.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </>
  )
}

export default FavoritesList