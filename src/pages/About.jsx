import React from "react";
import styles from "./About.module.css";
import Footer from "../components/Footer";
import { FaCrown, FaUser, FaLeaf, FaLightbulb } from "react-icons/fa";

const About = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>About Us</h1>
          <p>
            At Scent Haven, we believe that perfumes are more than just scents; they are expressions of one's individuality and style. Our passion for exquisite fragrances led us to curate a collection that captures the essence of diverse personalities, bringing you an unparalleled olfactory experience.
          </p>
        </div>
      </section>

      {/* OUR STORY SECTION */}
      <section className={styles.story}>
        <div className={styles.storyText}>
          <div className={styles.textInner}>
            <h2>Our Story</h2>
            <p>
              Founded in 2010, Scent Haven began as a passion project by fragrance enthusiasts who believed that everyone deserves to find their signature scent. What started as a small boutique in the heart of the city has grown into a beloved destination for perfume lovers worldwide.
            </p>
            <p>
              Our journey has been guided by a simple philosophy: to create fragrances that not only smell incredible but also tell a story, evoke emotions, and become an integral part of our customers' personal narratives. Every bottle in our collection is crafted with meticulous attention to detail, using only the finest ingredients sourced from around the globe.
            </p>
            <p>
              Today, Scent Haven continues to innovate while staying true to our roots, offering a diverse range of scents that cater to every personality, occasion, and mood. We're not just selling perfume; we're helping you discover the fragrance that defines you.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT MAKES US UNIQUE SECTION */}
      <section className={styles.unique}>
        <div className={styles.uniqueContainer}>
          <h2>What Makes Us Unique</h2>
          <div className={styles.uniqueGrid}>
            <div className={styles.uniqueCard}>
              <div className={styles.cardIcon}>
                <FaCrown />
              </div>
              <h3>Premium Quality</h3>
              <p>
                We source only the finest ingredients and work with master perfumers to create scents that last and evolve beautifully throughout the day.
              </p>
            </div>
            <div className={styles.uniqueCard}>
              <div className={styles.cardIcon}>
                <FaUser />
              </div>
              <h3>Personalized Service</h3>
              <p>
                Our expert staff takes the time to understand your preferences and lifestyle to help you find the perfect fragrance for any occasion.
              </p>
            </div>
            <div className={styles.uniqueCard}>
              <div className={styles.cardIcon}>
                <FaLeaf />
              </div>
              <h3>Sustainable Practices</h3>
              <p>
                We're committed to eco-friendly packaging and ethical sourcing, ensuring our beautiful scents don't come at the expense of our planet.
              </p>
            </div>
            <div className={styles.uniqueCard}>
              <div className={styles.cardIcon}>
                <FaLightbulb />
              </div>
              <h3>Innovation</h3>
              <p>
                We continuously explore new scent combinations and techniques, bringing you cutting-edge fragrances that push the boundaries of perfumery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION SECTION */}
      <section className={styles.mission}>
        <div className={styles.missionContainer}>
          <div className={styles.missionCard}>
            <h2>Our Mission</h2>
            <p>
              To empower individuals to express their unique identity through fragrance, creating memorable olfactory experiences that enhance confidence and create lasting impressions.
            </p>
          </div>
          <div className={styles.missionCard}>
            <h2>Our Vision</h2>
            <p>
              To be the world's most trusted and beloved fragrance brand, known for exceptional quality, innovative scents, and unparalleled customer experiences.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className={styles.team}>
        <h2>Meet Our Team</h2>
        <div className={styles.teamGrid}>
          <div className={styles.teamMember}>
            <div className={styles.memberImage}>
              <img src="/images/team-1.jpg" alt="Sarah Johnson" />
            </div>
            <h3>Sarah Johnson</h3>
            <p>Founder & Chief Perfumer</p>
            <p>With over 20 years in the fragrance industry, Sarah leads our creative vision and scent development.</p>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.memberImage}>
              <img src="/images/team-2.jpg" alt="Michael Chen" />
            </div>
            <h3>Michael Chen</h3>
            <p>Head of Product Development</p>
            <p>Michael ensures every product meets our high standards of quality and innovation.</p>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.memberImage}>
              <img src="/images/team-3.jpg" alt="Emma Rodriguez" />
            </div>
            <h3>Emma Rodriguez</h3>
            <p>Customer Experience Manager</p>
            <p>Emma and her team are dedicated to providing exceptional service and personalized recommendations.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;