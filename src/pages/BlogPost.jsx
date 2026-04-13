import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./BlogPost.module.css";
import { articlesData } from "../components/ArticleSection";
import Footer from "../components/Footer";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const articleIndex = id ? parseInt(id) - 1 : 0;
  const article = articlesData[articleIndex];

  if (!article) {
    return (
      <div className={styles.notFound}>
        <h2>Article Not Found</h2>
        <button onClick={() => navigate("/blog")}>Back to Blog</button>
      </div>
    );
  }

  return (
    <>
      <div className={styles.container}>
        <article className={styles.article}>
          <button className={styles.backBtn} onClick={() => navigate("/blog")}>
            ← Back to Blog
          </button>
          
          <div className={styles.heroImage}>
            <img src={article.image} alt={article.title} />
          </div>

          <div className={styles.content}>
            <header className={styles.header}>
              <h1>{article.title}</h1>
              <div className={styles.meta}>
                <span>Fragrance Insights</span>
                <span>·</span>
                <span>{new Date().toLocaleDateString()}</span>
              </div>
            </header>

            <div 
              className={styles.fullContent}
              dangerouslySetInnerHTML={{ __html: article.fullContent.replace(/\n/g, '<br/>') }}
            />

            <footer className={styles.postFooter}>
              <div className={styles.share}>
                <span>Share this article:</span>
                <button className={styles.socialIcon}><FaFacebookF /></button>
                <button className={styles.socialIcon}><FaTwitter /></button>
                <button className={styles.socialIcon}><FaInstagram /></button>
              </div>
              <button className={styles.readMoreBtn} onClick={() => navigate("/blog")}>
                ← Read More Articles
              </button>
            </footer>
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;

