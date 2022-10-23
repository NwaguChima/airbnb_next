import React from "react";
import { HouseListInterface, ListCopy } from "../../utils/houseList";
import { HouseCard } from "../houseCard/HouseCard";
import { MainNav } from "../mainNav/MainNav";
import { HiOutlineMap } from "react-icons/hi2";
import styles from "./MainContainer.module.scss";

interface MainContainerProps {}

export const MainContainer: React.FC<MainContainerProps> = ({}) => {
  return (
    <main>
      <MainNav />
      <div className={styles.container}>
        {ListCopy.map((house: HouseListInterface, index: number) => (
          <HouseCard house={house} key={index} />
        ))}
        <div className={styles.map}>
          <p>Show map</p>
          <i>
            <HiOutlineMap />
          </i>
        </div>
      </div>
    </main>
  );
};
