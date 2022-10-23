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
          <i className={styles.globe}>
            <FiGlobe />
          </i>
          <div className={styles.profile__avater}>
            <i>
              <IoMenuOutline />
            </i>
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              role="presentation"
              focusable="false"
            >
              <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
            </svg>
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
            <span>&#183;</span>
            <span>Any week</span>
            <span>&#183;</span>
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
