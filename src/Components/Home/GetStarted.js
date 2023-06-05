import React from "react";
import { ReactComponent as Arrow } from "../../assets/svgs/arrow-right.svg";
import build from "../../assets/images/build-with-rattify.png";
import mobile from "../../assets/images/build-with-rattify-mobile.png";
const GetStarted = () => {
  return (
    <section className="text-appBlack px-6 lg:p-0">
      <div className="container mx-auto lg:py-[72px] py-[40px] ">
        <div className="lg:grid grid-cols-2 gap-6 block">
          <div className="">
            <img src={build} alt="build with rattify" className="sm:block hidden" />
            <img src={mobile} alt="build with rattify mobile image" className="sm:hidden block w-full"/>
          </div>
          <div className="lg:p-[56px] p-0 lg:mt-0 mt-[48px]">
            <h3 className="mb-[16px] font-semibold leading-[120%] tracking-[-0.33px] text-[30px]">
              Get started
            </h3>
            <p className="text-lg leading-[150%] opacity-80">
              Our team of experts are ready to help you build the best ID
              verification solution that your business needs to onboard real
              customers faster and ward off identity fraud.
            </p>
            <a
              type="button"
              href="/talk-to-us"
              className="text-white w-fit  flex items-center gradient-bg leading-[150%] font-medium mt-[44px] rounded-lg  px-5 py-2.5 text-center  md:mr-0 "
            >
              I am interested
              <Arrow fill="#fff" className="ml-[10px]"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
