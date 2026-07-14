// import { useEffect } from "react";
import { MapContainer, TileLayer, Circle, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./warsawMap.css";

// Leaflet за замовчуванням шукає іконки маркера у неправильному шляху
// при зборці через Vite/Webpack — фіксимо це один раз
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const WARSAW_CENTER = [52.2297, 21.0122];

export default function WarsawMap({
  center = WARSAW_CENTER,
  zoom = 12,
  radiusMeters = 8000,
  label = "Warszawa",
}) {
  return (
    <div className="warsaw-map-wrapper">
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        className="warsaw-map"
      >
        <TileLayer
          attribution='<img src="https://flagcdn.com/16x12/pl.png" alt="Polska" style="vertical-align:middle;margin-right:4px;border-radius:2px" /> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Circle
          center={center}
          radius={radiusMeters}
          pathOptions={{
            color: "#3b82f6",
            weight: 3,
            fillColor: "#3b82f6",
            fillOpacity: 0.18,
          }}
        />

        <Marker position={center}>
          <Popup>{label}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
