import React, { useState } from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { HouseListInterface } from "../../utils/houseList";
import styles from "./HouseCard.module.scss";

interface HouseCardProps {
  house: HouseListInterface;
}

export const HouseCard: React.FC<HouseCardProps> = ({ house }) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className={styles.card}>
      <div className={styles.card__picture}>
        <Image
          src={house.imageUrl}
          alt={house.town}
          width={345}
          height={340}
          style={{ borderRadius: "1rem" }}
        />
      </div>
      <div className={styles.card__body}>
        <div className={styles.card__body__left}>
          <h3>
            {house.town}, {house.country}
          </h3>
          <p>{house.distance} Kilometers away</p>
          <p>{house.dateRange}</p>
          <p className={styles.price}>
            <span>${house.price}</span> night
          </p>
        </div>
        <span className={styles.card__body__right}>
          <i>
            <AiFillStar />
          </i>
          4.69
        </span>
      </div>
    </div>
  );
};
