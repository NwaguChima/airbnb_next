import React from "react";
import { FiGlobe } from "react-icons/fi";
import { BsCurrencyDollar, BsCaretUp } from "react-icons/bs";

import styles from "./FooterNav.module.scss";

interface FooterNavProps {}

export const FooterNav: React.FC<FooterNavProps> = ({}) => {
  return (
    <nav aria-label="footerNav" className={styles.footerNav}>
      <ul className={styles.footerNav__left}>
        <li>&#169; {new Date().getFullYear()} Airbnb, Inc.</li>
        <li>&#183;</li>
        <li>Privacy</li>
        <li>&#183;</li>
        <li>Terms</li>
        <li>&#183;</li>
        <li>Sitemap</li>
        <li>&#183;</li>
        <li>Destinations</li>
      </ul>
      <ul className={styles.footerNav__right}>
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
        <li className={styles.caret}>
          Support &#38; resources
          <span>
            <BsCaretUp />
          </span>
        </li>
      </ul>
    </nav>
  );
};
