import { useEffect, useState } from "react";
import { fetchProducts } from "../api/productsApi";

export function useProducts() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]); // ⬅️ tambahan
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const result = await fetchProducts();
            setProducts(result);

            // Ambil kategori unik dari produk
            const uniqueCategories = [...new Set(result.map((p) => p.category))];
            setCategories(uniqueCategories);

            setLoading(false);
        };

        getData();
    }, []);

    // kembalikan juga categories biar bisa dipakai di komponen lain
    return { products, categories, loading };
}
