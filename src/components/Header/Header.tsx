import React from "react";
import styles from './Header.module.css';

function HeaderTopRow() {
  return (
    <div className={styles.topRow}>
      <span className={styles.phone}>+1 888 240 6923</span>
      <a href="https://aircall.io/contact/" className={styles.contact}>Contact Us</a>
      <a href="https://dashboard.aircall.io/login" className={styles.login}>Login</a>
      <select className={styles.lang}>
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="de">Deutsch</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
}

function HeaderMiddleRow() {
  return (
    <div className={styles.midRow}>
      <div className={styles.logo}>
        <img src="public/logo.svg"></img>
        <span className={styles.logoText}>Aircall</span>
      </div>
      <nav className={styles.midNav}>
        <a href="#">Why Aircall</a>
        <a href="#">Solutions</a>
        <a href="#">Pricing</a>
        <a href="#">Resources</a>
        <a href="#">Partners</a>
        <a href="#">Company</a>
      </nav>
      <button className={styles.tryForFree}>Try for Free</button>
    </div>
  );
}

function HeaderBottomRow() {
  return (
    <div className={styles.bottomRow}>
      <nav className={styles.bottomNav}>
        <a href="#">All</a>
        <a href="#">Call Center</a>
        <a href="#">Support</a>
        <a href="#">Customer Stories</a>
        <a href="#">Webinars</a>
        <a href="#">Podcast</a>
        <a href="#">More</a>
      </nav>
      <button type="submit" className={styles.search}>
        <img src="public/search.svg"></img>
      </button>
    </div>
  );
}

export default function Header() {
  return (
    <header>
      <HeaderTopRow />
      <HeaderMiddleRow />
      <HeaderBottomRow />
    </header>
  );
}