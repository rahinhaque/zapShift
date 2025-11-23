import React from "react";
import Logo from "../components/logo/Logo";
import authImage from "../assets/authImage.png";
import { Outlet } from "react-router";

const Authlayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 space-y-14">
      {/* Logo – Left Aligned */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Logo />
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center md:items-start justify-between px-4 md:px-10">
        {/* LEFT – Forms (Outlet) */}
        <div className="flex-1 w-full max-w-md md:max-w-lg bg-white shadow-lg rounded-2xl p-8 md:p-10">
          <Outlet />
        </div>

        {/* RIGHT – Image */}
        <div className="flex-1 hidden md:flex justify-center">
          <img
            src={authImage}
            alt="Authentication Illustration"
            className="w-3/4 max-w-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Authlayout;
