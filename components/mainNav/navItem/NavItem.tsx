import React from "react";
import Image from "next/image";
import styles from "./NavItem.module.scss";

interface NavItemProps {
  category: string;
  icon: string;
  selected: any;
  onClick: () => void;
}

export const NavItem: React.FC<NavItemProps> = ({
  category,
  icon,
  onClick,
  selected,
}) => {
  return (
    <li className={`${styles.item} ${selected ? styles.activeItem : ""}`}>
      <Image
        src={icon}
        alt={category}
        width={20}
        height={20}
        className={styles.item__img}
        onClick={onClick}
      />
      <span>{category}</span>
    </li>
  );
};
