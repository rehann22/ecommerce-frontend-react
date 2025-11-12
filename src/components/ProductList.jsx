// import { useProducts } from "../hooks/useProducts";


// function ProductList({ onAddToCart }) {
//     const { products, loading } = useProducts()

//     if (loading) {
//         // Tampilkan loading spinner yang lebih baik dari Daisy UI
//         return (
//             <div className="flex justify-center items-center h-40">
//                 <span className="loading loading-spinner loading-lg text-primary"></span>
//                 <p className="ml-3 text-lg">Memuat Produk...</p>
//             </div>
//         );
//     }

//     return (
//         <div className="bg-white">
//             <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8 ">

//                 <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//                     {products.map((product) => (
//                         <div key={product.id} className="group relative cursor-pointer">
//                             <img
//                                 alt={product.name}
//                                 src={product.thumbnail}
//                                 className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
//                             />
//                             {/* Nama & Harga */}
//                             <div className="mt-4 flex justify-between items-start">
//                                 <div className="w-3/4">
//                                     <h3 className="text-sm text-gray-700 truncate">
//                                         <a href={product.href} className="relative">
//                                             <span aria-hidden="true" className="absolute inset-0" />
//                                             {product.name}
//                                         </a>
//                                     </h3>
//                                 </div>
//                                 <p className="text-sm font-medium text-gray-900">Rp {product.price}</p>
//                             </div>

//                             {/* Spacer agar tombol selalu di bawah */}
//                             <div className="mt-auto">
//                                 <button onClick={() => onAddToCart(product)} className="btn btn-block bg-blue-500 text-white cursor-pointer mt-4 
//                                     h-9 px-6 rounded-lg 
//                                     hover:bg-blue-600 hover:shadow-lg hover:-translate-y-1 
//                                     transition-all duration-300 ease-in-out transform w-full">
//                                     Add To Bag
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }


// export default ProductList;






import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useProducts } from "../hooks/useProducts";

function ProductList({ onAddToCart }) {
    const { products, loading } = useProducts();
    const [clickedProduct, setClickedProduct] = useState(null);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-40">
                <span className="loading loading-spinner loading-lg text-primary"></span>
                <p className="ml-3 text-lg">Memuat Produk...</p>
            </div>
        );
    }

    const handleAddToCart = (product) => {
        setClickedProduct(product.id);
        onAddToCart(product);

        // reset animasi setelah 600ms
        setTimeout(() => setClickedProduct(null), 600);
    };

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8">
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group relative cursor-pointer flex flex-col justify-between"
                        >
                            {/* Gambar produk */}
                            <div className="relative">
                                <img
                                    alt={product.name}
                                    src={product.thumbnail}
                                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80 transition-all"
                                />

                                {/* Efek animasi "terbang ke keranjang" */}
                                <AnimatePresence>
                                    {clickedProduct === product.id && (
                                        <motion.img
                                            src={product.thumbnail}
                                            alt=""
                                            initial={{ opacity: 1, scale: 1, y: 0 }}
                                            animate={{
                                                opacity: 0,
                                                scale: 0.3,
                                                y: -100,
                                                x: 120,
                                            }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.6, ease: "easeInOut" }}
                                            className="absolute top-0 left-0 w-16 h-16 rounded-md pointer-events-none"
                                        />
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Nama dan Harga */}
                            <div className="mt-4 flex justify-between items-start">
                                <div className="w-3/4">
                                    <h3 className="text-sm text-gray-700 truncate">
                                        <span className="relative">{product.name}</span>
                                    </h3>
                                </div>
                                <p className="text-sm font-medium text-gray-900">
                                    Rp {product.price}
                                </p>
                            </div>

                            {/* Tombol Add To Bag */}
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                animate={
                                    clickedProduct === product.id
                                        ? { scale: [1, 1.2, 1], backgroundColor: "#2563EB" }
                                        : {}
                                }
                                transition={{ duration: 0.5 }}
                                onClick={() => handleAddToCart(product)}
                                className="btn btn-block bg-blue-500 text-white mt-4 h-9 px-6 rounded-lg hover:bg-blue-600 hover:shadow-lg transition-all duration-300 ease-in-out transform w-full"
                            >
                                {clickedProduct === product.id ? "Added!" : "Add To Bag"}
                            </motion.button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductList;
