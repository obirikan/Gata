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
      <div className="py-[64px] container mx-auto">
        <Rattify fill="white" />
        <div className="mt-[56px]">
          <div className="lg:grid grid-cols-[35%_65%] 2xl:gap-[160px] xl:gap-[80px] md:gap-[30px] block ">
            <div className="">
              <h3 className="font-semibold text-[24px]">
                Sign up for updates on Rattify’s products
              </h3>
              <form>
                <div className="relative z-0 w-full mb-6 group mt-[32px]">
                  <input
                    type="email"
                    name="floating_email"
                    id="floating_email"
                    className="block py-2.5 px-0 w-full text-[20px] text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none  peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_email"
                    className="peer-focus:font-medium absolute text-[20px] text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-appBlue  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    enter email
                  </label>
                  <button className="absolute top-[10px] right-[10px] leading-[120%] text-[20px] font-semibold">submit</button>
                </div>
              </form>
              <div className="mt-45px] flex gap-3 my-[45px]">
                <Twitter />
                <LinkedIn />
                <Youtube />
              </div>
            </div>
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
      </div>
    </footer>
  );
};

export default Footer;
