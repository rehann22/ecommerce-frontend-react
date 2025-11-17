import { useEffect, useState } from "react";

export function useProducts(id = null) {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState(null);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                // Jika ada ID → fetch detail produk
                if (id) {
                    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
                    const data = await res.json();
                    setProduct(data);
                    setLoading(false);
                    return;
                }

                // Jika tidak ada ID → fetch semua produk
                const res = await fetch(`https://api.escuelajs.co/api/v1/products`);
                const data = await res.json();

                setProducts(data);

                // Ambil kategori unik
                const uniqueCategories = [...new Set(data.map((p) => p.category.name))];
                setCategories(uniqueCategories);

                setLoading(false);

            } catch (error) {
                console.error("Error fetching:", error);
                setLoading(false);
            }
        };

        getData();
    }, [id]);

    return { products, product, categories, loading };
}