import React, { useState } from "react";
import { HouseListInterface, ListCopy } from "../../utils/houseList";
import { HouseCard } from "../houseCard/HouseCard";
import { MainNav } from "../mainNav/MainNav";
import styles from "./MainContainer.module.scss";

import dynamic from "next/dynamic";
const Map = dynamic(() => import("./Map"), { ssr: false });

interface MainContainerProps {}

export const MainContainer: React.FC<MainContainerProps> = ({}) => {
  const [showMap, setShowMap] = useState(true);

  return (
    <main>
      <MainNav />
      <div className={styles.container}>
        {!showMap &&
          ListCopy.map((house: HouseListInterface, index: number) => (
            <HouseCard house={house} key={index} />
          ))}
        {showMap && (
          <div className={styles.mapContainer}>
            <Map list={ListCopy} />
          </div>
        )}
        <div className={styles.map}>
          <p>Show map</p>
          <i>
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              role="presentation"
              focusable="false"
            >
              <path d="M31.245 3.747a2.285 2.285 0 0 0-1.01-1.44A2.286 2.286 0 0 0 28.501 2l-7.515 1.67-10-2L2.5 3.557A2.286 2.286 0 0 0 .7 5.802v21.95a2.284 2.284 0 0 0 1.065 1.941A2.29 2.29 0 0 0 3.498 30l7.515-1.67 10 2 8.484-1.886a2.285 2.285 0 0 0 1.802-2.245V4.247a2.3 2.3 0 0 0-.055-.5zM12.5 25.975l-1.514-.303L9.508 26H9.5V4.665l1.514-.336 1.486.297v21.349zm10 1.36l-1.515.337-1.485-.297V6.025l1.514.304L22.493 6h.007v21.335z"></path>
            </svg>
          </i>
        </div>
      </div>
    </main>
  );
};

// pages/_document.js
// import { Html, Head, Main, NextScript } from "next/document";

// export default function Document() {
//   return (
//     <Html>
//       <Head>
//         <link
//           rel="stylesheet"
//           href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css"
//           integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14="
//           crossOrigin=""
//         />
//       </Head>
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }
