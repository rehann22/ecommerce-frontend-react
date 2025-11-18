import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from "./components/Cart";
import ProductList from "./components/ProductsList";
import Header from "./components/Header";
import { addToCart, increment, decrement, removeItem } from "./utils/cartHandler";
import HomePage from "./components/HomePage";
import ProductsDetail from "./components/ProductsDetail";


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
    <div id="parent" className="w-screen max-w-screen-xl h-screen mx-auto">
      <Router>

        <Header />

        <Routes>

          {/* Homepage */}
          <Route
            path="/"
            element={<HomePage />}
          />

          {/* Product Detail */}
          <Route
            path="/product/:id"
            element={<ProductsDetail handleAddToCart={handleAddToCart} />}
          />

          {/* Product List */}
          <Route
            path="/products-list"
            element={<ProductList />}
          />

          {/* Cart */}
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

      </Router>

    </div >
  )
}

export default App
