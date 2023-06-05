import React from "react";
import { useSearchParams } from "react-router-dom";
import { ReactComponent as Wallet } from "../../assets/svgs/wallet.svg";
import { strip } from "../../utils/helpers";

const Hero = ({industry}) => {
  let [searchParams, setSearchParams] = useSearchParams();
  console.log();
  return (
    <section className="lg:bg-heroBg bg-white lg:py-[96px] p-6  mt-[73px] text-appBlack">
      <div className="container mx-auto">
        <div className="lg:grid grid-cols-2 block  gap-[96px]">
          <div className="flex flex-col  justify-center">
            <h4 className="industry-text font-semibold leading-[150%] text-lg">
              {industry.title}
            </h4>
            <h1 className="font-semibold lg:text-[48px] lg:py-[16px]  text-[40px] leading-[120%]">
              {industry.text}
            </h1>
            <p className="lg:text-lg text-base leading-[150%]">
              {industry.subtext}
            </p>
            <button
              className="py-[12px] px-[37px] lg:w-fit w-full gradient-bg text-white mt-[32px] lg:mb-0 mb-[48px] rounded-lg font-medium
           "
            >
              Talk to us
            </button>
          </div>
          <div className="lg:block hidden">
           {industry.illustration}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
