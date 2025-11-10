import { useEffect, useState } from "react";

function ProductList({ onAddToCart }) {
    const [products, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    //fetch with asyc await
    const fetchProduct = async () => {
        try {
            const response = await fetch("https://dummyjson.com/products")
            const data = await response.json()

            //get id, title etc
            const formattedProduct = data.products.map((p) => ({
                id: p.id,
                name: p.title,
                price: p.price
            }))

            setProduct(formattedProduct)
            console.log(formattedProduct);
            setLoading(false)
        } catch (error) {
            console.error("error fetch product: ", error)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])

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