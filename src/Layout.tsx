import { Outlet } from "react-router"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { ThemeContext } from "./context/ThemeContext"
import { useContext } from "react"

function Layout() {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={theme}>
      <Header />

      <main>
          <Outlet/>
      </main>

      <Footer />
    </div>
  )
}

export default Layout