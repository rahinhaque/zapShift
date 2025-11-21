import React, { useState } from "react";


const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("story");

  const content = {
    story:
      "We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time. We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking,<br /> efficient logistics, and customer-first service has made us a  trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, <br /> and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.",
    mission:
      "Our mission is to deliver every parcel with speed, care, and accuracy while empowering businesses with seamless logistics. We are committed to creating a reliable and transparent delivery experience, ensuring every package reaches its destination safely and on time. By leveraging innovative technology and efficient processes, we aim to simplify shipping for individuals and enterprises alike. Our goal is not just to move parcels, but to build trust, strengthen communities, and drive growth for our partners. We strive to exceed expectations, provide exceptional customer service, and continuously adapt to the evolving needs of our clients, making logistics effortless, efficient, and dependable for everyone.",
    success:
      "We have successfully delivered thousands of packages with 98% on-time delivery rate and trusted service across major districts.",
    team: "Our team is a group of passionate individuals, logistics experts, and tech enthusiasts committed to transforming the delivery experience.",
  };

  return (
    <div className="max-w-5xl mx-auto py-10">
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-4xl font-bold text-secondary">About Us</h2>
        <p className="text-gray-600 mt-2">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.Enjoy fast, reliable parcel delivery with real-time
          tracking and zero hassle. From personal packages to business shipments
          — we deliver on time, every time. With our dedicated support team and
          nationwide coverage, you can send anything with total confidence.
          Whether it’s a quick same-day delivery or a scheduled pickup, ZapShift
          ensures your parcel reaches the right hands safely, securely, and
          without delays.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-3 mb-8">
        <button
          className={`btn text-secondary ${
            activeTab === "story" ? "btn-primary" : "btn-outline btn-primary"
          }`}
          onClick={() => setActiveTab("story")}
        >
          Story
        </button>

        <button
          className={`btn text-secondary ${
            activeTab === "mission" ? "btn-primary" : "btn-outline btn-primary"
          }`}
          onClick={() => setActiveTab("mission")}
        >
          Mission
        </button>

        <button
          className={`btn text-secondary ${
            activeTab === "success" ? "btn-primary" : "btn-outline btn-primary"
          }`}
          onClick={() => setActiveTab("success")}
        >
          Success
        </button>

        <button
          className={`btn text-secondary ${
            activeTab === "team" ? "btn-primary" : "btn-outline btn-primary"
          }`}
          onClick={() => setActiveTab("team")}
        >
          Team & Others
        </button>
      </div>

      {/* Display Content */}
      <div className="p-5 border rounded-xl shadow-sm bg-white">
        <p className="text-lg leading-relaxed">{content[activeTab]}</p>
      </div>

     
    </div>
  );
};

export default AboutUs;
