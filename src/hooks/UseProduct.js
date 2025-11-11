import { useEffect, useState } from "react";
import { fetchProducts } from "../api/productApi";

//save the results of the api fetch to the state
export function useProduct() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
            const result = await fetchProducts()
            setProducts(result)
            setLoading(false)
        }

        getData()
    }, [])

    return { products, loading }

};