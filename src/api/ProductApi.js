export const fetchProducts = async () => {
    try {
        const response = await fetch("https://dummyjson.com/products")
        const data = await response.json()

        //data format
        return data.products.map((p) => ({
            id: p.id,
            name: p.title,
            thumbnail: p.thumbnail,
            price: p.price
        }))
    } catch (error) {
        console.error("error fetch product: ", error)
        return [] //fallback
    }
}
