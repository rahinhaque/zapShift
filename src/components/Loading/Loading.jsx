import Lottie from 'lottie-react';
import React from 'react';
import loadingAnimation from "../../../public/animations/loading.json"

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Lottie animationData={loadingAnimation} loop={true} />
    </div>
  );
};

export default Loading;