import { useProducts } from "../hooks/useProducts";
import images from "../utils/images";
import LoadingAnimated from "./Loading";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductList() {
    const { products, categories, loading } = useProducts()
    const [selectedCategory, setSelectedCategory] = useState("All")
    const navigate = useNavigate();

    if (loading) {
        return <LoadingAnimated />;
    }

    const filterWhat = selectedCategory;

    const filteredProducts = selectedCategory === "All"
        ? products
        : products.filter((p) => p.category.name === selectedCategory);

    console.log("Kategori dipilih:", selectedCategory);
    console.log("Produk asli index 0:", products[0]?.category?.name);
    console.log("Produk hasil filter index 0:", filteredProducts[0]?.category?.name);
    console.log("Jumlah produk hasil filter:", filteredProducts.length);

    return (
        <div className="mx-16 mt-[66px]">
            <div id="content" className="bg-white grid grid-cols-[234px_1fr] min-h-screen">
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
                        <div className="pl-4 flex flex-col items-start justify-start text-[#807D7E] text-sm rounded hover:text-[#8A33FD] hover:scale-105 hover:shadow-lg transition-all duration-300 h-9">
                            <button
                                onClick={() => setSelectedCategory("All")}
                                className="btn">All</button>
                        </div>
                        {categories.map((cat, index) =>
                            <div
                                id="button-category"
                                key={index}
                                className="pl-4 flex flex-col items-start justify-start text-[#807D7E] text-sm rounded hover:text-[#8A33FD] hover:scale-105 hover:shadow-lg transition-all duration-300 h-9"
                            >
                                <button
                                    className="btn"
                                    onClick={() => {
                                        console.log("Kategori dipilih:", cat);
                                        setSelectedCategory(cat);
                                    }}
                                >
                                    {cat}
                                </button>
                            </div>
                        )}
                    </div>

                </div>
                {/* siderbar endd */}

                {/* products */}
                <div id="filter-products" className="mt-[43px]">
                    <div className="flex justify-between items-center mb-6">
                        <p className="text-[#3F4646] text-base font-medium ml-6">{filterWhat}</p>
                        <div className="flex space-x-4">
                            <p className="text-[#8A33FD] text-base font-medium">New</p>
                            <p className="text-[#3F4646] text-base font-medium">Recommended</p>
                        </div>
                    </div>

                    {/* card-product */}
                    <div id="card-products" className="pl-6 pr-0 max-w-2xl py-16 sm:py-0 lg:max-w-7xl lg:pr-0">
                        <div className="mb-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-3 items-stretch">
                            {filteredProducts.map((product) => (
                                <div
                                    key={product.id}
                                    className="group relative flex flex-col justify-between bg-white rounded-lg shadow-sm p-1"
                                    onClick={() => navigate(`/product/${product.id}`)}
                                >
                                    {/* products img */}
                                    <div className="relative flex items-center justify-center bg-white-100 rounded-md overflow-hidden">
                                        <img
                                            alt={product.title}
                                            src={product.images}
                                            className="max-h-full max-w-full object-cover object-center group-hover:opacity-75 transition-all"
                                        />
                                        <button
                                            onClick={(e) => e.stopPropagation()}
                                            className="absolute top-2 right-2 p-1 bg-white/80 backdrop-blur-sm rounded-full shadow hover:bg-white z-20"
                                        >
                                            <img
                                                src={images["heart.svg"]}
                                                alt="heart"
                                                className="w-5 h-5 object-contain p-[0.5px]"
                                            />
                                        </button>
                                    </div>

                                    {/* Name & Price */}
                                    <div className="mt-4 flex items-center justify-end">
                                        {/* Product name */}
                                        <div className="w-[70%]">
                                            <h3 className="text-sm text-[#3F4646] truncate">
                                                {product.title}
                                            </h3>
                                        </div>

                                        {/* Price box */}
                                        <div className="w-[82px] h-[36px] rounded-md bg-[#F6F6F6] text-[#3C4242] flex items-center justify-center font-semibold">
                                            <p>${product.price}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )

}

export default ProductList;
