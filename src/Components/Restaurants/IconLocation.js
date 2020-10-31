import Icon from "../../Assets/images/location_icon.svg";
import L from "leaflet";

export const IconLocation = L.icon({
  iconUrl: Icon,
  iconRetinaUrl: Icon,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: "Leaflet-venue-icon",
});
