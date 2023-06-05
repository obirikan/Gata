import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { ReactComponent as Arrow } from "../../assets/svgs/arrow-right.svg";
import { ReactComponent as Identity } from "../../assets/svgs/identity-verification.svg";
import { ReactComponent as Biometric } from "../../assets/svgs/biometric-authentication.svg";
import { ReactComponent as Kyc } from "../../assets/svgs/kyc-compliance.svg";
import { ReactComponent as Fraud } from "../../assets/svgs/fraud-preventation.svg";
import { ReactComponent as Assisted } from "../../assets/svgs/assisted-image-capture.svg";
import { ReactComponent as Social } from "../../assets/svgs/social-security.svg";
import { ReactComponent as Customer } from "../../assets/svgs/customer-onboarding.svg";
import { ReactComponent as Proof } from "../../assets/svgs/proof-of-address.svg";
import { ReactComponent as Insurance } from "../../assets/svgs/insurance-card.svg";
import { ReactComponent as PPE } from "../../assets/svgs/ppe.svg";

const OurSolutions = () => {
  const cards = [
    {
      icon: <Identity />,
      title: "Identity verification",
      text: "Streamlined end-to-end identity verification.",
      bg: "bg-[#D4EBE9]",
      mt: "mt-[37px]",
      link: "/our-solutions?type=identity-verification",
    },
    {
      icon: <Biometric className="w-[74px] h-[86.69px]" />,
      title: "Biometric authentication",
      text: "Protect your users at all touch points in the customer journey.",
      bg: "bg-[#FCDEE0]",
      mt: "mt-[45px]",
      link: "/our-solutions?type=biometric-authentication",
    },
    {
      icon: <Kyc className="w-[74px] h-[86.69px]" />,
      title: "KYC Compliance",
      text: "Automate and scale KYC compliance to drive down costs.",
      bg: "bg-[#FDF5CE]",
      mt: "mt-[47px]",
      link: "/our-solutions?type=kyc-compliance",
    },
    {
      icon: <Fraud className="w-[74px] h-[86.69px]" />,
      title: "Fraud prevention",
      text: "Protect your users at all touch points in the customer journey.",
      bg: "bg-[#F3F3E8]",
      mt: "mt-[50px]",
      link: "/our-solutions?type=fraud-preventation",
    },
    {
      icon: <Assisted className="w-[74px] h-[86.69px]" />,
      title: "Assisted image capture",
      text: "User-friendly workflow for verification.",
      bg: "bg-[#F8DDD2]",
      mt: "mt-[77px]",
      link: "/our-solutions?type=assisted-image-capture",
    },
    {
      icon: <Social className="w-[74px] h-[86.69px]" />,
      title: "Social security number verification",
      text: "Automate and scale KYC compliance to drive down costs.",
      bg: "bg-[#D2FEE9]",
      mt: "mt-[20px]",
      link: "/our-solutions?type=social-security-number-verification",
    },
    {
      icon: <Customer className="w-[74px] h-[86.69px]" />,
      title: "Customer onboarding",
      text: "Make onboarding seamless and secure for all your users.",
      bg: "bg-[#E0E0F8]",
      mt: "mt-[50px]",
      link: "/our-solutions?type=customer-onboarding",
    },
    {
      icon: <Proof className="w-[74px] h-[86.69px]" />,
      title: "Proof of address verification",
      text: "Automated proof of address authentication.",
      bg: "bg-[#D2DFEB]",
      mt: "mt-[15px]",

      link: "/our-solutions?type=proof-of-address-verification",
    },
    {
      icon: <Insurance className="w-[74px] h-[86.69px]" />,
      title: "Insurance card scan",
      text: "Verify patients and integrate proof of insurance validation into your workflow.",
      bg: "bg-[#F2EDEF]",
      mt: "mt-[50px]",
      link: "/our-solutions?type=insurance-card-scan",
    },
    {
      icon: <PPE className="w-[74px] h-[86.69px]" />,
      title: "PPE Detection",
      text: "Automate the detection of personal protective equipment to prioritise safety.",
      bg: "bg-[#CDECF3]",
      mt: "mt-[48px]",
      link: "/our-solutions?type=ppe-detection",
    },
  ];

  useEffect(() => {
    const arrow_right = document.getElementsByClassName("owl-next");
    const arrow_left = document.getElementsByClassName("owl-prev");
    if (arrow_right) {
      arrow_right[0].childNodes[0].setAttribute("aria-label", "");
      arrow_right[0].childNodes[0].classList.add("custom-next");
      arrow_right[0].childNodes[0].innerHTML = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z" fill="#121212"/>
      </svg>
      `;
    }
    if (arrow_left) {
      arrow_left[0].childNodes[0].setAttribute("aria-label", "");
      arrow_left[0].childNodes[0].classList.add("custom-prev");
      arrow_left[0].childNodes[0].innerHTML = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.52398 6.16664H13.6673V7.83331H3.52398L7.99398 12.3033L6.81565 13.4816L0.333984 6.99998L6.81565 0.518311L7.99398 1.69664L3.52398 6.16664Z" fill="#121212"/>
      </svg>
      
      `;
    }
  }, []);

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
    <section className="text-appBlack lg:py-[64px]">
      <h2 className="font-bold text-3xl text-center">Our solutions</h2>

      <div className="container mx-auto lg:pt-[40px] pt-[24px]">
        <OwlCarousel
          className="owl-theme p-6 pt-0" //p-6
          margin={24}
          nav
          responsive={responsive}
        >
          {cards.map((ele, i) => (
            <div
              key={i}
              className={`rounded-3xl p-8 lg:w-[384px] w-full pl-6  ${ele.bg}`}
            >
              {ele.icon}
              <div className={`${ele.mt}`}>
                <h6 className="font-semibold leading-[140%] text-2xl ">
                  {ele.title}
                </h6>
                <p>{ele.text}</p>
              </div>
              <a
                href={ele.link}
                className="flex gap-[10px] items-center h-fit lg:mt-[36px] mt-[28px] font-medium "
              >
                <h5 className="leading-[150%] font-medium">Go to product</h5>
                <Arrow fill="black" />
              </a>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default OurSolutions;
