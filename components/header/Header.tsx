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
      <div className={styles.header__mobile}></div>
    </header>
  );
};

export default Header;
