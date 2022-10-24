import React, { useRef, useState } from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination } from "swiper";
import styles from "./HouseCard.module.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { MockDataInterface } from "../../utils/MOCK_DATA";

interface HouseCardProps {
  house: MockDataInterface;
}

export const HouseCard: React.FC<HouseCardProps> = ({ house }) => {
  const [liked, setLiked] = useState(house.like);
  const swiperNavPrevRef = useRef<HTMLDivElement>(null);
  const swiperNavNextRef = useRef<HTMLDivElement>(null);
  const [beginning, setBeginning] = useState(true);

  return (
    <div className={styles.card}>
      <i className={`${styles.likeIcon} ${liked ? styles.liked : ""}`}>
        <FcLike onClick={() => setLiked(!liked)} />
      </i>
      <Swiper
        className={styles.card__picture}
        modules={[Navigation, EffectFade, Pagination]}
        slidesPerView={1}
        navigation={{
          prevEl: swiperNavPrevRef.current,
          nextEl: swiperNavNextRef.current,
        }}
        pagination={{ clickable: true }}
        loop={true}
        effect={"fade"}
        onBeforeSlideChangeStart={() => setBeginning(true)}
        onInit={(swiper: any) => {
          swiper.params.navigation.prevEl = swiperNavPrevRef.current;
          swiper.params.navigation.nextEl = swiperNavNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {house.imageUrl.map((image, index) => (
          <SwiperSlide key={index} className={styles.swslides}>
            <Image
              src={image}
              alt={house.town}
              width={345}
              height={340}
              style={{ borderRadius: "1rem" }}
            />
          </SwiperSlide>
        ))}
        <div
          className={`${styles.swiperNavPrev} ${beginning ? styles.start : ""}`}
          // style={{ display: beginning ? "none" : "flex" }}
          ref={swiperNavPrevRef}
        ></div>
        <div
          className={styles.swiperNavNext}
          ref={swiperNavNextRef}
          onClick={() => setBeginning(false)}
        ></div>
      </Swiper>
      <div className={styles.card__body}>
        <div className={styles.card__body__left}>
          <h3>
            {house.town}, {house.country}
          </h3>
          <p>{house.distance} Kilometers away</p>
          <p>{house.dateRange}</p>
          <p className={styles.price}>
            <span>{house.price}</span> night
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
