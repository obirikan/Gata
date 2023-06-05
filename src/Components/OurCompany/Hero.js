import React from "react";

const Hero = () => {
  return (
    <section className="lg:pt-[80px] pt-[32px]  text-appBlack mt-[73px] w-full ">
      <div className="container lg:pb-[30px] mx-auto lg:grid grid-cols-[286px_auto] block gap-[144px] p-6 pt-0">
        <div className="leading-[120%] font-semibold lg:text-[48px] tracking-[1px] text-[32px] lg:mb-0 mb-[16px] lg:text-left text-center">
          <h1>Introducing Rattify</h1>
        </div>
        <div className="leading-[150%] lg:opacity-80 opacity-100  text-base">
          <h3 className="font-bold ">Pioneering a New Era of Digital Verification.</h3>
          At Rattify, our mission is to redefine the way people secure their
          digital identities. As we embarked on this ambitious journey, we
          developed innovative verification solutions and discovered a thriving
          community of individuals and businesses who share our vision for a
          safer and more trustworthy online experience. This incredible
          community constantly inspires us to refine our solutions and to
          provide the highest level of service.
          <br />
          <br />
          We believe that exceptional security and user experience can go hand
          in hand. That's why we invest in cutting-edge technologies and
          industry-leading practices that set us apart. Our commitment is to
          create verification solutions that users can trust, day in and day
          out. As we navigate the ever-evolving digital landscape, we invite you
          to join us on this extraordinary journey to redefine online security
          and empower users across the globe.
        </div>
      </div>
      <div className="company-hero"></div>
    </section>
  );
};

export default Hero;
