import React from "react";
import Logo from "../components/logo/Logo";
import authImage from "../assets/authImage.png";
import { Outlet } from "react-router";

const Authlayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Logo></Logo>
      <div className="flex">
        {/* //Outlet here */}
        <div className="flex-1">
          <Outlet></Outlet>
        </div>

        {/* //Image Here */}
        <div className="flex-1">
          <img src={authImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Authlayout;
