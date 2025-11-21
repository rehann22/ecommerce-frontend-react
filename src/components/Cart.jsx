import { useState } from "react";
import images from "../utils/images";
import { motion } from "framer-motion";

function Cart({ cart, incrementQty, decrementQty, removeFromCart, removeAllSelected }) {
    const [selectedItems, setSelectedItems] = useState([]);

    const handleCheckboxChange = (productId) => {
        if (selectedItems.includes(productId)) {
            setSelectedItems(selectedItems.filter((id) => id !== productId));
        } else {
            setSelectedItems([...selectedItems, productId]);
        }
    };

    const handleSelectAll = () => {
        if (selectedItems.length === cart.length) {
            setSelectedItems([]);
        } else {
            setSelectedItems(cart.map((item) => item.id));
        }
    };

    const handleDeleteSelected = () => {
        removeAllSelected(selectedItems);
        setSelectedItems([]);
    };

    const subtotal = (item) => {
        return item.price * item.quantity;
    };


    const grandTotal = cart
        .filter((item) => selectedItems.includes(item.id))
        .reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div id="container-cart" className="grid grid-rows-[91px_auto_320px] mt-[100px]">

            <div className="mx-16 flex items-center justify-start">
                <div className="h-[91px] w-[482px]">

                    <div className="flex items-center justify-start gap-3 w-[175px] h-[22px] text-sm">
                        <p className="text-[#807D7E]">Home</p>
                        <img src={images["left.svg"]} alt="left" />
                        <p className="text-[#3C4242]">Add To Cart</p>
                    </div>

                    <div className="text-xs text-[#807D7E] mt-6">
                        <p>Please fill in the field below and click place order to complete your purchase!</p>
                        <div className="flex items-center justify-start gap-1">
                            <p>Already register?</p>
                            <p className="text-[#8A33FD] cursor-pointer">Please login here</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto mx-16 mt-[30px]">
                <table className="table table-zebra table-sm">
                    {/* head */}
                    <thead>
                        <tr className="h-[40px] border-b">
                            <th>Select</th>
                            <th>Products Details</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Shipping</th>
                            <th>Subtotal</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    {cart.map((items) => (
                        <tbody className="text-sm text-[#807D7E]" key={items.id}>
                            <tr className="border-b">
                                <th>
                                    <label>
                                        <input
                                            type="checkbox"
                                            className="checkbox bg-[#F2EDED]"
                                            onChange={() => handleCheckboxChange(items.id)}
                                            checked={selectedItems.includes(items.id)}
                                        />
                                    </label>
                                </th>

                                <td>
                                    <div className="flex items-start justify-start gap-3">

                                        {/* Image */}
                                        <div className="w-[105px] h-[120px] rounded-md overflow-hidden flex items-center justify-center">
                                            <img
                                                src={items.images[0]}
                                                alt="image"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Product Info */}
                                        <div className="h-[100px] w-[200px] grid">
                                            <div className="text-sm text-[#3C4242] font-semibold line-clamp-2">{items.title}</div>
                                            <div className="text-xs text-[#807D7E]">Color:</div>
                                            <div className="text-xs text-[#807D7E]">Size:</div>
                                        </div>

                                    </div>
                                </td>

                                <td className="font-bold">
                                    <div>${items.price.toLocaleString("id-ID")}</div>
                                </td>

                                <td className="font-bold">
                                    <div className="w-[70px] h-[36] bg-[#F2EDED] rounded-md flex items-center justify-center gap-4">
                                        <button onClick={() => decrementQty(items.id)}>-</button>
                                        <span>{items.quantity}</span>
                                        <button onClick={() => incrementQty(items.id)}>+</button>
                                    </div>
                                </td>

                                <td>
                                    Free
                                </td>

                                <td className="font-bold">
                                    <div>${subtotal(items)}</div>
                                </td>
                                <td>
                                    <button onClick={() => removeFromCart(items.id)}>
                                        <img src={images["deletecon.svg"]} alt="" />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>

            <div id="footer" className="grid grid-cols-[50%_50%] w-full h-[300px] mt-6 bg-[#F6F6F6] ">
                <div className="ml-16 mt-6">
                    <div className="w-[375px] h-[222px] grid gap-3">
                        <div>
                            <p className="text-[#3C4242] font-semibold">Discount Codes</p>
                            <p className="text-[#807D7E] text-xs">Enter your coupon code if you have one</p>
                        </div>
                        <div className="flex items-top justify-top">
                            <input type="text" className="rounded-md h-[35px] border text-[#3C4242]" />
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={""}
                                className="text-[#3C4242] font-semibold bg-[#8A33FD] rounded-md text-white w-[161px] h-[35px] text-xs"
                            >
                                Apply Coupon
                            </motion.button>
                        </div>
                        <div>
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={""}
                                className="bg-white text-[#3C4242] font-semibold rounded-md border w-[182.67px] h-[35px] text-xs"
                            >
                                Continue Shopping
                            </motion.button>
                        </div>
                    </div>
                </div>

                <div className="mr-16 flex items-end justify-end">
                    <div className="w-[350px] h-[300px] bg-[#F3F3F3]">
                        <div className="w-[170px] mx-auto">
                            <div className="grid grid-cols-2 grid-rows-2 text-[#3C4242] w-full gap-2 mt-6">
                                <div>Sub Total</div>
                                <div className="text-right font-semibold">${grandTotal}</div>

                                <div>Shipping</div>
                                <div className="text-right font-semibold">$0</div>
                            </div>

                            <div className="grid grid-cols-2 mt-5 w-full">
                                <div className="font-semibold">Grand Total</div>
                                <div className="text-right font-semibold">${grandTotal}</div>
                            </div>
                        </div>

                        <div className="mt-8 border-t border-t-[#BEBCBD]">
                            <div className="mt-12 mx-auto flex justify-center">
                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    onClick={""}
                                    className="text-[#3C4242] font-semibold bg-[#8A33FD] rounded-md text-white w-[161px] h-[35px] text-xs"
                                >
                                    Procedd To Checkout
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart


