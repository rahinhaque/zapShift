import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Coverage = () => {
  const position = [51.505, -0.09];
  return (
    <div>
      <h2 className="text-5xl text-center text-secondary py-7">
        We are available in 64 districts
      </h2>
      {/* //search box */}
      <div></div>
      {/* map Container  */}
      <div className="border w-7xl h-[800px] mx-auto">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          className="h-[800px]"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.Tan tana tan tan
              tan tara.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
