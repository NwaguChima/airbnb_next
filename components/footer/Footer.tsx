import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { FiGlobe } from "react-icons/fi";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import styles from "./Footer.module.scss";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.footer}>
        <nav aria-label="footer-items" className={styles.footer__support}>
          <h4>Support</h4>
          <ul>
            <li>Help Center</li>
            <li>AitCover</li>
            <li>Safety information</li>
            <li>Supporting people with disabilities</li>
            <li>Cancellation options</li>
            <li>Our COVID-19 Response</li>
            <li>Report a neighborhood concern</li>
          </ul>
        </nav>

        <nav aria-label="footer-items" className={styles.footer__community}>
          <h4>Community</h4>
          <ul>
            <li>Airbnb.org disaster relief housing</li>
            <li>Support Afghan refugees</li>
            <li>Combating discrimination</li>
          </ul>
        </nav>
        <nav aria-label="footer-items" className={styles.footer__hosting}>
          <h4>Hosting</h4>
          <ul>
            <li>AirCover for Hosts</li>
            <li>Explore hosting resources</li>
            <li>Visit our community forum</li>
            <li>How to host responsibly</li>
          </ul>
        </nav>
        <nav aria-label="footer-items" className={styles.footer__airbnb}>
          <h4>Airbnb</h4>
          <ul>
            <li>Newsroom</li>
            <li>Learn about new features</li>
            <li>Letter from our founders</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Gift cards</li>
          </ul>
        </nav>
      </div>
      <div className={styles.bottom}>
        <ul className={styles.bottom__left}>
          <li>&#169; {new Date().getFullYear()} Airbnb, Inc.</li>
          <li className={styles.hide}>&#183;</li>
          <li className={styles.hide}>Privacy</li>
          <li className={styles.hide}>&#183;</li>
          <li className={styles.hide}>Terms</li>
          <li className={styles.hide}>&#183;</li>
          <li className={styles.hide}>Sitemap</li>
          <span className={styles.extra}>
            <li>Privacy</li>
            <li>&#183;</li>
            <li>Terms</li>
            <li>&#183;</li>
            <li>Sitemap</li>
          </span>
        </ul>
        <ul className={styles.bottom__right}>
          <li>
            <i>
              <FiGlobe />
            </i>
            <span>English (US)</span>
          </li>
          <li>
            <i>
              <BsCurrencyDollar />
            </i>
            <span>USD</span>
          </li>
          <li>
            <i className={styles.socials}>
              <FaFacebookF />
              <FaTwitter />
              <ImInstagram />
            </i>
          </li>
        </ul>
      </div>
    </footer>
  );
};
