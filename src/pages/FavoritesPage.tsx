import { useFavoritesStore } from "../store/favoritesStore"
import FavoritesList from "../components/FavoritesList"

function FavoritesPage() {
  const {favorites} = useFavoritesStore()
  return (
    <div>
      <h1>Favorites Page</h1>

      {favorites.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        <FavoritesList favorites={favorites} />
        )}
    </div>
  )
}

export default FavoritesPage