import React from "react";
import styles from "./ArticleList.module.css";
import ArticleCard from "../ArticleCard/ArticleCard";

const ARTICLES = [
  {
    image: "/article1.png",
    category: "SALES",
    length: 9,
    title: "How to Pick the Best Technology for Your Team",
    description: "Choosing call recording software is difficult, to say the least."
  },
  {
    image: "/article2.png",
    category: "PRODUCT",
    length: 3,
    title: "The Secret to Building a Hybrid Workplace | Part III: Hiring Hybrid Employees",
    description: "This article is a part of our series about building the ultimate hybrid workplace."
  },
  {
    image: "/article3.png",
    category: "LIFE AT AIRCALL",
    length: 5,
    title: "Developing a Hybrid Workforce? Here Are The Top Factors to Consider",
    description: "A recent survey conducted by global consulting firm PwC..."
  },
  {
    image: "/article4.png",
    category: "SALES",
    length: 9,
    title: "Creating a Workplace Built on Collaboration",
    description: "This article is a part of our series about building the ultimate hybrid workplace."
  }
]

const ArticleList: React.FC = () => {
  return (
    <section className={styles.articleList}>
      <h2 className={styles.heading}>Discover our latest articles</h2>
      <div className={styles.grid}>
        {ARTICLES.map((article, idx) => (
          <ArticleCard 
            key={idx}
            image={article.image}
            category={article.category}
            length={article.length}
            title={article.title}
            description={article.description}
          />
        ))}
      </div>
    </section>
  );
}

export default ArticleList;