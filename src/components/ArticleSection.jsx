import { useState, useEffect } from "react";
import styles from "./ArticlesSection.module.css";
import ArticleCard from "./ArticleCard";
import img1 from "../assets/article1.png";
import img2 from "../assets/article2.png";
import img3 from "../assets/article3.png";
import img4 from "../assets/article4.png";
import img5 from "../assets/article5.png";
import img6 from "../assets/article6.png";

export const articlesData = [
  {
    image: img1,
    title: "The Soothing Symphony of Lavender Perfumes: Unlocking the Secrets of a Fragrant Elixir",
    description: "Lavender, with its enchanting aroma and rich history, has been cherished for centuries as a symbol of relaxation, healing, and timeless beauty. In the world of perfumery, lavender plays a key role in creating captivating fragrances loved by many.",
    fullContent: `Lavender, with its enchanting aroma and rich history, has been cherished for centuries as a symbol of relaxation, healing, and timeless beauty. In the world of perfumery, lavender plays a key role in creating captivating fragrances loved by many.

Discover the top, heart, and base notes that make lavender perfumes so irresistible. From calming bedtime scents to invigorating day fragrances, learn how to incorporate lavender into your daily routine for ultimate serenity. Explore blending tips and pairing suggestions with other essential oils for custom blends that soothe the soul.`,
  },
  {
    image: img2,
    title: "The Art of Curating a Luxury Perfume Collection: A Symphony of Scents and Stories",
    description: "A luxury perfume collection is not just an assortment of fragrances; it is a reflection of one's taste, personality, and experiences. Each bottle holds a unique olfactory journey, crafted with the finest ingredients and artistic mastery.",
    fullContent: `A luxury perfume collection is not just an assortment of fragrances; it is a reflection of one's taste, personality, and experiences. Each bottle holds a unique olfactory journey, crafted with the finest ingredients and artistic mastery.

Building your collection starts with understanding fragrance families – oriental, woody, fresh. We guide you through selecting signature scents, seasonal rotations, and investment pieces that appreciate over time. Tips on storage, layering, and discovering niche houses for a truly personal armoire of aromas.`,
  },
  {
    image: img3,
    title: "The Timeless Elegance of Rose Perfumes: Unveiling the Queen of Flowers in Fragrance",
    description: "Rose, often referred to as the 'Queen of Flowers', has held a special place in human culture and history for centuries. Beyond its captivating beauty, this iconic bloom has also inspired perfumers to create some of the most timeless and exquisite fragrances in the world.",
    fullContent: `Rose, often referred to as the 'Queen of Flowers', has held a special place in human culture and history for centuries. Beyond its captivating beauty, this iconic bloom has also inspired perfumers to create some of the most timeless and exquisite fragrances in the world.

From Damask roses in Grasse to Bulgarian absolutes, trace the journey of rose oil in perfumery. Explore iconic rose perfumes, modern interpretations, and how rose pairs with oud, jasmine, and citrus for romantic, powdery, or spicy profiles that exude eternal elegance.`,
  },
  {
    image: img4,
    title: "Finding Your Signature Scent",
    description: "Embark on a journey of self-discovery as we delve into the concept of perfume personalities. From bold and adventurous to elegant and timeless, there's a fragrance that perfectly complements your essence. Let us help you find your signature scent, a fragrant expression of your unique style.",
    fullContent: `Embark on a journey of self-discovery as we delve into the concept of perfume personalities. From bold and adventurous to elegant and timeless, there's a fragrance that perfectly complements your essence. Let us help you find your signature scent, a fragrant expression of your unique style.

Assess your lifestyle, mood, and preferences through our scent profiling quiz. Learn testing techniques, dry-down timelines, and why skin chemistry matters. Discover timeless classics and emerging trends to claim your olfactory identity.`,
  },
  {
    image: img5,
    title: "Decoding Fragrance Notes",
    description: "Ever wondered how perfumers compose their masterpieces? Unravel the mystery behind fragrance notes – top, middle, and base – and learn how each layer contributes to the overall olfactory experience of a perfume.",
    fullContent: `Ever wondered how perfumers compose their masterpieces? Unravel the mystery behind fragrance notes – top, middle, and base – and learn how each layer contributes to the overall olfactory experience of a perfume. Get ready to appreciate your favorite scents on a whole new level!

Top notes evaporate first (citrus, herbs), heart reveals personality (floral, spice), base anchors (woods, musk). Understand sillage, longevity, and pyramid structures with examples from legendary fragrances. Master note pairing for informed collecting.`,
  },
  {
    image: img6,
    title: "A Journey Through Time",
    description: "Perfumery's history spans millennia – from ancient Kyphi incense to modern molecular scents. Trace evolution from single-note attars to complex eaux de parfum.",
    fullContent: `Perfumery's history spans millennia – from ancient Kyphi incense to modern molecular scents. Trace evolution from single-note attars to complex eaux de parfum, influenced by trade routes, royalty, and innovation.

Key eras: Renaissance civet pomanders, 18th-century colognes, 20th-century abstract compositions. Iconic perfumers like Guerlain, Chanel, and niche artisans. Future trends in sustainable biotech and AI-designed accords await.`,
  },
];

export default function ArticlesSection() {
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 768) {
        setVisibleCards(1);        // Mobile - 1 card slider
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

const totalSlides = Math.ceil(articlesData.length / visibleCards);

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (totalSlides <= 1) return;
    setIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    if (totalSlides <= 1) return;
    setIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const isMobile = visibleCards === 1;

  // Auto slide only on desktop/tablet
  useEffect(() => {
    if (isMobile) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [isMobile, index]);

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
                {articlesData
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

      {/* Slide indicators */}
      {totalSlides > 1 && (
        <div className={styles.dots}>
          {Array.from({ length: totalSlides }).map((_, dotIndex) => (
            <button
              key={dotIndex}
              className={`${styles.dot} ${index === dotIndex ? styles.activeDot : ''}`}
              onClick={() => setIndex(dotIndex)}
            />
          ))}
        </div>
      )}
    </section>
  );
}

