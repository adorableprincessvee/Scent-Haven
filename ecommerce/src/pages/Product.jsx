import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Select from "react-select";
import styles from "./product.module.css";
import offerImg from "../assets/aqua-serenity.png";
import angelImg from "../assets/golden-angel.png";
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
import p10 from "../assets/p10.png";
import p11 from "../assets/p11.png";
import p12 from "../assets/p12.png";
import p13 from "../assets/p13.png";

// Export products so ProductDetails page can use it
export const allProducts = [
  { id: 1, name: "Luxurious Elixir Rough", price: 2200, volume: "100ml", image: p1, collection: "Luxury", family: "Floral", gender: "Unisex", occasion: "Evening", rating: 5, reviews: 80 },
  { id: 2, name: "The Golden Legacy", price: 1800, volume: "100ml", image: p2, collection: "Luxury", family: "Woody", gender: "Male", occasion: "Day", rating: 4, reviews: 65 },
  { id: 3, name: "Luxurious Elixir", price: 2500, volume: "100ml", image: p4, collection: "Luxury", family: "Oriental", gender: "Female", occasion: "Evening", rating: 5, reviews: 90 },
  { id: 4, name: "Luxurious Essence", price: 2800, volume: "75ml", image: p5, collection: "Luxury", family: "Floral", gender: "Female", occasion: "Day", rating: 4, reviews: 70 },
  { id: 5, name: "Aurum Aura", price: 2000, volume: "100ml", image: p6, collection: "Premium", family: "Citrus", gender: "Unisex", occasion: "Day", rating: 3, reviews: 50 },
  { id: 6, name: "Gleaming Gift", price: 1600, volume: "100ml", image: p7, collection: "Premium", family: "Woody", gender: "Male", occasion: "Evening", rating: 4, reviews: 60 },
  { id: 7, name: "Gilded Elixir Rough", price: 3100, volume: "90ml", image: p8, collection: "Luxury", family: "Oriental", gender: "Female", occasion: "Evening", rating: 5, reviews: 85 },
  { id: 8, name: "Golden Luminary", price: 2200, volume: "100ml", image: p9, collection: "Luxury", family: "Floral", gender: "Unisex", occasion: "Day", rating: 5, reviews: 75 },
  { id: 9, name: "Decadent Opal", price: 1900, volume: "100ml", image: p10, collection: "Premium", family: "Citrus", gender: "Female", occasion: "Day", rating: 4, reviews: 55 },
  { id: 10, name: "Gilded Elixir", price: 2000, volume: "100ml", image: p11, collection: "Luxury", family: "Woody", gender: "Male", occasion: "Evening", rating: 4, reviews: 68 },
  { id: 11, name: "Glamorous Gift", price: 1800, volume: "75ml", image: p12, collection: "Premium", family: "Floral", gender: "Female", occasion: "Day", rating: 3, reviews: 48 },
  { id: 12, name: "Luxury Enigma", price: 1900, volume: "90ml", image: p13, collection: "Luxury", family: "Oriental", gender: "Unisex", occasion: "Evening", rating: 5, reviews: 82 },
];

const ITEMS_PER_PAGE = 12;

const darkSelectStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "#141414",
    borderColor: state.isFocused ? "#AB572D" : "#333",
    boxShadow: state.isFocused ? "0 0 5px rgba(171, 87, 45, 0.5)" : "none",
    minWidth: 140,
    borderRadius: 6,
  }),
  singleValue: (provided) => ({ ...provided, color: "#fff" }),
  menu: (provided) => ({ ...provided, backgroundColor: "#141414", borderRadius: 6 }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused
      ? "#222"
      : state.isSelected
      ? "#333"
      : "#141414",
    color: state.isFocused || state.isSelected ? "#AB572D" : "#fff",
    cursor: "pointer",
  }),
  dropdownIndicator: (provided) => ({ ...provided, color: "#AB572D" }),
  indicatorSeparator: () => ({ display: "none" }),
};

