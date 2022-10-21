import React from "react";
import styles from "./Footer.module.scss";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footer__support}>
        <h4>Support</h4>
        <li>Help Center</li>
        <li>AitCover</li>
        <li>Safety information</li>
        <li>Supporting people with disabilities</li>
        <li>Cancellation options</li>
        <li>Our COVID-19 Response</li>
        <li>Report a neighborhood concern</li>
      </ul>
      <ul className={styles.footer__community}>
        <h4>Community</h4>
        <li>Airbnb.org disaster relief housing</li>
        <li>Support Afghan refugees</li>
        <li>Combating discrimination</li>
      </ul>
      <ul className={styles.footer__hosting}>
        <h4>Hosting</h4>
        <li>AirCover for Hosts</li>
        <li>Explore hosting resources</li>
        <li>Visit our community forum</li>
        <li>How to host responsibly</li>
      </ul>
      <ul className={styles.footer__airbnb}>
        <h4>Airbnb</h4>
        <li>Newsroom</li>
        <li>Learn about new features</li>
        <li>Letter from our founders</li>
        <li>Careers</li>
        <li>Investors</li>
        <li>Gift cards</li>
      </ul>
    </footer>
  );
};
