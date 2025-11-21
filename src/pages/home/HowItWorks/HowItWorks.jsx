import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";

const HowItWorks = () => {
  return (
    <div className="w-full py-16 max-w-7xl mx-auto">
      {/* Section Heading */}
      <h1 className="text-3xl font-bold mx-5 mb-10 text-left">How It Works</h1>

      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {/* Card 1 */}
        <div className="bg-white shadow-lg p-6 rounded-2xl text-center hover:shadow-xl transition">
          <CiDeliveryTruck className="text-5xl mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Booking Pick & Drop</h3>
          <p className="text-gray-600 text-sm">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg p-6 rounded-2xl text-center hover:shadow-xl transition">
          <CiDeliveryTruck className="text-5xl mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Cash On Delivery</h3>
          <p className="text-gray-600 text-sm">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg p-6 rounded-2xl text-center hover:shadow-xl transition">
          <CiDeliveryTruck className="text-5xl mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Delivery Hub</h3>
          <p className="text-gray-600 text-sm">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-lg p-6 rounded-2xl text-center hover:shadow-xl transition">
          <CiDeliveryTruck className="text-5xl mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">
            Booking SME & Corporate
          </h3>
          <p className="text-gray-600 text-sm">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
