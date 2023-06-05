import React from "react";
import { useNavigate } from "react-router-dom";
import hero from "../../assets/images/hero-image.png";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-heroBg lg:py-[80px] p-6  mt-[73px]">
      <div className="container mx-auto">
        <div className="lg:grid grid-cols-2 block  gap-6">
          <div className="flex flex-col  justify-center text-appBlack relative">
            <h1 className="font-semibold lg:text-[48px] lg:pt-0 lg:pb-[16px]   pt-[48px] pb-[16px]  text-[40px] leading-[120%]">
              AI-powered, human-friendly identity verification solutions.
            </h1>
            <p className="text-lg leading-[150%]">
              Forward-thinking businesses of all sizes - from startups to large
              enterprises - use Rattify’s software and APIs to acquire new
              customers, stop fraud, reduce costs and meet global KYC
              requirements.
            </p>
            <button
              onClick={() => navigate("/talk-to-us")}
              className="py-[12px] px-[16px] lg:w-fit w-full gradient-bg text-white mt-[32px] lg:mb-0 mb-[48px]    rounded-lg font-medium
             "
            >
              Book a demo
            </button>
            <div className=" hero-text-bg absolute lg:block hidden bottom-[80px] right-0 w-[300px] h-[300px] rounded-full"></div>
          </div>
          <div className="lg:block hidden">
            <img src={hero} alt="rattify verification" className="z-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
