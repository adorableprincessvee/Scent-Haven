import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Blog.module.css";
import ArticleCard from "../components/ArticleCard";
import { articlesData } from "../components/ArticleSection";

const Blog = () => {
  const [visibleCards, setVisibleCards] = useState(3);
  const [index, setIndex] = useState(0);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showSubscribe, setShowSubscribe] = useState(false);
  const [email, setEmail] = useState(""); // ✅ added

  // Responsive cards
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setVisibleCards(1);
      } else if (width <= 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Live search + filter
  const filteredArticles = articlesData.filter(article => 
    (filter === "all" || article.title.toLowerCase().includes(filter)) &&
    (searchTerm === "" || article.title.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Use filteredArticles length
  const totalSlides = Math.ceil(filteredArticles.length / visibleCards);

  const nextSlide = () => {
    if (totalSlides === 0) return;
    setIndex(prev => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    if (totalSlides === 0) return;
    setIndex(prev => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // Auto slide
  useEffect(() => {
    if (totalSlides === 0) return;

    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  // Reset index when filter/search changes
  useEffect(() => {
    setIndex(0);
  }, [filter, searchTerm]);

  // ✅ SINGLE subscribe function (fixed)
  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      setShowSubscribe(true);
      setTimeout(() => setShowSubscribe(false), 3000);
      setEmail("");
    } else {
      alert("Please enter a valid email address");
    }
  };

  return (
    <div className={styles.blogPage}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Fragrance Stories & Insights</h1>
          <p>
            Discover expert articles, scent guides, and the latest in perfumery
            from our fragrance specialists.
          </p>

          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search articles..."
              className={styles.searchInput}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className={styles.searchBtn}>
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className={styles.filters}>
        <div className={styles.filterButtons}>
          <button
            className={`${styles.filterBtn} ${filter === "all" ? styles.active : ""}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`${styles.filterBtn} ${filter === "lavender" ? styles.active : ""}`}
            onClick={() => setFilter("lavender")}
          >
            Lavender
          </button>
          <button
            className={`${styles.filterBtn} ${filter === "rose" ? styles.active : ""}`}
            onClick={() => setFilter("rose")}
          >
            Rose
          </button>
          <button
            className={`${styles.filterBtn} ${filter === "notes" ? styles.active : ""}`}
            onClick={() => setFilter("notes")}
          >
            Notes
          </button>
          <button
            className={`${styles.filterBtn} ${filter === "history" ? styles.active : ""}`}
            onClick={() => setFilter("history")}
          >
            History
          </button>
        </div>
      </section>

      {/* Articles Slider */}
      <section className={styles.articlesSection}>
        <div className={styles.sectionTitle}>
          <h2>Featured Articles</h2>
          <p>Explore our latest fragrance insights</p>
        </div>

        <div className={styles.sliderWrapper}>
          <button className={styles.arrow} onClick={prevSlide}>‹</button>

          <div className={styles.slider}>
            <div
              className={styles.sliderTrack}
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div className={styles.slideGroup} key={slideIndex}>
                  {filteredArticles
                    .slice(
                      slideIndex * visibleCards,
                      slideIndex * visibleCards + visibleCards
                    )
                    .map((article, i) => (
                      <ArticleCard key={i} {...article} id={i + 1} />
                    ))}
                </div>
              ))}
            </div>
          </div>

          <button className={styles.arrow} onClick={nextSlide}>›</button>
        </div>
      </section>

      {/* Newsletter */}
      <section className={styles.newsletter}>
        <h2>Stay Updated with Fragrance News</h2>
        <p>
          Subscribe to receive exclusive articles and scent recommendations
        </p>

        <div className={styles.newsletterForm}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
          />
          <button onClick={handleSubscribe}>Subscribe</button>
        </div>

        {showSubscribe && (
          <div className={styles.subscribePopup}>
            <p>Thank you for subscribing! </p>
            <button onClick={() => setShowSubscribe(false)}>Close</button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Blog;