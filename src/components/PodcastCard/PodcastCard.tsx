import React from "react";
import styles from "./PodcastCard.module.css";
import { PodcastCardProps } from "./PodcastCard.types";

const PodcastCard: React.FC<PodcastCardProps> = ({ title, episodeIdentifier, image, duration }) => {
  return (
    <div className={styles.card}>
      <img src={image} className={styles.cover} alt="Half face smiling"></img>
      <span className={styles.metadata}>{episodeIdentifier} | {duration}</span>
      <p className={styles.title}>{title}</p>
      <a href="#">
        <img src="/play.svg"></img>
        Listen now
      </a>
    </div>
  );
}

export default PodcastCard;