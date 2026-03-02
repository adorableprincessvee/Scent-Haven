import { useState } from "react";
import styles from "./Footer.module.css";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [popup, setPopup] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setPopup({ type: "error", message: "Invalid email address" });
      setTimeout(() => setPopup(null), 2500);
      return;
    }

    setPopup({ type: "success", message: "Subscription Successful!" });
    setEmail("");
    setTimeout(() => setPopup(null), 2500);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.newsletter}>
          <h2>Scent Haven</h2>
          <p>Subscribe to Our Newsletter:</p>
          <small>Receive Updates on New Arrivals and Special Promotions!</small>

          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>

          <div className={styles.socials}>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        <div className={styles.links}>
          <div>
            <h3>Categories</h3>
            <ul>
              <li>Fashion</li>
              <li>Jewelry</li>
              <li>Sports</li>
              <li>Electronics</li>
              <li>Indoor</li>
            </ul>
          </div>

          <div>
            <h3>Shopping</h3>
            <ul>
              <li>Payments</li>
              <li>Delivery options</li>
              <li>Buyer protection</li>
            </ul>
          </div>

          <div>
            <h3>Customer care</h3>
            <ul>
              <li>Help center</li>
              <li>Terms & Conditions</li>
              <li>Privacy policy</li>
              <li>Returns & refund</li>
              <li>Survey & feedback</li>
            </ul>
          </div>

          <div>
            <h3>Pages</h3>
            <ul>
              <li>About Us</li>
              <li>Shop</li>
              <li>Contact Us</li>
              <li>Services</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        © 2026 Scent Haven Inc. All rights reserved
      </div>

      {popup && (
        <div className={`${styles.popup} ${popup.type === "success" ? styles.success : styles.error}`}>
          {popup.type === "success" && <span className={styles.checkmark}>✔</span>}
          {popup.message}
        </div>
      )}
    </footer>
  );
}