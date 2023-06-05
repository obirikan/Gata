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
    },
    {
      title: "KYC Compliance",
      link: "/our-solutions?type=kyc-compliance",
    },
    {
      title: "Fraud Prevention",
      link: "/our-solutions?type=fraud-preventation",
    },
    {
      title: "Assisted Image Capture",
      link: "/our-solutions?type=assisted-image-capture",

    },
    {
      title: "Social Security Number Verification",
      link: "/our-solutions?type=social-security-number-verification",

    },
    {
      title: "Customer Onboarding",
      link: "/our-solutions?type=customer-onboarding",

    },
    {
      title: "Proof of Address Verification",
      link: "/our-solutions?type=proof-of-address-verification",
    },
    {
      title: "Insurance Card Scan",
      link: "/our-solutions?type=insurance-card-scan",
    },
    {
      title: "PPE Detection",
      link: "/our-solutions?type=ppe-detection",
    },
  ];

  const industries = [
    {
     title: "Fintech",
     link: "/industries?type=fintech",
    },
    {
     title: "Government",
     link: "/industries?type=government",
    },
    {
     title: "Healthcare",
     link: "/industries?type=healthcare",
    },
    {
     title: "HR Management",
     link: "/industries?type=hr-management",
    },
    {
     title: "Travel & Transportation",
     link: "/industries?type=travel-%26-transportation",
    },
    {
     title: "Telecommunications",
     link: "/industries?type=telecommunications",
    },
  ];

  const others = [
    {
     title: "Pricing Plans",
      link: "/pricing",
    },
    {
     title: "About the Company",
      link: "/our-company",
    },
    {
     title: "Why Rattify?",
      link: "/our-company#why-rattify",
    },
    {
     title: "Blog",
      link: "/our-company#blog",
    },
    {
     title: "Press",
      link: "/our-company#press",
    },
    {
     title: "Careers",
      link: "/our-company#careers",
    },
    {
     title: "For Developers",
      link: "https://docs.rattify.com",
    },
    {
     title: "Contact Us",
      link: "/our-company#talk-to-us",
    },
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
