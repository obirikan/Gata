import React from "react";
import { ReactComponent as Arrow } from "../../assets/svgs/arrow-right.svg";

const Careers = () => {
  return (
    <section id="careers" className="bg-white  text-appBlack">
      <div className="mx-auto container px-6 lg:mb-[64px] mb-[40px]">
        <h2 className="font-semibold lg:text-[30px] text-[24px] leading-[120%] tracking-[-0.33px] ">
          Careers at Rattify
        </h2>
        <div className="lg:grid grid-cols-[auto_auto] block gap-[146px] mt-6 opacity-80">
          <p>
          <h3 className="font-bold ">Discover Your Path at Rattify</h3>
          Join our dynamic team at Rattify and embark on a rewarding journey to shape the future of digital verification. As a leading innovator, we offer a collaborative environment that fosters growth, creativity, and excellence. At Rattify, you'll make a lasting impact by empowering individuals and businesses to navigate the digital world with confidence and ease. Explore a world of possibilities and become a catalyst for change with Rattify.
          </p>
          <button className="flex gap-[10px] items-center h-fit lg:mt-0 mt-[28px] font-medium">
            <h5 className="leading-[150%] font-medium">See open roles</h5>
            <Arrow fill="black" />
          </button>
        </div>
      </div>
      <div className="careers-hero"></div>
    </section>
  );
};

export default Careers;
{
}
