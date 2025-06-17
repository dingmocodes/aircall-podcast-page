import React from "react";
import styles from "./PlaceholderCard.module.css";

const PlaceholderCard: React.FC = () => {
  return (
    <div className={styles.placeholder}>
      <div className={styles.cover}>
        <span>Coming soon</span>
      </div>
      <div className={styles.lineShort}></div>
      <div className={styles.lineLong}></div>
    </div>
  );
}

export default PlaceholderCard;