export default function BestSelling() {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({ collection: null, family: null, gender: null, occasion: null });
  const [sortOption, setSortOption] = useState(null);
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('search') || '';

  const navigate = useNavigate();

  const handleFilterChange = (selectedOption, filterName) => {
    setFilters({ ...filters, [filterName]: selectedOption });
    setPage(1);
  };

  const handleSortChange = (option) => setSortOption(option);

  const filteredProducts = allProducts.filter((p) => {
    const matchesSearch = searchTerm === '' || p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return (
      matchesSearch &&
      (!filters.collection || p.collection === filters.collection.value) &&
      (!filters.family || p.family === filters.family.value) &&
      (!filters.gender || p.gender === filters.gender.value) &&
      (!filters.occasion || p.occasion === filters.occasion.value)
    );
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (!sortOption) return 0;
    switch (sortOption.value) {
      case "price-low-high":
        return a.price - b.price;
      case "price-high-low":
        return b.price - a.price;
      case "rating-high-low":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const start = (page - 1) * ITEMS_PER_PAGE;
  const currentProducts = sortedProducts.slice(start, start + ITEMS_PER_PAGE);

  return (
    <div className={styles.container}>
      <div style={{ flex: 1 }}>
        <h2 className={styles.title}>Best Selling Products</h2>

      {/* FILTER + SORT */}
      <div className={styles.topBar}>
        <div className={styles.filters}>
          <Select
            value={filters.collection}
            onChange={(option) => handleFilterChange(option, "collection")}
            options={[{ value: "Luxury", label: "Luxury" }, { value: "Premium", label: "Premium" }]}
            placeholder="Collection"
            classNamePrefix="react-select"
            styles={darkSelectStyles}
          />
          <Select
            value={filters.family}
            onChange={(option) => handleFilterChange(option, "family")}
            options={[{ value: "Floral", label: "Floral" }, { value: "Woody", label: "Woody" }, { value: "Oriental", label: "Oriental" }, { value: "Citrus", label: "Citrus" }]}
            placeholder="Fragrance Families"
            classNamePrefix="react-select"
            styles={darkSelectStyles}
          />
          <Select
            value={filters.gender}
            onChange={(option) => handleFilterChange(option, "gender")}
            options={[{ value: "Male", label: "Male" }, { value: "Female", label: "Female" }, { value: "Unisex", label: "Unisex" }]}
            placeholder="Gender"
            classNamePrefix="react-select"
            styles={darkSelectStyles}
          />
          <Select
            value={filters.occasion}
            onChange={(option) => handleFilterChange(option, "occasion")}
            options={[{ value: "Day", label: "Day" }, { value: "Evening", label: "Evening" }]}
            placeholder="Occasions"
            classNamePrefix="react-select"
            styles={darkSelectStyles}
          />
        </div>

        <div style={{ minWidth: 140 }}>
          <Select
            value={sortOption}
            onChange={handleSortChange}
            options={[
              { value: "price-low-high", label: "Price: Low to High" },
              { value: "price-high-low", label: "Price: High to Low" },
              { value: "rating-high-low", label: "Rating: High to Low" },
            ]}
            placeholder="Sort by"
            classNamePrefix="react-select"
            styles={darkSelectStyles}
          />
        </div>
      </div>

      {/* GRID */}
      <div className={styles.grid}>
        {currentProducts.length === 0 ? (
          <p style={{ color: "#aaa" }}>No products match your filter.</p>
        ) : (
          currentProducts.map((p) => (
            <div
              key={p.id}
              className={styles.card}
              onClick={() => navigate(`/product/${p.id}`)}
              style={{ cursor: "pointer" }}
            >
              <img src={p.image} alt={p.name} />
              <h4>{p.name}</h4>
              <div className={styles.stars}>
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className={i < p.rating ? styles.filled : styles.empty}>
                    ★
                  </span>
                ))}
                <span className={styles.reviews}> ({p.reviews})</span>
              </div>
              <div className={styles.priceRow}>
                <span className={styles.price}>₦{p.price}</span>
                <span className={styles.volume}>{p.volume}</span>
              </div>
            </div>
          ))
        )}
      </div>

      {/* PAGINATION */}
      <div className={styles.pagination}>
        <button onClick={() => setPage((prev) => prev - 1)} disabled={page === 1}>
          &lt;
        </button>
        <span>
          Page {page} of {Math.ceil(sortedProducts.length / ITEMS_PER_PAGE)}
        </span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page >= Math.ceil(sortedProducts.length / ITEMS_PER_PAGE)}
        >
          &gt;
        </button>
      </div>

      {/* SPECIAL OFFERS */}
      <section className={styles.specialOffers}>
        <h2>Special Offers</h2>
        <div className={styles.offerContent}>
          <div className={styles.offerImage}>
            <img src={offerImg} alt="Aqua Serenity Perfume" />
          </div>
          <div className={styles.offerText}>
            <p className={styles.offerTagline}>Limited Time Offer: 20% OFF on Aqua Serenity Perfume!</p>
            <h3 className={styles.offerTitle}>Aqua Serenity</h3>
            <p className={styles.offerSubtitle}>Embrace the Tranquil Tides</p>
            <p className={styles.offerDescription}>
              Immerse yourself in the calming embrace of Aqua Serenity, a captivating fragrance that evokes the essence of water.
            </p>
            <button className={styles.offerBtn}>Know More</button>
          </div>
        </div>
      </section>

      <section className={styles.goldenAngel}>
        <div className={styles.offerText}>
          <p className={styles.offerTagline}>Limited Time Offer: 25% OFF on Golden Angel Perfume!</p>
          <h3 className={styles.offerTitle}>Golden Angel</h3>
          <p className={styles.offerSubtitle2}>Unleash Your Divine Glow</p>
          <p className={styles.offerDescription}>
            Indulge in the divine allure of Golden Angel, a fragrance that embodies celestial elegance and radiance.
          </p>
          <button className={styles.offerBtn2}>Know More</button>
        </div>
        <div className={styles.offerImage}>
          <img src={angelImg} alt="Golden Angel Perfume" />
        </div>
      </section>

      
      </div>      <Footer />
    </div>
  );
}