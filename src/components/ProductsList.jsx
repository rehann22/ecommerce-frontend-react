import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import images from "../utils/images";

function ProductList({ onAddToCart }) {
    const { products, categories, loading } = useProducts();
    const [clickedProduct, setClickedProduct] = useState(null);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-60">
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
        <div class="mx-16 mt-[85px]">
            <div id="content" className="bg-white grid grid-cols-[234px_1fr] h-screen">
                {/* sidebar */}
                <div id="sidebar" className="grid grid-rows-[auto_1fr] border-x border-[F9F8F6]">
                    <div id="container-filter-bar" className="border-b border-[F9F8F6] p-4">
                        <div className="bg-white px-4 flex items-center justify-between">
                            <span className="text-[#807D7E] text-base font-medium">Filter</span>
                            <img
                                src={images["filter.svg"]}
                                alt="Filter Icon"
                            />
                        </div>
                    </div>

                    <div id="container-category" className="border-b border-[F9F8F6] p-4">
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
                <div id="filter-products" className="mt-[43px]">
                    <div className="flex justify-between items-center ml-6 mb-6">
                        <p className="text-[#3F4646] text-base font-medium">Women</p>
                        <div className="flex space-x-4">
                            <p className="text-[#8A33FD] text-base font-medium">New</p>
                            <p className="text-[#3F4646] text-base font-medium">Recommended</p>
                        </div>
                    </div>

                    <div id="productList">
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
                                            <button className="absolute top-2 right-2 p-1 bg-white/80 backdrop-blur-sm rounded-full shadow hover:bg-white z-20">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.8}
                                                    stroke="currentColor"
                                                    className="w-5 h-5 text-gray-600"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935
                                                            0-3.597 1.126-4.312 2.733C11.285 4.876 9.623 3.75
                                                            7.688 3.75 5.099 3.75 3 5.765 3 8.25c0 7.22 9
                                                            12 9 12s9-4.78 9-12z"
                                                    />
                                                </svg>
                                            </button>

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
                                            <div className="w-[70%]">
                                                <h3 className="text-sm text-[#3F4646] truncate">
                                                    <span>{product.name}</span>
                                                </h3>
                                            </div>
                                            <p className="text-sm font-medium text-gray-900">
                                                ${product.price}
                                            </p>
                                        </div>

                                        {/* Tombol Add To Bag */}
                                        <motion.button
                                            whileTap={{ scale: 0.9 }}
                                            animate={
                                                clickedProduct === product.id
                                                    ? { scale: [1, 1.2, 1] }
                                                    : {}
                                            }
                                            transition={{ duration: 0.4 }}
                                            onClick={() => handleAddToCart(product)}
                                            className="btn btn-block bg-[#8A33FD] text-white mt-4 h-9 rounded-lg hover:bg-[#6620C1] hover:shadow-lg transition-all duration-300 ease-in-out w-full"
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
