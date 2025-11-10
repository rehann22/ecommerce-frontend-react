function Cart({ cart, incrementQty, decrementQty }) {

    return (
        <div>
            <h2>Keranjang</h2>

            {cart.length === 0 && <p>keranjang masih kosong</p>}

            {cart.map((item) => (
                <div key={item.id}>
                    <p>
                        {item.name} - Rp {item.price.toLocaleString("id-ID")}
                    </p>

                    <div>
                        <button onClick={() => decrementQty(item.id)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => incrementQty(item.id)}>+</button>
                    </div>

                    <p>Total: Rp {(item.price * item.quantity).toLocaleString("id-ID")}</p>
                </div>
            ))}

        </div>
    )
}

export default Cart;