import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { allProducts } from "./Product";
import styles from "./ProductDetails.module.css";
import Footer from "../components/Footer";
import { useCart } from "../contexts/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = allProducts.find((p) => p.id === Number(id));
  const [qty, setQty] = useState(1);

  if (!product) return <h2 style={{ color: "white" }}>Product Not Found</h2>;

  const handleAddToCart = () => {
    addToCart(product, qty);
    // You could add a toast notification here
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className={styles.container}>
      <div style={{ flex: 1 }}>
        <button className={styles.backBtn} onClick={() => navigate(-1)}>← Back</button>

        <div className={styles.topSection}>
          <div className={styles.imageSection}>
            <img src={product.image} alt={product.name} />
          </div>

          <div className={styles.infoSection}>
            <h1>{product.name}</h1>
            <div className={styles.rating}>
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className={i < product.rating ? styles.filled : styles.empty}>★</span>
              ))}
              <span> ({product.reviews} Reviews)</span>
            </div>

            <p className={styles.description}>
              Step into a world of unparalleled opulence with {product.name}, an exquisite fragrance crafted for ultimate luxury.
            </p>

            {/* Unit Price */}
            <h2 className={styles.price}>₦{product.price}</h2>

            {/* Quantity Selector */}
            <div className={styles.qtyRow}>
              <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
              <span>{qty}</span>
              <button onClick={() => setQty(qty + 1)}>+</button>
            </div>

            {/* Total Price */}
            <p className={styles.totalPrice}>Total: ₦{product.price * qty}</p>

            {/* Add to Bag */}
            <button className={styles.addToBag} onClick={handleAddToCart}>
              Add to Bag
            </button>
          </div>
        </div>

        {/* Product Details Section */}
        <div className={styles.detailsSection}>
          <h2>Product Details</h2>
          <p>
            Step into a world of unparalleled opulence with {product.name}, an exquisite fragrance that weaves an enchanting symphony of gold and luxury.
          </p>

          <h3>The Golden Overture</h3>
          <p>
            {product.name} opens with a grand flourish of radiant citrus and sun-kissed fruits, then unfolds with velvet roses and rare blooms, finishing with amber, vanilla, and sandalwood.
          </p>
        </div>

        {/* Discover More Products Section */}
        <div className={styles.discoverSection}>
          <h2>Discover More Products</h2>
          <div className={styles.productsGrid}>
            {allProducts.filter(p => p.id !== product.id).slice(0, 4).map(p => (
              <div key={p.id} className={styles.productCard} onClick={() => navigate(`/product/${p.id}`)}>
                <img src={p.image} alt={p.name} />
                <h3>{p.name}</h3>
                <p>₦{p.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;