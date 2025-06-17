import React from "react";
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.headline}>
          Discover audio stories that entertain, inform, and inspire
        </h1>
        <p className={styles.subscribe}>
          Subscribe to our podcast:
        </p>
        <div className={styles.platforms}>
          <a href="#">
            <img src="/spotify.svg"></img>
            Spotify
          </a>
          <a href="#">
            <img src="/deezer.svg"></img>
            Deezer
          </a>
          <a href="#">
            <img src="/apple_podcast.svg"></img>
            Apple Podcast
          </a>
        </div>
      </div>
      <img src="/smiles_convo.png"></img>
    </section>
  );
}