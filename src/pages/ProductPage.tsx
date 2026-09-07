import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import type { Product } from "../types/product"
import { useFavoritesStore } from "../store/favoritesStore"

function ProductPage() {
  const { id } = useParams()

  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore()
  
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

  const favorite = isFavorite(product.id)

  return (
    <div>
      <button onClick={() => navigate("/")}>
        Back to products
      </button>
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.category}</p>
      <button
      onClick={() => {
        if(favorite) {
          removeFavorite(product.id)
        } else {
          addFavorite(product)
        }
      }}
    >
        {favorite ? "Remove from favorites" : "Add to favorites"}
      </button>
    </div>
  )
}

export default ProductPage