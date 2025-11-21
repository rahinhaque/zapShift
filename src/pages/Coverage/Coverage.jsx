import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const position = [23.685, 90.3563];
  const serviceCenter = useLoaderData();
  console.log(serviceCenter);

  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const district = serviceCenter.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase())
    );
    if (district) {
      const coOrd = [district.latitude, district.longitude];
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-5xl text-left text-secondary py-7">
        We are available in 64 districts
      </h2>
      {/* //search box */}
      <form onSubmit={handleSearch}>
        <div className="flex items-center gap-2 w-full max-w-md">
          <input
            type="text"
            name="location"
            placeholder="Search location..."
            className="input input-bordered border-primary w-full focus:outline-none"
          />

          <button className="btn btn-primary text-secondary">Search</button>
        </div>
      </form>

      {/* map Container  */}
      <div className="mt-30">
        <h3 className="text-left text-secondary text-3xl py-4">
          We deliver almost all over Bangladesh
        </h3>
        <div className="border w-7xl h-[800px] mx-auto ">
          <MapContainer
            center={position}
            zoom={8}
            scrollWheelZoom={false}
            className="h-[800px]"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {serviceCenter.map((center) => (
              <Marker
                key={center.id}
                position={[center.latitude, center.longitude]}
              >
                <Popup>
                  <div className="w-60 p-4 rounded-xl shadow-lg bg-secondary font-sans">
                    <h3 className="text-lg font-bold text-primary mb-2">
                      {center.city}, {center.district}
                    </h3>

                    <div className="space-y-1 text-sm text-white">
                      <p>
                        <span className="font-semibold">Covered Area:</span>
                        {","}
                        {center.covered_area.join(", ")}
                      </p>

                      <p className="">
                        <span className="font-semibold">Status:</span>
                        <span
                          className={`ml-2 font-semibold ${
                            center.status === "Active"
                              ? "text-red-600"
                              : "text-green-600"
                          }`}
                        >
                          {center.status}
                        </span>
                      </p>

                      <p>
                        <span className="font-semibold">Flowchart:</span>{" "}
                        {center.flowchart}
                      </p>
                    </div>

                    <button className="btn btn-primary btn-sm w-full mt-3 text-secondary">
                      View Details
                    </button>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Coverage;
