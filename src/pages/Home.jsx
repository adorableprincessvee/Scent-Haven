import React, { useEffect, useState } from "react";
import perfumeImage from "../assets/perfume.png";
import welcomeBg from "../assets/welcomeBg.png";
import saleperfume from "../assets/saleperfume.png";
import valuesImage from "../assets/valuesImage.png";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import ArticlesSection from "../components/ArticleSection";
import Footer from "../components/Footer";

// Import product images
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
import p7 from "../assets/p7.png";
import p8 from "../assets/p8.png";
import p9 from "../assets/p9.png";

const Home = () => {
  const navigate = useNavigate();

  const handleShopClick = () => {
    navigate("/product");
  };

  const [index, setIndex] = useState(0);

  const products = [
    { id: 1, name: "Luxurious Elixir Rough", price: 220, image: p1 },
    { id: 2, name: "The Golden Legacy", price: 160, image: p2 },
    { id: 3, name: "Luxurious Elixir", price: 250, image: p4 },
    { id: 4, name: "Luxurious Essence", price: 260, image: p5 },
    { id: 5, name: "Aurum Aura", price: 200, image: p6 },
    { id: 6, name: "Gleaming Gilt", price: 160, image: p7 },
    { id: 7, name: "Gilded Elixir Rough", price: 170, image: p8 },
    { id: 8, name: "Golden Luminary", price: 120, image: p9 },
  ];


  const nextSlide = () => {
    setIndex((prev) => (prev + 2) % products.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 1 ? products.length - 2 : prev - 2
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* HERO */}
      <section className={styles.hero}>
      
        <div className={styles.content}>
          <h1>Elevate Your Spirit with Victory Scented Fragrances!</h1>
          <p>
            Shop now and embrace the sweet smell of victory with Local Face.
          </p>
          <button
            className={styles.shopBtn}
            onClick={handleShopClick}
          >
            Shop Now
          </button>
        </div>

        <div className={styles.imageContainer}>
          <img
            src={perfumeImage}
            alt="Perfume"
            className={styles.image}
          />
        </div>
      </section>

      {/* WELCOME */}
      <section
        className={styles.welcome}
        style={{ backgroundImage: `url(${welcomeBg})` }}
      >
        <div className={styles.overlay}>
          <h2>Welcome to Local Face</h2>
          <p>
            Welcome to Local Face Welcome to Local Face Perfumes, where the spirit of victory and triumph come alive through scents that empower and inspire. Our curated collection, aptly named "Victory Scented," is a celebration of success and elegance, designed to unleash your victorious essence. Indulge in the sweet taste of triumph with captivating fragrances that tell the tale of your achievements. At Local Face, we believe that every victory deserves a signature scent, and we are dedicated to providing unforgettable fragrances that elevate your spirit and empower your journey.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className={styles.values}>
        <div className={styles.valuesImage}>
          <img src={valuesImage} alt="Perfume Values" />
        </div>

        <div className={styles.valuesText}>
          <div className={styles.textInner}>
            <h2>Our Values</h2>
            <p>At Local Face, our perfume retail store is built on a foundation of passion and authenticity. We believe in celebrating the individuality of every customer, providing a diverse collection of scents that resonate with their unique personality and style. Our dedicated team of fragrance enthusiasts is committed to creating a welcoming and inclusive environment, where connections are forged, and inspiration thrives.</p>
            <p>
              Embracing sustainability and continuous learning, Local Face strives to be more than just a shopping destination; we are a community that inspires and empowers individuals on their fragrance journey.
            </p>
          </div>
        </div>
      </section>

      {/* BEST SELLING SLIDER */}
      <section className={styles.bestSection}>
        <h2 className={styles.sectionTitle}>
          Best selling products
        </h2>

        <div className={styles.carouselContainer}>
          <button
            className={styles.arrow}
            onClick={prevSlide}
          >
            ‹
          </button>

          <div className={styles.carouselViewport}>
            <div
              className={styles.carouselTrack}
              style={{
                transform: `translateX(-${index * 25}%)`,
              }}
            >
              {products.map((product) => (
                <div key={product.id} className={styles.card}>
                  <img
                    src={product.image}
                    alt={product.name}
                  />
                  <h3>{product.name}</h3>
                  <p className={styles.price}>
                    ${product.price}.00
                  </p>
                  <span>100ml</span>
                </div>
              ))}
            </div>
          </div>

          <button
            className={styles.arrow}
            onClick={nextSlide}
          >
            ›
          </button>
        </div>
      </section>

      {/* OUR COLLECTIONS SECTION */}
      <section className={styles.collectionsSection}>
        <h2 className={styles.sectionTitle}>Our Collections</h2>

        <div className={styles.collectionsGrid}>
          <div className={styles.collectionCard}>
            <img src="/images/c1.png" alt="Designer Delights Collection" />
            <span className={styles.collectionLabel}>Designer Delights Collection</span>
          </div>
          <div className={styles.collectionCard}>
            <img src="/images/c2.png" alt="Travel Essentials Collection" />
            <span className={styles.collectionLabel}>Travel Essentials Collection</span>
          </div>
          <div className={styles.collectionCard}>
            <img src="/images/c3.png" alt="Special Occasions Collection" />
            <span className={styles.collectionLabel}>Special Occasions Collection</span>
          </div>
          <div className={styles.collectionCard}>
            <img src="/images/c4.png" alt="Seasonal Sensation Collection" />
            <span className={styles.collectionLabel}>Seasonal Sensation Collection</span>
          </div>
          <div className={styles.collectionCard}>
            <img src="/images/c5.png" alt="Vintage Treasures Collection" />
            <span className={styles.collectionLabel}>Vintage Treasures Collection</span>
          </div>
          <div className={styles.collectionCard}>
            <img src="/images/c6.png" alt="Limited Edition Treasures Collection" />
            <span className={styles.collectionLabel}>Limited Edition Treasures Collection</span>
          </div>
          <div className={styles.collectionCard}>
            <img src="/images/c7.png" alt="Modern Classics Collection" />
            <span className={styles.collectionLabel}>Modern Classics Collection</span>
          </div>
        </div>
      </section>

      {/* YEAR END SALE SECTION */}
      <section className={styles.saleSection}>
        <div
          className={styles.saleCard}
          style={{ backgroundImage: `url(${saleperfume})` }}
        >
          <div className={styles.saleOverlay}></div>

          <div className={styles.saleText}>
            <h2>
              Perfume Year-End Sale! <br />
              Up to <span>50% OFF</span>
            </h2>

            <p>
              Discover an exquisite collection of premium perfumes at
              unbelievable prices during our exclusive Perfume Sale!
            </p>

            <button className={styles.saleBtn}>Know More</button>
          </div>
        </div>
      </section>

      <ArticlesSection />
      <Footer />

    </div>
  );
};

export default Home;
