import React from "react";
const Enterprise = () => {
  return (
    <section className="lg:py-[80px] p-6  mt-[24px] lg:text-appBlack text-white">
      <div className="  container mx-auto lg:bg-appGray  enterprise-bg  lg:px-[40px] lg:py-[72px] p-[40px] rounded-3xl lg:grid grid-cols-[auto_618px_240px] block gap-[40px]">
        <div>
          <p className="tracking-[-1px] leading-[120%] mb-[4px] text-[38px] font-semibold">
            Enterprise
          </p>
          <p className="text-[20px] leading-[120%]  font-semibold">
            Custom plan
          </p>
        </div>
        <div className="text-[18px] leading-150 mt-[24px] lg:mt-0">
          Financial institutions, such as banks and credit card companies,
          depend on our AI solutions to improve fraud detection and prevention,
          streamline operations, enhance customer experiences, and increase
          compliance.
        </div>
        <div className="lg:mt-0 mt-[40px]">
          <a
          href="/talk-to-us"
            // onClick={() => navigate("/talk-to-us")}
            className="w-full block text-center lg:bg-gradient-bg lg:hover:bg-hover-gradient-bg transition-all transition ease-in-out delay-300 duration-300  bg-white lg:text-white text-appBlue  py-[12px] rounded-full font-medium"
          >
            Talk to us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Enterprise;
