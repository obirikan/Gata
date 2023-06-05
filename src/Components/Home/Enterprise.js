import React from "react";
import hipaa from "../../assets/images/hipaa.png";
import gpdr from "../../assets/images/gdpr.png";
import aicpa from "../../assets/images/aicpa.png";
import iso from "../../assets/images/iso.png";
import wcag from "../../assets/images/wcag.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Enterprise = () => {
  const companies = [
    {
      image: hipaa,
      text: "HIPAA",
    },
    {
      image: gpdr,
      text: "GDPR",
    },
    {
      image: aicpa,
      text: "CCPASOC2 type II",
    },
    {
      image: iso,
      text: "ISO 27001",
    },
    {
      image: wcag,
      text: "WCAG",
    },
  ];

  const responsive = {
    0: {
      items: 1,
    },
    450: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  };

  return (
    <section className="lg:py-[72px] py-[40px]  px-6">
      <div className="container mx-auto">
        <h3 className="leading-[120%] font-semibold text-[30px] tracking-[-0.33px] text-center">
          Enterprise ready security, privacy & compliance posture
        </h3>
        <div className="lg:grid hidden grid-cols-5 mt-[50px]">
          {companies.map((ele, i) => (
            <div key={i} className="">
              <img src={ele.image} alt={ele.text} className="mx-auto" />
              <p className="text-appSecondaryText text-xs font-bold leading-[130%] text-center mt-[12px]">
                {ele.text}
              </p>
            </div>
          ))}
        </div>
        <OwlCarousel
          className="owl-theme enterprise-theme p-6 pt-[48px]  "
          margin={24}
          nav
          responsive={responsive}
        >
          {companies.map((ele, i) => (
            <div
              key={i}
              className="w-fit
            mx-auto"
            >
              <img
              width="50px"
                src={ele.image}
                alt={ele.text}
                className=" mx-auto w-[50px_!important] h-[50px]"
              />
              <p className="text-appSecondaryText text-xs font-bold leading-[130%] text-center mt-[12px] mb-[30px]">
                {ele.text}
              </p>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Enterprise;
