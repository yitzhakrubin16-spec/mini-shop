import type { Product } from "../types/product";

type ProductDetailsProps = {
    product: Product
}

function ProductDetails({product}: ProductDetailsProps){
    return (
        <div>
            <img src={product.image} alt={product.title} />
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>{product.category}</p>
        </div>
    )
}

export default ProductDetails