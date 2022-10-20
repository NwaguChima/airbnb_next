import React from "react";
import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import { FiGlobe } from "react-icons/fi";
import { IoMenuOutline } from "react-icons/io5";
import styles from "./header.module.scss";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <div className={styles.logo}>
          <Image
            src="/images/airbnb-icon.svg"
            alt="logo"
            width={30}
            height={30}
          />
          <h1>airbnb</h1>
        </div>
        <div className={styles.search}>
          <span>Anywhere</span>
          <span>Any week</span>
          <input type="text" placeholder="Add guests" />
          <i>
            <IoSearchOutline />
          </i>
        </div>
        <div className={styles.profile}>
          <h3>Become a Host</h3>
          <i>
            <FiGlobe />
          </i>
          <div className={styles.profile__avater}>
            <i>
              <IoMenuOutline />
            </i>
          </div>
        </div>
      </div>
      <div className={styles.header__mobile}>
        <i>
          <IoSearchOutline />
        </i>
        <div className={styles.header__mobile__text}>
          <h4>Where to?</h4>
          <p>
            <span>Anywhere</span>
            <span>.</span>
            <span>Any week</span>
            <span>.</span>
            <span>Add guests</span>
          </p>
        </div>
        <i className={styles.filter}>
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            role="presentation"
            focusable="false"
          >
            <path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
          </svg>
        </i>
      </div>
    </header>
  );
};

export default Header;
