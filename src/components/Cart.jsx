import { useState } from "react";

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

    const total = cart
        .filter((item) => selectedItems.includes(item.id))
        .reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
                    🛒 Keranjang Belanja
                </h2>

                {cart.length === 0 ? (
                    <p className="text-gray-500 text-center py-10">Keranjang masih kosong</p>
                ) : (
                    <>
                        <div className="divide-y divide-gray-200">
                            {cart.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex flex-col sm:flex-row items-center justify-between py-5"
                                >
                                    {/* Left: Checkbox + Gambar + Nama produk */}
                                    <div className="flex items-center space-x-4 w-full sm:w-2/3">
                                        <input
                                            type="checkbox"
                                            checked={selectedItems.includes(item.id)}
                                            onChange={() => handleCheckboxChange(item.id)}
                                            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                                        />
                                        <img
                                            src={item.thumbnail}
                                            alt={item.name}
                                            className="w-24 h-24 object-cover rounded-lg"
                                        />
                                        <div>
                                            <h3 className="font-medium text-gray-800">{item.name}</h3>
                                            <p className="text-gray-600 text-sm">
                                                Rp {item.price.toLocaleString("id-ID")}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Right: Quantity + Hapus */}
                                    <div className="flex items-center space-x-3 mt-4 sm:mt-0">
                                        <div className="flex items-center border rounded">
                                            <button
                                                onClick={() => decrementQty(item.id)}
                                                className="px-3 py-1 text-gray-600 hover:bg-gray-100 text-lg"
                                            >
                                                −
                                            </button>
                                            <span className="px-4 text-gray-800 font-medium">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() => incrementQty(item.id)}
                                                className="px-3 py-1 text-gray-600 hover:bg-gray-100 text-lg"
                                            >
                                                +
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-red-500 hover:text-red-700 text-sm font-medium"
                                        >
                                            Hapus
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Footer Section */}
                        <div className="mt-6 border-t pt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                            <div className="flex items-center space-x-3">
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        onChange={handleSelectAll}
                                        checked={selectedItems.length === cart.length && cart.length > 0}
                                        className="w-5 h-5 text-blue-600 rounded"
                                    />
                                    <span className="text-gray-700 font-medium">Pilih Semua</span>
                                </label>

                                {selectedItems.length > 0 && (
                                    <button
                                        onClick={handleDeleteSelected}
                                        className="text-red-600 hover:text-red-800 font-medium"
                                    >
                                        Hapus Terpilih
                                    </button>
                                )}
                            </div>

                            <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
                                <h3 className="text-lg font-semibold text-gray-800">
                                    Total:{" "}
                                    <span className="text-blue-600">
                                        Rp {total.toLocaleString("id-ID")}
                                    </span>
                                </h3>

                                <button
                                    disabled={selectedItems.length === 0}
                                    className={`mt-3 sm:mt-0 px-6 py-2 rounded-lg font-medium text-white transition ${selectedItems.length > 0
                                        ? "bg-blue-600 hover:bg-blue-700"
                                        : "bg-gray-400 cursor-not-allowed"
                                        }`}
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Cart;


