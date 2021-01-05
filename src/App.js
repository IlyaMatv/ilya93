import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-area-select";
import { MapContainer, TileLayer, Popup } from "react-leaflet";
import AreaSelect from "./AreaSelect";
import "./App.css";

export default function App() {
  const [coordinates, setCoordinates] = useState(null);

  return (
    <MapContainer center={[53.904541, 27.561523]} zoom={12}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {coordinates && (
        <Popup
          position={[
            coordinates[0].a[0],
            (coordinates[0].a[1] + coordinates[1].b[1]) / 2,
          ]}
        >
          <div className="coordinates-wrap">
            <div className="coordinates-wrap__item">
              <div>{coordinates[0].a[0]}</div>
              <div>{coordinates[0].a[1]}</div>
            </div>
            <div className="coordinates-wrap__item">
              <div>{coordinates[1].b[0]}</div>
              <div>{coordinates[1].b[1]}</div>
            </div>
            <div className="coordinates-wrap__item">
              <div>{coordinates[2].c[0]}</div>
              <div>{coordinates[2].c[1]}</div>
            </div>
            <div className="coordinates-wrap__item">
              <div>{coordinates[3].d[0]}</div>
              <div>{coordinates[3].d[1]}</div>
            </div>
          </div>
        </Popup>
      )}
      <AreaSelect onChangeFn={setCoordinates} />
    </MapContainer>
  );
}
