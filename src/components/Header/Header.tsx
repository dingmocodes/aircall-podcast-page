"use client";
import React, { useState } from "react";
import styles from './Header.module.css';

const HeaderTopRow: React.FC = () => {
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

const HeaderMiddleRow: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.midRow}>
      <div className={styles.logo}>
        <img src="/logo.svg" alt="Aircall logo"></img>
        <span className={styles.logoText}>aircall</span>
      </div>
      <nav className={styles.midNav}>
        <a href="#">Why Aircall</a>
        <a href="#">Solutions</a>
        <a href="#">Pricing</a>
        <a href="#">Resources</a>
        <a href="#">Partners</a>
        <a href="#">Company</a>
      </nav>
      <button 
        className={styles.hamburger}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <img src="/hamburger.svg" alt="Open navigation menu"></img>
      </button>
      <button className={styles.tryForFree}>Try for Free</button>
    </div>
  );
}

const HeaderBottomRow: React.FC = () => {
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
      <span className={styles.searchText}>Search</span>
      <button type="submit" className={styles.search}>
        <img src="/search.svg" alt="Search icon"></img>
      </button>
    </div>
  );
}

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <HeaderTopRow />
      <HeaderMiddleRow />
      <HeaderBottomRow />
    </header>
  );
}

export default Header;