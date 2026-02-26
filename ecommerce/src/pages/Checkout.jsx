import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { FaCreditCard, FaLock, FaCheck } from 'react-icons/fa';
import styles from './Checkout.module.css';
import Footer from '../components/Footer';

const Checkout = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    country: 'Nigeria',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate payment processing
    setShowSuccess(true);
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 8000);
  };

  const subtotal = getTotalPrice();
  const shipping = 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0 && !showSuccess) {
    return (
      <div className={styles.checkoutContainer}>
        <div className={styles.emptyCheckout}>
          <h1>No Items to Checkout</h1>
          <p>Your cart is empty. Add some items before checking out.</p>
          <Link to="/product" className={styles.shopBtn}>
            Continue Shopping
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  if (showSuccess) {
    return (
      <div className={styles.successOverlay}>
        <div className={styles.successPopup}>
          <div className={styles.successIcon}>
            <FaCheck />
          </div>
          <h2>Payment Successful!</h2>
          <p>Your order has been placed successfully.</p>
          <p>You will receive a confirmation email shortly.</p>
          <div className={styles.orderDetails}>
            <p><strong>Order Total:</strong> ₦{total.toFixed(2)}</p>
            <p><strong>Items:</strong> {cartItems.reduce((total, item) => total + item.quantity, 0)}</p>
          </div>
          <p className={styles.redirectText}>Redirecting to home page...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.checkoutContainer}>
      <div className={styles.checkoutHeader}>
        <h1>Checkout</h1>
        <Link to="/cart" className={styles.backToCart}>
          ← Back to Cart
        </Link>
      </div>

      <div className={styles.checkoutContent}>
        <form className={styles.checkoutForm} onSubmit={handleSubmit}>
          {/* Billing Information */}
          <div className={styles.formSection}>
            <h2>Billing Information</h2>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className={styles.formSection}>
            <h2>Shipping Address</h2>
            <div className={styles.formGroup}>
              <label htmlFor="address">Street Address *</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="123 Main Street"
                required
              />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="city">City *</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="zipCode">ZIP Code *</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="country">Country *</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
              >
                <option value="Nigeria">Nigeria</option>
                <option value="Ghana">Ghana</option>
                <option value="Kenya">Kenya</option>
                <option value="South Africa">South Africa</option>
              </select>
            </div>
          </div>

          {/* Payment Information */}
          <div className={styles.formSection}>
            <h2>Payment Information</h2>
            <div className={styles.paymentHeader}>
              <FaCreditCard className={styles.paymentIcon} />
              <span>Secure Payment</span>
              <FaLock className={styles.lockIcon} />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="cardName">Cardholder Name *</label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                value={formData.cardName}
                onChange={handleInputChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="cardNumber">Card Number *</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                placeholder="1234 5678 9012 3456"
                maxLength="19"
                required
              />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="expiryDate">Expiry Date *</label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  placeholder="MM/YY"
                  maxLength="5"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="cvv">CVV *</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  placeholder="123"
                  maxLength="4"
                  required
                />
              </div>
            </div>
          </div>

          <button type="submit" className={styles.checkoutBtn}>
            Complete Order - ₦{total.toFixed(2)}
          </button>
        </form>

        {/* Order Summary */}
        <div className={styles.orderSummary}>
          <h2>Order Summary</h2>

          <div className={styles.orderItems}>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.orderItem}>
                <div className={styles.itemInfo}>
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <p>Qty: {item.quantity}</p>
                  </div>
                </div>
                <div className={styles.itemPrice}>
                  ₦{(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.summaryDetails}>
            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>₦{subtotal.toFixed(2)}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Tax</span>
              <span>₦{tax.toFixed(2)}</span>
            </div>
            <div className={`${styles.summaryRow} ${styles.total}`}>
              <span>Total</span>
              <span>₦{total.toFixed(2)}</span>
            </div>
          </div>

          <div className={styles.securityNote}>
            <FaLock />
            <span>Your payment information is secure and encrypted</span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;