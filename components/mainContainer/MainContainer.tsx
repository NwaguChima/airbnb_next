import React from "react";
import { MainNav } from "../mainNav/MainNav";
import styles from "./MainContainer.module.scss";

interface MainContainerProps {}

export const MainContainer: React.FC<MainContainerProps> = ({}) => {
  return (
    <main>
      <MainNav />
    </main>
  );
};
