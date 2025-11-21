import React from "react";
import Banner from "../banner/Banner";
import HowItWorks from "../HowItWorks/HowItWorks";
import OurServices from "../Our Services/OurServices";
import Brands from "../brands/Brands";
import About3 from "../About3/About3";
import Marchent from "../marchant/Marchent";
import Reviews from "../reviews/Reviews";
import Faq from "../../../pages/home/faq/Faq"

const reviewsPromise = fetch("/reviews.json")
.then(res=> res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <HowItWorks></HowItWorks>

      <OurServices></OurServices>
      <Brands></Brands>
      <About3></About3>
      <Marchent></Marchent>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
     <Faq></Faq>
    </div>
  );
};

export default Home;
