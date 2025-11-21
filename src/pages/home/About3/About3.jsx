import React from "react";
import liveTracking from "../../../assets/live-tracking.png";
import safeDelivery from "../../../assets/safe-delivery.png";

const About3 = () => {
  return (
    <div className="space-y-10 max-w-7xl mx-auto mb-20 px-4 md:px-0">
      {/* CARD 1 */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 bg-white p-6 md:p-8 shadow-lg rounded-xl">
        <img
          src={liveTracking}
          alt=""
          className="w-28 h-28 md:w-40 md:h-40 object-contain"
        />

        {/* Vertical Dotted Line */}
        <div className="hidden md:block border-l-2 border-dotted border-gray-400 h-32"></div>

        {/* Horizontal line for mobile */}
        <div className="md:hidden border-b-2 border-dotted border-gray-400 w-full my-4"></div>

        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-xl md:text-2xl font-semibold mb-2">
            Live Parcel Tracking
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment’s journey and get
            instant updates.
          </p>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 bg-white p-6 md:p-8 shadow-lg rounded-xl">
        <img
          src={safeDelivery}
          alt=""
          className="w-28 h-28 md:w-40 md:h-40 object-contain"
        />

        <div className="hidden md:block border-l-2 border-dotted border-gray-400 h-32"></div>

        <div className="md:hidden border-b-2 border-dotted border-gray-400 w-full my-4"></div>

        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-xl md:text-2xl font-semibold mb-2">
            100% Safe Delivery
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Your parcels are handled with care and delivered securely to their
            destination — safe and damage-free, every time.
          </p>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 bg-white p-6 md:p-8 shadow-lg rounded-xl">
        <img
          src={safeDelivery}
          alt=""
          className="w-28 h-28 md:w-40 md:h-40 object-contain"
        />

        <div className="hidden md:block border-l-2 border-dotted border-gray-400 h-32"></div>

        <div className="md:hidden border-b-2 border-dotted border-gray-400 w-full my-4"></div>

        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-xl md:text-2xl font-semibold mb-2">
            24/7 Call Center Support
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Our support team is available around the clock to assist with
            questions, updates, or delivery concerns — anytime, day or night.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About3;
