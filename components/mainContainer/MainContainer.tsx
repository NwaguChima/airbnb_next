import React from "react";
import { houseList } from "../../utils/houseList";
import { MainNav } from "../mainNav/MainNav";
import styles from "./MainContainer.module.scss";

interface MainContainerProps {}

export const MainContainer: React.FC<MainContainerProps> = ({}) => {
  return (
    <main>
      <MainNav />
      <div className={styles.container}>
        {houseList.map((house) => HouseCard(house))}
      </div>
    </main>
  );
};
