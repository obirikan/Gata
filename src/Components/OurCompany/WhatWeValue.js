import React from "react";
import { ReactComponent as Bullet } from "../../assets/svgs/company-bullet.svg";
const WhatWeValue = () => {
  const data = [
    {
      icon: <Bullet />,
      title: "Trust",
      text: "Rattify builds confidence in the digital realm by providing reliable and secure verification solutions. Our unwavering commitment to trust ensures that users can navigate the online world with peace of mind, knowing their digital identities are protected with the highest standards of security.",
    },
    {
      icon: <Bullet />,
      title: "Simplicity",
      text: "Our dedication to simplicity drives the development of user-friendly solutions that empower individuals and businesses alike. Rattify seamlessly integrates cutting-edge technology into everyday life, making digital verification accessible and effortless for all.",
    },
    {
      icon: <Bullet />,
      title: "Innovation",
      text: "At Rattify, we believe in pushing the boundaries of technology to shape a better future. Our passion for innovation fuels our pursuit of groundbreaking verification methods, transforming the way people secure their digital identities and setting new benchmarks for online security.",
    },
  ];
  return (
    <section className="bg-white  text-appBlack  px-6">
      <div className="mx-auto container lg:pt-[64px] pt-[40px]">
        <h2 className="font-semibold lg:text-[30px] text-[24px] leading-[120%] tracking-[-0.33px] lg:mb-[48px] mb-[24px]">
          What we value
        </h2>
        <div className="lg:grid grid-cols-3 block  gap-6">
          {data.map((ele, i) => (
            <div
              key={i}
              className="bg-appGray  flex flex-col p-6 lg:mb-0 mb-[24px]"
            >
              {ele.icon}
              <h6 className="font-semibold leading-[120%] text-[20px] my-[24px]">
                {ele.title}
              </h6>
              <p className="text-base leading-[150%]">{ele.text}</p>
            </div>
          ))}
        </div>
        <div className="lg:pt-[64px] lg:pb-[48px] pt-[24px] pb-[40px] ">
          <hr className="bg-appBorder" />
        </div>
      </div>
    </section>
  );
};

export default WhatWeValue;
