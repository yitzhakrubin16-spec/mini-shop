import { useState } from "react"
import type { Product } from "../types/product"
import ProductCard from "../components/ProductCard"
import SearchBar from "../components/SearchBar"
import useFetch from "../hooks/useFetch"

function HomePage() {

  const [search, setSearch] = useState("")

  const {
      data: products,
      loading,
      error
    } = useFetch<Product[]>("https://fakestoreapi.com/products")

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  if (!products) {
    return <p>No products found</p>
  }
  
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <div>
      <h1>Products</h1>

      <SearchBar 
      search={search}
      setSearch={setSearch}
      />
      {filteredProducts.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div className="products-grid">
      {filteredProducts.map((product) => (
        <ProductCard
        key={product.id}
        product={product}
        />
      ))}
      </div>
    )}
    </div>
  )
}

export default HomePage