import { useProduct } from "../hooks/useProduct";

function ProductList({ onAddToCart }) {

    //call hook
    const { products, loading } = useProduct();

    if (loading) return <p>Loading...</p>

    return (
        <div>
            <h2>Produk</h2>

            {products.map((product) => (
                <div key={product.id}>
                    <p>
                        {product.name} - Rp {product.price.toLocaleString("id-ID")}
                    </p>
                    <button onClick={() => onAddToCart(product)}>Add To Cart</button>
                </div>
            ))}
        </div>
    )

}

export default ProductList;