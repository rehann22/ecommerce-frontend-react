import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import FilterBar from "../assets/FilterBar";
import { Filter } from "lucide-react";

function ProductList({ onAddToCart }) {
    const { products, categories, loading } = useProducts();
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
        <div class="mx-16">
            <div id="content" className="bg-white grid grid-cols-[234px_1fr] h-screen border-t border-[#BEBCBD]">
                {/* sidebar */}
                <div id="sidebar" className="grid grid-rows-[60px_280px] border-x border-[F9F8F6]">
                    <div id="container-filter-bar" className="border-b border-[F9F8F6] p-4">
                        <FilterBar />
                    </div>

                    <div id="container-category" className="border-b border-[F9F8F6] h-[280px] p-4">
                        {categories.map((cat, index) =>
                            <div id="button-category" key={index} className=
                                "pl-4 flex flex-col items-start justify-start text-[#807D7E] text-sm rounded hover:text-[#8A33FD] hover:scale-105 hover:shadow-lg transition-all duration-300 h-9">
                                <button className="btn">{cat}</button>
                            </div>
                        )}
                    </div>

                </div>
                {/* siderbar endd */}


                {/* products */}
                <div id="filter-products" className="mt-[50px]">
                    <div className="flex justify-between items-center ml-6 mb-6">
                        <p className="text-[#3F4646] text-base font-medium">Women Clothing</p>
                        <div className="flex space-x-4">
                            <p className="text-[#8A33FD] text-base font-medium">New</p>
                            <p className="text-[#3F4646] text-base font-medium">Recommended</p>
                        </div>
                    </div>

                    <div id="productList" className="bg-white">
                        <div className="pl-6 pr-0 max-w-2xl py-16 sm:py-0 lg:max-w-7xl lg:pr-0">
                            <div className="mb-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-3 items-stretch">
                                {products.map((product) => (
                                    <div
                                        key={product.id}
                                        className="group relative flex flex-col justify-between bg-white rounded-lg shadow-sm p-1"
                                    >
                                        {/* Gambar produk */}
                                        <div className="relative flex items-center justify-center bg-white-100 rounded-md overflow-hidden">
                                            <img
                                                alt={product.name}
                                                src={product.thumbnail}
                                                className="max-h-full max-w-full object-cover object-center group-hover:opacity-75 transition-all"
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
                                        <div className="mt-4 flex justify-between items-start px-1">
                                            <div className="w-3/4">
                                                <h3 className="text-sm text-gray-700 truncate">
                                                    <span>{product.name}</span>
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
                                            className="btn btn-block bg-blue-500 text-white mt-4 h-9 rounded-lg hover:bg-blue-600 hover:shadow-lg transition-all duration-300 ease-in-out transform w-full"
                                        >
                                            {clickedProduct === product.id ? "Added!" : "Add To Bag"}
                                        </motion.button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )

}

export default ProductList;
