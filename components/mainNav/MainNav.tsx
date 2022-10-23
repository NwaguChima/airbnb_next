import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, EffectFade } from "swiper";
import gsap from "gsap";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import styles from "./MainNav.module.scss";

interface MainNavProps {}

export const MainNav: React.FC<MainNavProps> = ({}) => {
  const scrollRef = useRef<HTMLUListElement>(null);
  const [scrollX, setScrollX] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(false);

  const slide = (shift: number) => {
    scrollRef.current!.scrollLeft += shift;
    setScrollX(scrollX + shift);

    if (
      Math.floor(
        scrollRef.current!.scrollWidth - scrollRef.current!.scrollLeft
      ) <= scrollRef.current!.clientWidth
    ) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  };

  const anim = (e: { target: any }) => {
    gsap.from(e.target, { scale: 1 });
    gsap.to(e.target, { scale: 1.1 });
  };

  const anim2 = (e: { target: any }) => {
    gsap.from(e.target, { scale: 1.1 });
    gsap.to(e.target, { scale: 1 });
  };

  const scrollCheck = () => {
    setScrollX(scrollRef.current!.scrollLeft);
    if (
      Math.floor(
        scrollRef.current!.scrollWidth - scrollRef.current!.scrollLeft
      ) <= scrollRef.current!.offsetWidth
    ) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  };

  return (
    <div className={styles.navContainer}>
      <nav aria-label="main-nav" className={styles.navContainer__nav}>
        {
          <button
            onClick={() => slide(-200)}
            onMouseEnter={(e) => anim(e)}
            onMouseLeave={(e) => anim2(e)}
            style={{ opacity: scrollX === 0 ? 0 : 1 }}
          >
            <i>
              <MdKeyboardArrowLeft size={20} />
            </i>
          </button>
        }

        <ul ref={scrollRef} onScroll={scrollCheck}>
          <li>Hello 1</li>
          <li>Hello 2</li>
          <li>Hello 3</li>
          <li>Hello 4</li>
          <li>Hello 5</li>
          <li>Hello 6</li>
          <li>Hello 7</li>
          <li>Hello 8</li>
          <li>Hello 9</li>
          <li>Hello 10</li>
          <li>Hello 1</li>
          <li>Hello 2</li>
          <li>Hello 3</li>
          <li>Hello 4</li>
          <li>Hello 5</li>
          <li>Hello 6</li>
          <li>Hello 7</li>
          <li>Hello 8</li>
          <li>Hello 9</li>
          <li>Hello 10</li>
          <li>Hello 1</li>
          <li>Hello 2</li>
          <li>Hello 3</li>
          <li>Hello 4</li>
          <li>Hello 5</li>
          <li>Hello 6</li>
          <li>Hello 7</li>
          <li>Hello 8</li>
          <li>Hello 9</li>
          <li>Hello 10</li>
        </ul>

        {
          <button
            onClick={() => slide(+200)}
            onMouseEnter={(e) => anim(e)}
            onMouseLeave={(e) => anim2(e)}
            style={{ opacity: scrollEnd ? 0 : 1 }}
          >
            <i>
              <MdKeyboardArrowRight size={20} />
            </i>
          </button>
        }
      </nav>
      <div className={styles.navContainer__filter}>
        <i>
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            role="presentation"
            focusable="false"
          >
            <path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
          </svg>
        </i>
        <p>Filters</p>
      </div>
    </div>
  );
};
