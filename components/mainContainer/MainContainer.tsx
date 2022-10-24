import React, { useState } from "react";
import { MockDataInterface, data } from "../../utils/MOCK_DATA";
import { HouseCard } from "../houseCard/HouseCard";
import { MainNav } from "../mainNav/MainNav";
import { BsListUl } from "react-icons/bs";
import { IoMapOutline } from "react-icons/io5";
import styles from "./MainContainer.module.scss";

import dynamic from "next/dynamic";
const Map = dynamic(() => import("./Map"), { ssr: false });

interface MainContainerProps {}

export const MainContainer: React.FC<MainContainerProps> = ({}) => {
  const [showMap, setShowMap] = useState(false);

  return (
    <main>
      <MainNav />
      {!showMap && (
        <div className={styles.container}>
          {data.map((house: MockDataInterface) => (
            <HouseCard house={house} key={house.id} />
          ))}
          <div className={styles.map} onClick={() => setShowMap(true)}>
            <p>Show map</p>
            <i>
              <IoMapOutline />
            </i>
          </div>
        </div>
      )}

      {showMap && (
        <div className={styles.mapContainer}>
          <Map list={data} />
          <div className={styles.map} onClick={() => setShowMap(false)}>
            <p>Show List</p>
            <i>
              <BsListUl />
            </i>
          </div>
        </div>
      )}
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
