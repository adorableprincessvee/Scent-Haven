import styles from "./ArticlesSection.module.css";
import { Link } from "react-router-dom";

export default function ArticleCard({ image, title, description, id }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} />
      </div>

      <h3>{title}</h3>
      <p>{description}</p>

<Link to={`/blog/${id || ''}`} className={styles.readBtn}>Read More</Link>
    </div>
  );
}

