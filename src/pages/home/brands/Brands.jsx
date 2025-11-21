import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amazon from "../../../assets/brands/amazon.png";
import amazonVector from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import start_people from "../../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const brandLogos = [
  amazon,
  amazonVector,
  casio,
  moonstar,
  randstad,
  star,
  start_people,
];

const Brands = () => {
  return (
    <div className="max-w-7xl mx-auto mb-8">
      <h1 className="text-3xl font-bold mx-5 mb-10 text-center">
        We've helped thousands of sales teams
      </h1>

      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: false,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 25,
            centeredSlides: false,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
            centeredSlides: true,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
            centeredSlides: true,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 30,
            centeredSlides: true,
          },
        }}
      >
        {brandLogos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} alt="" className="w-[120px] mx-auto" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-20 mb-14">
        -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </div>
    </div>
  );
};

export default Brands;
