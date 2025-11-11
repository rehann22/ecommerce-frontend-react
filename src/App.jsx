import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from "./components/Cart";
import Header from "./components/Header";
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

  const removeAllSelected = (selectedIds) => {
    setCart(cart.filter((item) => !selectedIds.includes(item.id)));
  };

  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<ProductList onAddToCart={handleAddToCart} />} />

        <Route path="/cart" element={<Cart
          cart={cart}
          incrementQty={incrementQty}
          decrementQty={decrementQty}
          removeFromCart={removeFromCart} />}
          removeAllSelected={removeAllSelected} />
      </Routes>
    </Router>
  );
}

export default App
