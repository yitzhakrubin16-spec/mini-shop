import { useParams } from "react-router"

function ProductPage() {
  const { id } = useParams()
  return (
    <div>
      <h1>Product Page</h1>
      <p>Product id: {id}</p>
    </div>
  )
}

export default ProductPage