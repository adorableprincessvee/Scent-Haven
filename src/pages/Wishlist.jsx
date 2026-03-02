import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../contexts/WishlistContext';
import { FaTrash, FaShoppingCart } from 'react-icons/fa';
import styles from './Wishlist.module.css';
import Footer from '../components/Footer';

const Wishlist = () => {
  const {
    wishlistItems,
    removeFromWishlist,
    clearWishlist
  } = useWishlist();

  const handleRemoveItem = (productId) => {
    removeFromWishlist(productId);
  };

  if (wishlistItems.length === 0) {
    return (
      <div className={styles.emptyWishlist}>
        <div className={styles.emptyWishlistContent}>
          <h1>Your Wishlist is Empty</h1>
          <p>Looks like you haven't added any fragrances to your wishlist yet.</p>
          <Link to="/product" className={styles.shopBtn}>
            Continue Shopping
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className={styles.wishlistContainer}>
      <div className={styles.wishlistHeader}>
        <h1>My Wishlist</h1>
        <p>{wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} in your wishlist</p>
      </div>

      <div className={styles.wishlistContent}>
        <div className={styles.wishlistItems}>
          {wishlistItems.map((item) => (
            <div key={item.id} className={styles.wishlistItem}>
              <div className={styles.itemImage}>
                <img src={item.image} alt={item.name} />
              </div>

              <div className={styles.itemDetails}>
                <h3>{item.name}</h3>
                <p className={styles.itemPrice}>₦{item.price}</p>
                <p className={styles.itemSize}>100ml</p>
              </div>

              <div className={styles.itemActions}>
                <Link to={`/product/${item.id}`} className={styles.viewBtn}>
                  View Details
                </Link>
                <button
                  className={styles.removeBtn}
                  onClick={() => handleRemoveItem(item.id)}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.wishlistSummary}>
          <div className={styles.summaryCard}>
            <h2>Wishlist Actions</h2>

            <div className={styles.buttonGrid}>
              <Link to="/product" className={styles.browseBtn}>
                Browse Products
              </Link>

              <button className={styles.clearWishlistBtn} onClick={clearWishlist}>
                Clear Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Wishlist;