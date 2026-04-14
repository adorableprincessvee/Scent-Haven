import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { WishlistProvider } from "./contexts/WishlistContext";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Services from "./pages/Services";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

function App() {
  return (
    <WishlistProvider>
      <CartProvider>
        <Router>
          <Header />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </Router>
      </CartProvider>
    </WishlistProvider>
  );
}

export default App;

