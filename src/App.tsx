
import './App.css'
import { Routes, Route } from "react-router"
import HomePage from "./pages/HomePage"
import FavoritesPage from './pages/FavoritesPage'
import ProductPage from './pages/ProductPage'


function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/favorites' element={<FavoritesPage />}/>
      <Route path='/products/:id' element={<ProductPage />}/>
    </Routes>
      
  )
}

export default App