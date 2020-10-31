import React from "react";
import { Map, TileLayer } from "react-leaflet";
import Markers from "./Markers";
import "leaflet/dist/leaflet.css";

const MapView = ({ locations }) => {
  return (
    <Map center={{ lat: "13.6929", lng: "-89.2182" }} zoom={10}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Markers locations={locations} />
    </Map>
  );
};

export default MapView;
