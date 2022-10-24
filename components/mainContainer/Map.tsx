import React, { useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { HouseListInterface } from "../../utils/houseList";
import { FiGlobe } from "react-icons/fi";
import L from "leaflet";

// import "leaflet/dist/leaflet.css";

interface MapProps {
  list: [HouseListInterface];
}

// const markerIcon = new L.Icon({
//   iconUrl: "/images/Map_pin_icon.svg.png",
//   iconSize: [35, 45],
//   iconAnchor: [17, 46],
//   popupAnchor: [0, -46],
// });

const Map: React.FC<MapProps> = ({ list }) => {
  const [center, setCenter] = useState({ lat: list[0].lat, lng: list[0].lng });
  const ZOOM_LEVEL = 1;
  const mapRef = useRef();

  return (
    <MapContainer
      center={center}
      zoom={ZOOM_LEVEL}
      scrollWheelZoom={true}
      ref={mapRef as any}
      style={{ height: "40rem", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {list.map((house: HouseListInterface, index: number) => (
        <Marker
          position={[house.lat, house.lng]}
          key={index}
          //  icon={markerIcon}
        >
          <Popup>{house.town}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
