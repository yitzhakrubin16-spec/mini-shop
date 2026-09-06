
import './App.css'
import { Routes, Route } from "react-router"
import HomePage from "./pages/HomePage"
import FavoritesPage from './pages/FavoritesPage'
import ProductPage from './pages/ProductPage'
import Layout from './Layout'


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/favorites' element={<FavoritesPage />}/>
        <Route path='/products/:id' element={<ProductPage />}/>
      </Route>
    </Routes>
      
  )
}

export default App