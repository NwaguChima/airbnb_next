import React, { useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { MockDataInterface } from "../../utils/MOCK_DATA";
// import L from "leaflet";

// import "leaflet/dist/leaflet.css";

interface MapProps {
  list: MockDataInterface[];
}

// const markerIcon = new L.Icon({
//   iconUrl: "/images/Map_pin_icon.svg.png",
//   iconSize: [35, 45],
//   iconAnchor: [17, 46],
//   popupAnchor: [0, -46],
// });

const Map: React.FC<MapProps> = ({ list }) => {
  const [center, setCenter] = useState({ lat: list[0].lat, lng: list[0].lng });
  const ZOOM_LEVEL = 2.5;
  const mapRef = useRef();

  return (
    <MapContainer
      center={center}
      zoom={ZOOM_LEVEL}
      scrollWheelZoom={true}
      ref={mapRef as any}
      style={{ height: "100vh", width: "100%", zIndex: 0 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {list.map((house: MockDataInterface, index: number) => (
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
