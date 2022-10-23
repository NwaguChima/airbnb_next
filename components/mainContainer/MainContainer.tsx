import React from "react";
import { houseList, HouseListInterface, ListCopy } from "../../utils/houseList";
import { HouseCard } from "../houseCard/HouseCard";
import { MainNav } from "../mainNav/MainNav";
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
      </div>
    </main>
  );
};
