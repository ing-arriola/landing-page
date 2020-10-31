import React from "react";
import { Marker } from "react-leaflet";
import { IconLocation } from "./IconLocation";
const Markers = () => {
  return (
    <Marker position={{ lat: "13.670", lng: "-89.159" }} icon={IconLocation} />
  );
};

export default Markers;
