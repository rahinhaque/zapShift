import React from "react";
import marchantBg from "../../../assets/be-a-merchant-bg.png";
import location from "../../../assets/location-merchant.png";

const Marchent = () => {
  return (
    <div className="max-w-7xl mx-auto my-20 p-6 md:p-10 rounded-2xl bg-secondary relative overflow-hidden">
      {/* BG IMAGE */}
      <img
        src={marchantBg}
        className="absolute top-2.5 left-0 w-full h-auto object-cover opacity-70 pointer-events-none"
        alt=""
      />

      {/* CONTENT WRAPPER */}
      <div className="relative flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* LEFT CONTENT */}
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Merchant and Customer Satisfaction is Our First Priority
          </h1>

          <p className="text-white opacity-90 mt-4 text-base md:text-lg">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
            <button className="btn btn-primary rounded-3xl text-black text-lg px-6 py-3">
              Become a Merchant
            </button>

            <button className="btn border border-primary text-primary rounded-3xl px-6 py-3 text-lg bg-white/10 backdrop-blur">
              Earn with ZapShift Courier
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={location}
            alt="location"
            className="w-[220px] md:w-[260px] lg:w-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Marchent;
