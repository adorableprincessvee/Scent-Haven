import React from 'react';
import styles from './Services.module.css';
import Footer from '../components/Footer';

const Services = () => {
  const services = [
    {
      number: '01',
      title: 'Personal Fragrance Consultations',
      description: 'Discover your perfect scent with our expert consultants. We analyze your preferences, lifestyle, and personality to recommend fragrances that truly reflect who you are.',
      image: ''
    },
    {
      number: '02',
      title: 'Custom Fragrance Creation',
      description: 'Create a one-of-a-kind fragrance tailored specifically to your desires. Our master perfumers work with you to blend unique scents that tell your story.',
      image: ''
    },
    {
      number: '03',
      title: 'Scented Gift Selection',
      description: 'Find the perfect scented gift for any occasion. Our curated selection includes luxury fragrances, diffusers, and personalized scent experiences.',
      image: ''
    },
    {
      number: '04',
      title: 'Fragrance Events and Workshops',
      description: 'Join our exclusive fragrance events and workshops. Learn about perfumery, participate in scent creation sessions, and connect with fellow fragrance enthusiasts.',
      image: ''
    },
    {
      number: '05',
      title: 'Eco-friendly Initiatives',
      description: 'We\'re committed to sustainability. Our eco-friendly initiatives include recyclable packaging, ethically sourced ingredients, and carbon-neutral shipping.',
      image: ''
    },
    {
      number: '06',
      title: 'Online Shopping Convenience',
      description: 'Shop fragrances from the comfort of your home with our user-friendly online platform. Enjoy secure payments, fast delivery, and personalized recommendations.',
      image: ''
    }
  ];

  return (
    <div className={styles.servicesContainer}>
      <section className={styles.heroSection}>
        <h1>Our Services</h1>
        <p>Experience the art of fragrance through our comprehensive range of services designed to enhance your olfactory journey.</p>
      </section>

      <section className={styles.servicesSection}>
        {services.map((service, index) => (
          <div key={service.number} className={`${styles.serviceItem} ${index % 2 === 0 ? styles.leftLayout : styles.rightLayout}`}>
            <div className={styles.serviceContent}>
              <div className={styles.serviceNumber}>{service.number}</div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
            <div className={styles.serviceImage}>
              <img src={service.image} alt={service.title} />
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default Services;