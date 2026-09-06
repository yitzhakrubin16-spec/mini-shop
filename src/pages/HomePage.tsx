import { useEffect, useState } from "react"
import type { Product } from "../types/product"
import ProductCard from "../components/ProductCard"

function HomePage() {

  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((res) => {
      if(!res.ok){
        throw new Error("Failed to load products")
      }

      return res.json()
    })
    .then((data) => {
      setProducts(data)
      setLoading(false)
    })
    .catch(() => {
      setError("Failed to load products")
      setLoading(false)
    })
  }, [])

  if(loading){
    return <p>Loading...</p>
  }
  if(error){
    return <p>{error}</p>
  }

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <div>
      <h1>Products</h1>

      <input 
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)} 
          />
      {filteredProducts.map((product) => (
        <ProductCard
        key={product.id}
        product={product}
        />
      ))}
    </div>
  )
}

export default HomePage