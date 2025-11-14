import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import Header from "./components/Header";
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
    setCart((prevCart) => prevCart.filter((item) => !selectedIds.includes(item.id)));
  };

  return (

    <Router>
      <div id="parent" className="w-screen max-w-screen-xl h-screen mx-auto">
        {/* header */}
        <Header />

        <Routes>
          {/* product list */}
          <Route
            path="/" element={<ProductList onAddToCart={handleAddToCart} />} />

          {/* cart */}
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                incrementQty={incrementQty}
                decrementQty={decrementQty}
                removeFromCart={removeFromCart}
                removeAllSelected={removeAllSelected}
              />
            }
          />
        </Routes>

      </div>

    </Router>
  );
}

export default App
