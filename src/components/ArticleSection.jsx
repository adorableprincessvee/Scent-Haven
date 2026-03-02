import { useState, useEffect } from "react";
import styles from "./ArticlesSection.module.css";
import ArticleCard from "../components/ArticleCard";

import img1 from "../assets/article1.png";
import img2 from "../assets/article2.png";
import img3 from "../assets/article3.png";
import img4 from "../assets/article4.png";
import img5 from "../assets/article5.png";
import img6 from "../assets/article6.png";

const articles = [
  {
    image: img1,
    title:
      "The Soothing Symphony of Lavender Perfumes: Unlocking the Secrets of a Fragrant Elixir",
    description:
      "Lavender, with its enchanting aroma and rich history, has been cherished for centuries as a symbol of relaxation, healing, and timeless beauty. In the world of perfumery, lavender plays a key role in creating captivating fragrances loved by many.",
  },
  {
    image: img2,
    title:
      "The Art of Curating a Luxury Perfume Collection: A Symphony of Scents and Stories",
    description:
      "A luxury perfume collection is not just an assortment of fragrances; it is a reflection of one's taste, personality, and experiences. Each bottle holds a unique olfactory journey, crafted with the finest ingredients and artistic mastery.",
  },
  {
    image: img3,
    title:
      "The Timeless Elegance of Rose Perfumes: Unveiling the Queen of Flowers in Fragrance",
    description:
      "Rose, often referred to as the 'Queen of Flowers', has held a special place in human culture and history for centuries. Beyond its captivating beauty, this iconic bloom has also inspired perfumers to create some of the most timeless and exquisite fragrances in the world.",
  },
  {
    image: img4,
    title: "Finding Your Signature Scent",
    description: "Embark on a journey of self-discovery as we delve into the concept of perfume personalities. From bold and adventurous to elegant and timeless, there's a fragrance that perfectly complements your essence. Let us help you find your signature scent, a fragrant expression of your unique style.",
  },
  {
    image: img5,
    title: "Decoding Fragrance Notes",
    description: "A luxury perfume collection is not just an assortment of fragrances; it is a reflection of one's taste, personality, and experiences. Each bottle holds a unique olfactory journey, crafted with the finest ingredients and artistic mastery.",
  },
  {
    image: img6,
    title: "A Journey Through Time",
    description: "Ever wondered how perfumers compose their masterpieces? Unravel the mystery behind fragrance notes – top, middle, and base – and learn how each layer contributes to the overall olfactory experience of a perfume. Get ready to appreciate your favorite scents on a whole new level!",
  },
];

export default function ArticlesSection() {
  const [visibleCards, setVisibleCards] = useState(3);

useEffect(() => {
  const handleResize = () => {
    const width = window.innerWidth;

    if (width <= 480) {
      setVisibleCards(1);        // Mobile
    } else if (width <= 1024) {
      setVisibleCards(2);        // Tablet
    } else {
      setVisibleCards(3);        // Desktop
    }
  };

  handleResize();
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);

  const totalSlides = Math.ceil(articles.length / visibleCards);

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Latest Articles</h2>

      <div className={styles.sliderWrapper}>
        <button className={styles.arrow} onClick={prevSlide}>
          ‹
        </button>

        <div className={styles.slider}>
          <div
            className={styles.sliderTrack}
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div className={styles.slideGroup} key={slideIndex}>
                {articles
                  .slice(
                    slideIndex * visibleCards,
                    slideIndex * visibleCards + visibleCards
                  )
                  .map((article, i) => (
                    <ArticleCard key={i} {...article} />
                  ))}
              </div>
            ))}
          </div>
        </div>

        <button className={styles.arrow} onClick={nextSlide}>
          ›
        </button>
      </div>
    </section>
  );
}