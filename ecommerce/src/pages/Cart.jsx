import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';
import styles from './Cart.module.css';
import Footer from '../components/Footer';

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems
  } = useCart();

  const handleQuantityChange = (productId, newQuantity) => {
    updateQuantity(productId, newQuantity);
  };

  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  };

  if (cartItems.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <div className={styles.emptyCartContent}>
          <h1>Your Cart is Empty</h1>
          <p>Looks like you haven't added any fragrances to your cart yet.</p>
          <Link to="/product" className={styles.shopBtn}>
            Continue Shopping
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartHeader}>
        <h1>Shopping Cart</h1>
        <p>{getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'} in your cart</p>
      </div>

      <div className={styles.cartContent}>
        <div className={styles.cartItems}>
          {cartItems.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <div className={styles.itemImage}>
                <img src={item.image} alt={item.name} />
              </div>

              <div className={styles.itemDetails}>
                <h3>{item.name}</h3>
                <p className={styles.itemPrice}>₦{item.price}</p>
                <p className={styles.itemSize}>100ml</p>
              </div>

              <div className={styles.quantityControls}>
                <button
                  className={styles.qtyBtn}
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  <FaMinus />
                </button>
                <span className={styles.quantity}>{item.quantity}</span>
                <button
                  className={styles.qtyBtn}
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                >
                  <FaPlus />
                </button>
              </div>

              <div className={styles.itemTotal}>
                <p>₦{item.price * item.quantity}</p>
              </div>

              <button
                className={styles.removeBtn}
                onClick={() => handleRemoveItem(item.id)}
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>

        <div className={styles.cartSummary}>
          <div className={styles.summaryCard}>
            <h2>Order Summary</h2>

            <div className={styles.summaryRow}>
              <span>Subtotal ({getTotalItems()} items)</span>
              <span>₦{getTotalPrice()}</span>
            </div>

            <div className={styles.summaryRow}>
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className={styles.summaryRow}>
              <span>Tax</span>
              <span>₦{(getTotalPrice() * 0.08).toFixed(2)}</span>
            </div>

            <hr className={styles.divider} />

            <div className={`${styles.summaryRow} ${styles.total}`}>
              <span>Total</span>
              <span>₦{(getTotalPrice() + getTotalPrice() * 0.08).toFixed(2)}</span>
            </div>

            <div className={styles.buttonGrid}>
              <Link to="/checkout" className={styles.checkoutBtn}>
                Proceed to Checkout
              </Link>

              <button className={styles.clearCartBtn} onClick={clearCart}>
                Clear Cart
              </button>
            </div>

            <Link to="/product" className={styles.continueShopping}>
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;