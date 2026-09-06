import { Link } from "react-router"


function Header() {
  return (
    <header>
        <h2>Mini shop</h2>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>
    </header>
  )
}

export default Header