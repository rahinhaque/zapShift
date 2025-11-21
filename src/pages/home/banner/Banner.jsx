import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";
import { FiArrowUpRight } from "react-icons/fi";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <Carousel stopOnHover={true} infiniteLoop={true} autoPlay={true}>
        <div className="relative p-5">
          <img src={bannerImg1} />
          <div>
            <p className="text-[#606060] absolute top-[450px] left-[90px] text-left">
              Enjoy fast, reliable parcel delivery with real-time tracking and
              zero hassle. From personal <br /> packages to business shipments —
              we deliver on time, every time.
            </p>
            <div className="flex gap-3 mt-3 absolute top-[500px] left-[85px]">
              <button className="btn btn-primary rounded-3xl text-black text-lg">
                Track Your Percel
              </button>
              <FiArrowUpRight
                className="text-[#CAEB66] border p-2 rounded-full bg-[#1F1F1F]"
                size={40}
              />
              <button className="btn p-5 text-lg">Be a Rider</button>
            </div>
          </div>
        </div>
        <div>
          <img src={bannerImg2} />
        </div>
        <div>
          <img src={bannerImg3} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
