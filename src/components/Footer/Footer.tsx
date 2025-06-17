import React from "react";
import styles from "./Footer.module.css";

const FooterTopRow: React.FC = () => {
  return (
    <div className={styles.topRow}>
      <img src="/logo.svg" alt="Aircall logo"></img>
      <h2>The phone system for the modern business</h2>
    </div>
  );
}

const FooterMidRow: React.FC = () => {
  return (
    <div className={styles.footerColumns}>
      <div className={styles.col1}>
        <h3>WHY AIRCALL</h3>
        <ul>
          <li><a href="#">Country Coverage</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Status</a></li>
          <li><a href="#">Developer</a></li>
        </ul>
      </div>
      <div className={styles.col2}>
        <h3>PRODUCT</h3>
        <ul>
          <li><a href="#">Integrations</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Quality and reliability</a></li>
          <li><a href="#">Apps</a></li>
          <li><a href="#">Request a demo</a></li>
        </ul>
      </div>
      <div className={styles.col3}>
        <h3>SOLUTIONS</h3>
        <ul>
          <li><a href="#">Call Center</a></li>
          <li><a href="#">Inbound Call Center Software</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Sales</a></li>
          <li><a href="#">Outbound Call Center Software</a></li>
          <li><a href="#">Phone System</a></li>
        </ul>
      </div>
      <div className={styles.col4}>
        <h3>RESOURCES</h3>
        <ul>
          <li><a href="#">Blog</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Customer Studies</a></li>
          <li><a href="#">Partner Stories</a></li>
          <li><a href="#">Become a partner</a></li>
        </ul>
      </div>
      <div className={styles.col5}>
        <h3>COMPANY</h3>
        <ul>
          <li><a href="#">Request a Demo</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Press</a></li>
        </ul>
      </div>
    </div>
  );
}

const FooterBottomRow: React.FC = () => {
  return (
    <div className={styles.bottomRow}>
      <span>&copy; Aircall</span>
      <nav className={styles.footerLinks}>
        <a href="#">Privacy</a>
        <a href="#">Terms of use</a>
        <a href="#">Site map</a>
      </nav>
      <nav className={styles.footerSocials}>
        <a href="#" aria-label="Twitter">
          <img src="/icon_twitter.svg" alt="Twitter logo"></img>
        </a>
        <a href="#" aria-label="Facebook">
          <img src="/icon_facebook.svg" alt="Facebook logo"></img>
        </a>
        <a href="#" aria-label="Linkedin">
          <img src="/icon_linkedin.svg" alt="Linkedin logo"></img>
        </a>
      </nav>
    </div>
  );
}

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <FooterTopRow />
      <FooterMidRow />
      <FooterBottomRow />
    </footer>
  );
}

export default Footer;