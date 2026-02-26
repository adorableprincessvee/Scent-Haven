import React, { useState, useRef, useEffect } from "react";
import styles from "./Header.module.css";
import { FaSearch, FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useCart } from "../contexts/CartContext";

const Header = () => {
  const [active, setActive] = useState(false); // search active
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu toggle
  const [searchTerm, setSearchTerm] = useState("");
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const { cartCount } = useCart();

  // Close search if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
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
          <Link to="/blog" onClick={toggleMenu}>Blog</Link>
        </nav>
      )}

      {/* Floating cart icon for mobile */}
      <Link to="/cart" className={styles.floatingCart}>
        <FaShoppingCart className={styles.icon} />
        {cartCount > 0 && <span className={styles.cartCount}>{cartCount}</span>}
      </Link>

      {/* Icons + search */}
      <div className={styles.icons}>
        <div
          ref={searchRef}
          className={`${styles.searchBox} ${active ? styles.active : ""}`}
        >
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <FaSearch onClick={() => setActive(true)} />
        </div>

        <FaUser className={styles.icon} />
        <FaHeart className={styles.icon} />
        <Link to="/cart" className={styles.cartIcon}>
          <FaShoppingCart className={styles.icon} />
          {cartCount > 0 && <span className={styles.cartCount}>{cartCount}</span>}
        </Link>
      </div>
    </header>
  );
};

export default Header;