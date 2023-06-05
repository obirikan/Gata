import React from "react";

const Landing = ({ solution }) => {
  return (
    <section className="  text-appBlack mt-[73px] w-full ">
      {/* <div className="solution-hero"></div> */}
      {solution.image}

      <div className="container mx-auto lg:px-0 px-6 mt-[32px] lg:mt-[72px]">
        <div className="lg:w-[588px] mx-auto w-full lg:text-center text-left">
          <h1 className="text-[30px] leading-[120%] tracking-[-0.33px] font-semibold mb-6">
            {solution.title}
          </h1>
          {solution.subtext}
          <a
            href="/talk-to-us"
            className="text-white px-[37px] py-[12px] block w-fit lg:mx-auto  gradient-bg rounded-[8px] mt-[40px] lg:mb-[144px] mb-[72px]"
          >
            Talk to us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landing;
