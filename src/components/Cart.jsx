function Cart({ cart, incrementQty, decrementQty, removeFromCart }) {

    return (
        <div>
            <h2>Keranjang</h2>

            {cart.length === 0 && <p>keranjang masih kosong</p>}

            {cart.map((item) => (
                <div key={item.id}>
                    <p>
                        <input type="checkbox" name="" id="" />
                        {item.name} - Rp {item.price.toLocaleString("id-ID")}
                        <span> - </span>
                        <button onClick={() => removeFromCart(item.id)}>Hapus</button>
                    </p>

                    <p>
                        <span> Qty: </span>
                        <button onClick={() => decrementQty(item.id)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => incrementQty(item.id)}>+</button>
                    </p>
                </div>
            ))}

            <div>
                <h3>Total Harga: <span>Rp</span></h3>
            </div>

        </div>
    )
}

export default Cart;