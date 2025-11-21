import React from "react";
import services from "../../../assets/service.png";

const OurServices = () => {
  return (
    <div
      className="mx-auto my-16 rounded-xl border p-10 py-20 px-5 md:px-15"
      style={{
        backgroundColor: "#03373D",
        width: "100%",
        maxWidth: "1500px",
        height: "auto",
      }}
    >
      {/* Heading */}
      <div className="text-center text-white max-w-2xl mx-auto mb-10 md:mb-14 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-gray-200 text-base md:text-lg">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-2xl p-6 text-center flex flex-col justify-center items-center transition-all duration-300 hover:bg-[#CAEB66]"
            style={{
              width: "100%",
              maxWidth: "410.67px",
              height: "346px",
            }}
          >
            <img
              src={services}
              alt=""
              className="mx-auto mb-4 w-[70px] md:w-[80px]"
            />

            {i === 1 && (
              <>
                <h2 className="text-lg md:text-xl font-semibold mb-3">
                  Express & Standard Delivery
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  We deliver parcels within 24–72 hours in major cities. Express
                  delivery in Dhaka within 4–6 hours.
                </p>
              </>
            )}

            {i === 2 && (
              <>
                <h2 className="text-lg md:text-xl font-semibold mb-3">
                  Nationwide Delivery
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Fast delivery to every district in Bangladesh inside 48–72
                  hours.
                </p>
              </>
            )}

            {i === 3 && (
              <>
                <h2 className="text-lg md:text-xl font-semibold mb-3">
                  Fulfillment Solution
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Inventory management, packaging, and online order processing.
                </p>
              </>
            )}

            {i === 4 && (
              <>
                <h2 className="text-lg md:text-xl font-semibold mb-3">
                  Cash on Home Delivery
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Secure COD service anywhere in Bangladesh.
                </p>
              </>
            )}

            {i === 5 && (
              <>
                <h2 className="text-lg md:text-xl font-semibold mb-3">
                  Corporate Service
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Logistics contracts, warehousing, and inventory support.
                </p>
              </>
            )}

            {i === 6 && (
              <>
                <h2 className="text-lg md:text-xl font-semibold mb-3">
                  Parcel Return
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Reverse logistics for return or exchange with online
                  merchants.
                </p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
