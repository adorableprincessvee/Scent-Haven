import styles from "./ArticlesSection.module.css";

export default function ArticleCard({ image, title, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} />
      </div>

      <h3>{title}</h3>
      <p>{description}</p>

      <button className={styles.readBtn}>Read More</button>
    </div>
  );
}