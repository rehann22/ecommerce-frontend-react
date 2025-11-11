import { useState } from "react";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import { addToCart, increment, decrement, removeItem } from "./utils/cartHandler";

function App() {

  //set state
  const [cart, setCart] = useState([])

  //add product to cart
  const handleAddToCart = (product) => {
    setCart((prev) => addToCart(prev, product))
  };

  const incrementQty = (productId) => {
    //use functional updates to avoid stale state, always use the latest value
    setCart((prev) => increment(prev, productId));
  };

  const decrementQty = (productId) => {
    setCart((prev) => decrement(prev, productId));
  };

  const removeFromCart = (productId) => {
    setCart((prev) => removeItem(prev, productId));
  };

  return (
    <div>
      <ProductList onAddToCart={handleAddToCart} />
      <Cart
        cart={cart}
        incrementQty={incrementQty}
        decrementQty={decrementQty}
        removeFromCart={removeFromCart} />
    </div>
  )
}

export default App
