import React from "react";
import { FaStar } from "react-icons/fa";
import reviewQuote from "../../../assets/reviewQuote.png";

const ReviewCards = ({ review }) => {
  const { reviews, userName, ratings, user_photoURL, date } = review;

  return (
    <div
      className="bg-white rounded-3xl shadow-md border p-6 space-y-4 mx-auto border-primary"
      style={{
        maxWidth: "320px", // Reduced width
        minHeight: "280px", // Makes all cards consistent
      }}
    >
      {/* Quote + Review */}
      <div>
        <img src={reviewQuote} alt="" className="w-8 opacity-60 mb-3" />
        <p className="text-gray-600 text-md leading-relaxed line-clamp-5 ">
          {reviews}
        </p>
      </div>

      {/* User Info */}
      <div className="flex items-center gap-3 pt-3 border-t border-primary">
        <img
          src={user_photoURL}
          alt=""
          className="w-10 h-10 rounded-full object-cover border"
        />

        <div className="flex flex-col">
          <h2 className="font-bold text-gray-900 text-lg">{userName}</h2>
          <span className="text-gray-400 text-xs">{date}</span>

          {/* Stars */}
          <div className="flex items-center text-yellow-500 text-xs mt-1">
            {Array.from({ length: ratings }).map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCards;
