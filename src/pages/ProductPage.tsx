import { useEffect, useState } from "react"
import { useParams } from "react-router"
import type { Product } from "../types/product"

function ProductPage() {
  const { id } = useParams()

  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      if(!res.ok){
        throw new Error ("Failed to load product")
      }
      return res.json()
    })
    .then((data) => {
      setProduct(data)
      setLoading(false)
    })
    .catch(() => {
      setError("Failed to load product")
      setLoading(false)
    })
  }, [id])

  if(loading){
    return <p>Loading...</p>
  }
  if(error){
    return <p>{error}</p>
  }

  if (!product) {
    return <p>Product not found</p>
  }
  return (
    <div>
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.category}</p>
    </div>
  )
}

export default ProductPage