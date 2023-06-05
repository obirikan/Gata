import React from "react";
import { ReactComponent as HourGlass } from "../assets/svgs/confirmation.svg";
import PageWrapper from "../Layout/PageWrapper";
import { ReactComponent as Arrow } from "../assets/svgs/arrow-left.svg";

const Confirmation = () => {
  return (
    <PageWrapper>
      <section className="bg-white lg:py-[80px] p-6  lg:pt-[73px] pt-[80px] text-appBlack ">
        <div className="container mx-auto lg:py-[144px] py-[96px]">
          <div className=" lg:w-[483px] w-full mx-auto text-center">
            <HourGlass className="mx-auto translate-x-[-30px]" />
            <h3 className="mt-[40px] lg:text-[30px] text-[24px] leading-[120%] font-semibold tracking-[-0.33px] ">
              Great!
            </h3>
            <p className="mt-[16px] mb-[40px] lg:text-lg text-base">
              A member of our team will be in touch shortly!
            </p>
            <button className="flex gap-[10px] items-center h-fit mx-auto lg:mt-0 mt-[28px] font-medium">
              <Arrow fill="black" />
              <h5 className="leading-[150%] font-medium">Go back to homepage</h5>
            </button>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Confirmation;
