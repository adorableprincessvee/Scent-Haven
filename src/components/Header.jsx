import React, { useState, useRef, useEffect } from "react";
import styles from "./Header.module.css";
import { FaSearch, FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useCart } from "../contexts/CartContext";
import { useWishlist } from "../contexts/WishlistContext";

const Header = () => {
  const [active, setActive] = useState(false); // search minimized toggle
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu toggle
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();

  const desktopSearchRef = useRef(null);
  const mobileSearchRef = useRef(null);

  // Close search if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const desktopRef = desktopSearchRef.current;
      const mobileRef = mobileSearchRef.current;
      if (!((desktopRef?.contains(event.target)) || (mobileRef?.contains(event.target)))) {
        setActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleSearch = () => {
    if (searchTerm.trim() === "") return;
    navigate(`/product?search=${encodeURIComponent(searchTerm.trim())}`);
    setSearchTerm("");
    setActive(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Scent Haven</div>

      {/* Hamburger for mobile */}
      <RxHamburgerMenu
        className={styles.hamburgerMenu}
        onClick={toggleMenu}
      />

      {/* Mobile icons beside hamburger */}
      <div className={styles.mobileIcons}>
        <div
          ref={mobileSearchRef}
          className={`${styles.searchBox} ${styles.mobileSearchBox} ${active ? styles.active : ''}`}
        >
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <FaSearch onClick={() => setActive(!active)} />
        </div>
        <Link to="/wishlist" className={`${styles.wishlistIcon} ${styles.mobileWishlistIcon}`}>
          <FaHeart className={styles.icon} />
          {wishlistCount > 0 && <span className={styles.wishlistCount}>{wishlistCount}</span>}
        </Link>
      </div>

      {/* Desktop nav */}
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/about">About us</Link>
        <Link to="/services">Services</Link>
        <Link to="/blog">Blog</Link>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className={styles.mobileNav}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/product" onClick={toggleMenu}>Product</Link>
          <Link to="/about" onClick={toggleMenu}>About us</Link>
          <Link to="/services" onClick={toggleMenu}>Services</Link>
          <Link to="/wishlist" onClick={toggleMenu}>Wishlist</Link>
          <Link to="/blog" onClick={toggleMenu}>Blog</Link>
        </nav>
      )}

      {/* Floating cart icon for mobile */}
      <Link to="/cart" className={styles.floatingCart}>
        <FaShoppingCart className={styles.icon} />
        {cartCount > 0 && <span className={styles.cartCount}>{cartCount}</span>}
      </Link>

      {/* Icons + search for desktop */}
      <div className={styles.icons}>
        <div
          ref={desktopSearchRef}
          className={`${styles.searchBox} ${active ? styles.active : ""}`}
        >
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <FaSearch onClick={() => setActive(!active)} />
        </div>

        <FaUser className={styles.icon} />
        <Link to="/wishlist" className={styles.wishlistIcon}>
          <FaHeart className={styles.icon} />
          {wishlistCount > 0 && <span className={styles.wishlistCount}>{wishlistCount}</span>}
        </Link>
        <Link to="/cart" className={styles.cartIcon}>
          <FaShoppingCart className={styles.icon} />
          {cartCount > 0 && <span className={styles.cartCount}>{cartCount}</span>}
        </Link>
      </div>
    </header>
  );
};

export default Header;

