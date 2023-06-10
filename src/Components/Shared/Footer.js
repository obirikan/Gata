import React from "react";
import { ReactComponent as Rattify } from "../../assets/svgs/rattify-logo.svg";
import { ReactComponent as Twitter } from "../../assets/svgs/twitter.svg";
import { ReactComponent as LinkedIn } from "../../assets/svgs/linkedin.svg";
import { ReactComponent as Youtube } from "../../assets/svgs/youtube.svg";

const Footer = () => {
  const solutions = [
    {
      title: "Identity Verification",
      link: "/our-solutions?type=identity-verification",
    },
    {
      title: "Biometric Authentication",
      link: "/our-solutions?type=biometric-authentication",
    }
  ];

  const industries = [
    {
     title: "Fintech",
     link: "/industries?type=fintech",
    },
    {
     title: "Government",
     link: "/industries?type=government",
    }
  ];

  const others = [
    {
     title: "Pricing Plans",
      link: "/pricing",
    },
    {
     title: "About the Company",
      link: "/our-company",
    }
  ];
  return (
    <footer className="bg-appBlack text-white px-6 ">
      {/* <div className="py-[64px] container mx-auto"> */}
        {/* <Rattify fill="white" /> */}
        <div className="mt-[56px]">
          <div className="lg:grid grid-cols-[35%_65%] 2xl:gap-[160px] xl:gap-[80px] md:gap-[30px] block ">
            <div className="lg:grid grid-cols-3 lg:gap-[40px] gap-[20px] block">
              <div className="">
                <h3 className="leading-[150%] text-sm font-semibold mb-[22px]">
                  OUR SOLUTIONS
                </h3>
                <ul>
                  {solutions.map((ele, i) => (
                    <li key={i} className="opacity-[0.72] leading-[150%] text-sm mb-[10px]">
                      <a href={ele.link}>{ele.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:mt-0 mt-[48px]">
                <h3 className="leading-[150%] text-sm font-semibold mb-[22px]">
                  INDUSTRIES
                </h3>
                <ul>
                  {industries.map((ele, i) => (
                    <li key={i} className="opacity-[0.72] leading-[150%] text-sm mb-[10px]">
                      <a href={ele.link}>{ele.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:mt-0 mt-[48px]">
                <h3 className="leading-[150%] text-sm font-semibold mb-[22px]">
                  OTHERS
                </h3>
                <ul>
                  {others.map((ele, i) => (
                    <li key={i} className="opacity-[0.72] leading-[150%] text-sm mb-[10px]">
                      <a href={ele.link}>{ele.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
