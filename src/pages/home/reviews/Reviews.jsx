import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCards from "./ReviewCards";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);

  return (
    <div className="my-30 px-4">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h3 className="text-3xl font-bold">Reviews</h3>
        <p className="text-gray-600 mt-2">
          Thousands of customers and merchants trust ZapShift every day for
          fast, secure, and reliable parcel delivery. Here’s what they say about
          their experience with us.
        </p>
      </div>

      <Swiper
        loop={true}
        spaceBetween={30}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        breakpoints={{
          0: { slidesPerView: 1, coverflowEffect: { rotate: 20, depth: 100 } },
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        coverflowEffect={{
          rotate: 30,
          stretch: "50%",
          depth: 200,
          modifier: 1,
          scale: 0.75,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <ReviewCards review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
