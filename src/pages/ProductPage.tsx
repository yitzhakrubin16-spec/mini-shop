
import { useNavigate, useParams } from "react-router"
import type { Product } from "../types/product"
import { useFavoritesStore } from "../store/favoritesStore"
import useFetch from "../hooks/useFetch"
import ProductDetails from "../components/ProductDetails"


function ProductPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore()
  
   const {
      data: product,
      loading,
      error
    } = useFetch<Product>(`https://fakestoreapi.com/products/${id}`)

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  if (!product) {
    return <p>No products found</p>
  }

  const favorite = isFavorite(product.id)

  return (
    <div>
      <button onClick={() => navigate("/")}>
        Back to products
      </button>
      <ProductDetails product={product} />
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