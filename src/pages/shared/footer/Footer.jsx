import React from "react";
import Logo from "../../../components/logo/Logo";

const Footer = () => {
  return (
    <footer className="bg-[#022C31] text-white py-16 px-6 rounded-3xl max-w-7xl mx-auto mt-20">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        {/* LEFT: LOGO + TEXT */}
        <aside className="max-w-sm space-y-3">
          <Logo />

          <p className="text-gray-300 leading-relaxed">
            ZapShift Courier — delivering parcels fast, safe and reliably across
            Bangladesh. Your trusted logistics partner for business & personal
            use.
          </p>

          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} ZapShift Courier. All rights reserved.
          </p>
        </aside>

        {/* MIDDLE LINKS */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-[#CAEB66]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#CAEB66]">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#CAEB66]">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-[#CAEB66]">
                  Express Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#CAEB66]">
                  Nationwide Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#CAEB66]">
                  Merchant Support
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-[#CAEB66]">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#CAEB66]">
                  Track Parcel
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#CAEB66]">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* SOCIAL BELOW */}
      <div className="mt-12 flex justify-center gap-6">
        <a className="hover:text-[#CAEB66] transition">
          <i className="fa-brands fa-facebook text-2xl"></i>
        </a>

        <a className="hover:text-[#CAEB66] transition">
          <i className="fa-brands fa-instagram text-2xl"></i>
        </a>

        <a className="hover:text-[#CAEB66] transition">
          <i className="fa-brands fa-x-twitter text-2xl"></i>
        </a>

        <a className="hover:text-[#CAEB66] transition">
          <i className="fa-brands fa-youtube text-2xl"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
