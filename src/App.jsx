import { useState } from "react";
import Cart from "./component/Cart";
import ProductList from "./component/ProductList";
import { addToCart, increment, decrement } from "./utils/CartHandler";

function App() {

  //set state
  const [cart, setCart] = useState([])

  const handleAddToCart = (product) => {
    setCart((prevCart) => addToCart(prevCart, product));
  };

  const incrementQty = (productId) => {
    setCart(increment(cart, productId));
  };

  const decrementQty = (productId) => {
    setCart(decrement(cart, productId));
  };

  return (
    <div>
      <ProductList onAddToCart={handleAddToCart} />
      <Cart cart={cart} incrementQty={incrementQty} decrementQty={decrementQty} />
    </div>
  )
}

export default App
