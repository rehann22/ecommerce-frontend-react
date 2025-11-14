export const fetchProducts = async () => {
    try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products')
        const data = await response.json()

        //data format
        return data.map((p) => ({
            id: p.id,
            name: p.title,
            thumbnail: p.images[0],
            price: p.price,
            category: p.category.name
        }))
    } catch (error) {
        console.error("error fetch product: ", error)
        return [] //fallback
    }
}
