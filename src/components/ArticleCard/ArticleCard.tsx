import React from "react";
import styles from "./ArticleCard.module.css"
import { ArticleCardProps } from "./ArticleCard.types";

const ArticleCard: React.FC<ArticleCardProps> = ({ image, category, length, title, description }) => {
  return (
    <div className={styles.card}>
      <img src={image} className={styles.cover}></img>
      <span>
        <p className={styles.category}>{category} </p>
        ·
        <p className={styles.length}> {length} MIN READ</p>
      </span>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default ArticleCard;