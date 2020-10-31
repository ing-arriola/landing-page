import React from "react";
import { Marker } from "react-leaflet";
import { IconLocation } from "./IconLocation";
const Markers = ({ locations }) => {
  const markers = locations.map((place) => (
    <Marker
      position={{ lat: place.latitude, lng: place.longitude }}
      icon={IconLocation}
    />
  ));
  return markers;
};

export default Markers;
