import { useState } from "react";
import { useParams } from "react-router-dom";
import images from "../utils/images";
import { useProducts } from "../hooks/useProducts";
import { motion, AnimatePresence } from "framer-motion";


function ProductsDetail({ handleAddToCart }) {

    const { id } = useParams()
    const { product, loading } = useProducts(id)
    const [activeImage, setActiveImage] = useState(0)
    const [showAlert, setShowAlert] = useState(false)

    if (loading) {
        return (
            <div className="flex justify-center items-center h-60">
                <span className="loading loading-spinner loading-lg text-primary"></span>
                <p className="ml-3 text-lg">Memuat Produk...</p>
            </div>
        );
    }

    const handleClickAdd = () => {
        handleAddToCart(product);
        setShowAlert(true);

        setTimeout(() => {
            setShowAlert(false);
        }, 1500);
    };


    return (
        <div id="container" className="mx-16 mt-[66px]">
            <div id="grid" className="h-[700px] grid grid-cols-[12%_38%_50%]">
                <div id="container-3-images">
                    <div className="bg-[#F6F6F6] h-full flex items-center justify-end pr-5">
                        <div className="grid grid-rows-[75.6px_75.6px_75.6px] gap-3">
                            {product.images.map((img, index) => (
                                <div
                                    key={index}
                                    onClick={() => setActiveImage(index)}
                                    className={`w-[75px] h-[75px] overflow-hidden rounded-lg cursor-pointer border 
                                    ${activeImage === index ? "border-[#8A33FD]" : "border-transparent"}`}
                                >
                                    <img
                                        src={img}
                                        alt={`images-${index}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div id="container-big-images" className="flex items-center justify-center">
                    <img src={product.images[activeImage]}
                        alt={product.title}
                        className="w-full h-full object-contains"
                    />
                </div>

                <div id="container-description" className="flex items-center justify-start ml-8">
                    <div className="grid grid-rows-[75%_25%] h-full w-full">
                        <div className="border-b border-[#BEBCBD]">

                            <div id="filter-result" className="w-[203px] h-[22px] flex items-center justify-start gap-2 text-sm mt-6 text-[#807D7E] text-base font-sm">
                                <div>Shop</div>
                                <img src={images["left.svg"]} alt="img left" />
                                <div>Women</div>
                                <img src={images["left.svg"]} alt="img left" />
                                <div>Top</div>
                            </div>

                            <div id="name-product" className=" mt-6 w-[393px] h-[88px] text-[25px] text-[#3C4242] font-bold line-clamp-2 py-1">
                                <div>{product.title}</div>
                            </div>

                            <div id="rating" className="mt-6 w-[359px] h-[22px] grid grid-cols-[60%_40%] gap-6">
                                <div className="w-22 h-22 flex items-center justify-between text-[#807D7E] text-sm">
                                    <img src={images["star.svg"]} alt="star" />
                                    <img src={images["star.svg"]} alt="star" />
                                    <img src={images["star.svg"]} alt="star" />
                                    <img src={images["star.svg"]} alt="star" />
                                    <img src={images["star.svg"]} alt="star" />
                                    <p>3.5</p>
                                </div>

                                <div className="flex items-center justify-start gap-2 text-[#807D7E] text-sm">
                                    <img src={images["message.svg"]} alt="comments" />
                                    <p>120 Comments</p>
                                </div>
                            </div>

                            <div id="size" className="mt-6 w-[290px] h-[80px] grid grid-rows-[22px_42px] gap-3">
                                <div className="flex items-center justify-start gap-4 text-sm">
                                    <p className="text-[#3F4646] font-bold">Select Size</p>
                                    <p className="text-[#807D7E]">Size Guide</p>
                                    <img src={images["arrow.svg"]} alt="arrow" />
                                </div>

                                <div className="flex items-center justify-between rounded">
                                    {["XS", "S", "M", "L", "XL"].map((size) => (
                                        <div className="h-[42px] w-[42px] flex items-center justify-center text-sm">
                                            <button
                                                key={size}
                                                className="border-2 border-[#BEBCBD] rounded-xl hover:bg-[#3C4242] hover:text-white w-[38px] h-[38px]"
                                            >
                                                {size}
                                            </button>
                                        </div>
                                    ))}
                                </div>

                            </div>

                            <div id="color" className="mt-6 w-[156px] h-[77px] grid grid-rows-[22px_22px] gap-5">
                                <p className="text-[#3F4646] text-sm font-bold">
                                    Colours Available
                                </p>

                                <div className="flex items-center justify-between">
                                    <button className="bg-red-500 w-[30px] h-[30px] rounded-full hover:ring-2 hover:ring-red-500 hover:ring-offset-2"></button>
                                    <button className="bg-yellow-500 w-[30px] h-[30px] rounded-full hover:ring-2 hover:ring-yellow-500 hover:ring-offset-2"></button>
                                    <button className="bg-green-500 w-[30px] h-[30px] rounded-full hover:ring-2 hover:ring-green-500 hover:ring-offset-2"></button>
                                    <button className="bg-blue-500 w-[30px] h-[30px] rounded-full hover:ring-2 hover:ring-blue-500 hover:ring-offset-2"></button>
                                </div>

                            </div>

                            <div id="cart" className="mt-6 w-[362px] h-[46px] grid grid cols-[199px_138px]">
                                <div className="flex items-center justify-between">
                                    {/* <button onClick={() => handleAddToCart(product)}
                                        className="bg-[#8A33FD] text-[#FFFFFF] w-[199px] rounded-xl flex items-center justify-center gap-2 py-2">
                                        <img src={images["shopping-cart.svg"]} alt="shopping cart" />
                                        Add To Cart
                                    </button> */}

                                    <div className="relative">

                                        {/* BUTTON */}
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={handleClickAdd}
                                            className="bg-[#8A33FD] text-white w-[199px] rounded-xl flex items-center justify-center gap-2 py-2"
                                        >
                                            <img src={images["shopping-cart.svg"]} alt="shopping cart" />
                                            Add To Cart
                                        </motion.button>

                                        {/* TOAST */}
                                        <AnimatePresence>
                                            {showAlert && (
                                                <motion.div
                                                    initial={{ opacity: 0, x: 50, y: 20 }}
                                                    animate={{ opacity: 1, x: 0, y: 0 }}
                                                    exit={{ opacity: 0, x: 50, y: 20 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="bg-[#8A33FD] text-white w-[199px] rounded-xl flex items-center justify-center gap-2 py-2"
                                                >
                                                    {/* Icon Check */}
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-5 h-5 text-white"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>

                                                    Added to cart!
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                    </div>

                                    <button className="border border-[#3C4242] text-[#3C4242] w-[138px] rounded-xl flex items-center justify-center py-2">
                                        ${product.price}
                                    </button>
                                </div>
                            </div>

                        </div>

                        <div id="corner-right" className="mt-6">
                            <div className="grid grid-cols-2 grid-rows-2 gap-2 text-[#3C4242] text-sm font-semibold">
                                <div className="w-[219px] h-[50px] flex items-center gap-4">
                                    <div className="w-[44px] h-[44px] bg-[#F6F6F6] rounded-full flex items-center justify-center">
                                        <img src={images["credit-card.svg"]} alt="secure" className="w-6 h-6" />
                                    </div>
                                    Secure payment
                                </div>

                                <div className="w-[219px] h-[50px] flex items-center gap-4">
                                    <div className="w-[44px] h-[44px] bg-[#F6F6F6] rounded-full flex items-center justify-center">
                                        <img src={images["size-fit.svg"]} alt="size" className="w-6 h-6" />
                                    </div>
                                    Size & Fit
                                </div>

                                <div className="w-[219px] h-[50px] flex items-center gap-4">
                                    <div className="w-[44px] h-[44px] bg-[#F6F6F6] rounded-full flex items-center justify-center">
                                        <img src={images["truck.svg"]} alt="shipping" className="w-6 h-6" />
                                    </div>
                                    Free Shipping
                                </div>

                                <div className="w-[219px] h-[50px] flex items-center gap-4">
                                    <div className="w-[44px] h-[44px] bg-[#F6F6F6] rounded-full flex items-center justify-center">
                                        <img src={images["returns.svg"]} alt="return" className="w-6 h-6" />
                                    </div>
                                    Free Shipping & Returns
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsDetail;