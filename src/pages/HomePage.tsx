import { useEffect, useState } from "react"
import type { Product } from "../types/product"

function HomePage() {

  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

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

  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  )
}

export default HomePage