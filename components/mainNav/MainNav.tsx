import React from "react";
import styles from "./MainNav.module.scss";

interface MainNavProps {}

export const MainNav: React.FC<MainNavProps> = ({}) => {
  return (
    <div className={styles.navContainer}>
      <nav aria-label="main-nav" className={styles.navContainer__nav}>
        Test
      </nav>
      <div className={styles.navContainer__filter}>
        <i>
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            role="presentation"
            focusable="false"
          >
            <path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
          </svg>
        </i>
        <p>Filters</p>
      </div>
    </div>
  );
};
