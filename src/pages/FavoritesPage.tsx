import { useFavoritesStore } from "../store/favoritesStore"
import ProductCard from "../components/ProductCard"

function FavoritesPage() {
  const {favorites} = useFavoritesStore()
  return (
    <div>
      <h1>Favorites Page</h1>

      {favorites.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        favorites.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
        )))}
    </div>
  )
}

export default FavoritesPage