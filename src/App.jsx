import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import ProductList from "./components/ProductsList";
import { addToCart, increment, decrement, removeItem } from "./utils/cartHandler";
import HomePage from "./components/HomePage";
import ProductsDetail from "./components/ProductsDetail";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

function App() {

  //set state
  const [cart, setCart] = useState([])

  //add product to cart
  const handleAddToCart = (product) => {
    setCart((prev) => addToCart(prev, product))
  };

  const incrementQty = (productId) => {
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
      <ScrollToTop />
      <Layout>
        <Routes>

          <Route path="/" element={<HomePage />} />

          <Route
            path="/product/:id"
            element={<ProductsDetail handleAddToCart={handleAddToCart} />}
          />

          <Route path="/products-list" element={<ProductList />} />

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
      </Layout>
    </Router>
  );
}

export default App
