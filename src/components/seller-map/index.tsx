// components/SellerMap.tsx
import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { scaleQuantize } from "d3-scale";
import { geoCentroid } from "d3-geo";
import allStates from "./indonesia-topojson.json"; // Asumsikan Anda memiliki file ini

const geoUrl = allStates;

const markers = [
  {
    markerOffset: -15,
    name: "Bahagia Elektronik",
    coordinates: [106.816666, -6.2],
  },
  {
    markerOffset: -15,
    name: "Setia Makmur Elektronik",
    coordinates: [106.816666, -6.3],
  },
  // Tambahkan marker lain jika diperlukan
];

const SellerMap = () => {
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{ scale: 2000 }}
      style={{ width: "100%", height: "auto" }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }: { geographies: any }) =>
          geographies.map((geo: any) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              style={{
                default: { fill: "#D6D6DA", outline: "none" },
                hover: { fill: "#F53", outline: "none" },
                pressed: { fill: "#E42", outline: "none" },
              }}
            />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }: any) => (
        <Marker key={name} coordinates={coordinates}>
          <g
            fill="none"
            stroke="#FF5533"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 14v11" />
          </g>
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default SellerMap;
