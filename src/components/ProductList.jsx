import { useProduct } from "../hooks/useProduct";

function ProductList({ onAddToCart }) {

    const { products, loading } = useProduct();

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h2>Produk</h2>

            {products.map((product) => (
                <div key={product.id} style={{ marginBottom: "20px" }}>
                    <img
                        src={product.thumbnail}
                        alt={product.name}
                        width="120"
                        style={{ borderRadius: "6px" }}
                    />

                    <p>
                        {product.name} - Rp {product.price.toLocaleString("id-ID")}
                    </p>

                    <button onClick={() => onAddToCart(product)}>Add To Cart</button>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
