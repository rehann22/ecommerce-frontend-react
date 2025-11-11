import { useState } from "react";

function Cart({ cart, incrementQty, decrementQty, removeFromCart, removeAllSelected }) {

    const [selectedItems, setSelectedItems] = useState([]);
    const [editItemId, setEditItemId] = useState(null);

    const handleCheckboxChange = (productId) => {
        if (selectedItems.includes(productId)) {
            setSelectedItems(selectedItems.filter((id) => id !== productId));
        } else {
            setSelectedItems([...selectedItems, productId]);
        }
    };

    const handleSelectAll = () => {
        if (selectedItems.length === cart.length) {
            setSelectedItems([]); // if all selected → unselect all
        } else {
            setSelectedItems(cart.map((item) => item.id)); // select all id
        }
    };

    const handleDeleteSelected = () => {
        removeAllSelected(selectedItems);  // send array id to App.jsx
        setSelectedItems([]); // reset selected after
    };

    const total = cart
        .filter((item) => selectedItems.includes(item.id))
        .reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div>
            <h2>Keranjang</h2>

            {cart.length === 0 && <p>keranjang masih kosong</p>}

            {cart.map((item) => (
                <div key={item.id} style={{ borderBottom: "1px solid #ddd" }}>
                    <input
                        type="checkbox"
                        checked={selectedItems.includes(item.id)}
                        onChange={() => handleCheckboxChange(item.id)}
                    />

                    <img
                        src={item.thumbnail}
                        alt={item.name}
                        width="60"
                        style={{ marginRight: "10px" }}
                    />

                    <span>
                        {item.name} - Rp {item.price.toLocaleString("id-ID")}
                    </span>

                    <div>
                        <button onClick={() => decrementQty(item.id)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => incrementQty(item.id)}>+</button>
                    </div>
                </div>
            ))}

            <div>
                {/* ✅ Checkbox Select All */}
                <label>
                    <input
                        type="checkbox"
                        onChange={handleSelectAll}
                        checked={selectedItems.length === cart.length && cart.length > 0}
                    />
                    Select All
                </label>
                <h3>Total Harga: Rp {total.toLocaleString("id-ID")}</h3>

                {/* ✅ button delete item selected */}
                {selectedItems.length > 0 && (
                    <button onClick={handleDeleteSelected}>
                        Hapus
                    </button>
                )}
            </div>

        </div>
    );
}

export default Cart;
