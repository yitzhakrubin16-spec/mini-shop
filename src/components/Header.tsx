import { Link } from "react-router"
import { useFavoritesStore } from "../store/favoritesStore"
import ThemeToggle from "./ThemeToggle"

function Header() {
  const { favorites } = useFavoritesStore()

  return (
    <header>
        <h2>Mini shop</h2>
        <nav>
          <ThemeToggle />
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites ({favorites.length})</Link>
        </nav>
    </header>
  )
}

export default Header