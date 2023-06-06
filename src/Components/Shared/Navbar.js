import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import rattify from "../../assets/svgs/rattify.svg";
import { ReactComponent as Rattify } from "../../assets/svgs/rattify-logo.svg";

import { ReactComponent as ArrowDown } from "../../assets/svgs/arrow-down.svg";
import { ReactComponent as Identity } from "../../assets/svgs/identity-verification.svg";
import { ReactComponent as Biometric } from "../../assets/svgs/biometric-authentication.svg";
import { ReactComponent as Kyc } from "../../assets/svgs/kyc-compliance.svg";
import { ReactComponent as Fraud } from "../../assets/svgs/fraud-preventation.svg";
import { ReactComponent as Image } from "../../assets/svgs/assisted-image-capture.svg";
import { ReactComponent as Social } from "../../assets/svgs/social-security.svg";
import { ReactComponent as Customer } from "../../assets/svgs/customer-onboarding.svg";
import { ReactComponent as Proof } from "../../assets/svgs/proof-of-address.svg";
import { ReactComponent as Insurance } from "../../assets/svgs/insurance-card.svg";
import { ReactComponent as PPE } from "../../assets/svgs/ppe.svg";
import { ReactComponent as Menu } from "../../assets/svgs/hamburger.svg";
import { ReactComponent as Cancel } from "../../assets/svgs/cancel.svg";
import { ReactComponent as Plus } from "../../assets/svgs/plus.svg";
import { ReactComponent as Minus } from "../../assets/svgs/minus.svg";
const Navbar = () => {
  const solutions = [
    {
      icon: <Identity className="w-[39.41px] h-[48px]" />,
      title: "Identity verification",
      text: "Streamlined end-to-end identify verification.",
      link: "/our-solutions?type=identity-verification",
      dropdown: true,
      dropdownContent: ["Option 1", "Option 2", "Option 3"],
    },
    {
      icon: <Biometric className="w-[39.41px] h-[48px]" />,
      title: "Biometric authentication",
      text: "Protect you users at all touch points in the customer journey.",
      link: "/our-solutions?type=biometric-authentication",
      dropdown: true,
      dropdownContent: ["Option 1", "Option 2", "Option 3"],
    },
    {
      icon: <Kyc className="w-[39.41px] h-[48px]" />,
      title: "KYC Compliance",
      text: "Automate and scale KYC compliance to drive down costs.",
      link: "/our-solutions?type=kyc-compliance",
      dropdown: true,
      dropdownContent: ["Option 1", "Option 2", "Option 3"],
    },
    {
      icon: <Fraud className="w-[39.41px] h-[48px]" />,

      title: "Fraud prevention",
      text: "Prevent identity fraud in your platforms.",
      link: "/our-solutions?type=fraud-preventation",
      dropdown: false,
      dropdownContent: ["Option 1", "Option 2", "Option 3"],
    },
    {
      icon: <Image className="w-[39.41px] h-[48px]" />,
      title: "Assisted image capture",
      text: "User-friendly workflow for verification.",
      link: "/our-solutions?type=assisted-image-capture",
      dropdown: true,
      dropdownContent: ["Option 1", "Option 2", "Option 3"],
    },
    {
      icon: <Social className="w-[39.41px] h-[48px]" />,
      title: "Social Security Number Verification",
      text: "Seamless social security number verification.",
      link: "/our-solutions?type=social-security-number-verification",
      dropdown: true,
      dropdownContent: ["Option 1", "Option 2", "Option 3"],
    }
  ];

  const industries = [
    {
      title: "Fintech",
      text: "Secure your financial institution with our identity verification solutions.",
      link: "/industries?type=fintech",
    },
    {
      title: "Government",
      text: "Build trustworthy government services and programs with IDV.",
      link: "/industries?type=government",
    },
    {
      title: "Healthcare",
      text: "Ensure patient safety with seamless IDV solutions for telemedicine and virtual health.",
      link: "/industries?type=healthcare",
    },
    {
      title: "HR Management",
      text: "A must-have for effortless remote hiring and verification in HR.",
      link: "/industries?type=hr-management",
    },
    {
      title: "Travel & Transportation",
      text: "Build smooth and secure identity authentication workflows for travel and transportation.",
      link: "/industries?type=travel-%26-transportation",
    },
    {
      title: "Telecommunications",
      text: "Expand your telecommunications user base with confidence through our IDV solutions.",
      link: "/industries?type=telecommunications",
    },
  ];

  let mainMenu = useRef(null);
  const solutionsMenuRef = useRef(null);
  const industriesMenuRef = useRef(null);
  const companyMenuRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // useEffect(() => {
  //   menuButton = document.getElementById("menu-button");
  //   mainMenu = document.getElementById("navbar-sticky");
  //   console.log(menuButton);
  // }, []);

  const toggleMenu = () => {
    mainMenu.current.classList.toggle("hidden");
  };

  const toggleSolutions = () => {
    if (solutionsMenuRef) {
      solutionsMenuRef.current.classList.toggle("hidden");
    }
  };

  const toggleIndustries = () => {
    if (industriesMenuRef) {
      industriesMenuRef.current.classList.toggle("hidden");
    }
  };

  const toggleCompany = () => {
    if (companyMenuRef) {
      companyMenuRef.current.classList.toggle("hidden");
    }
  };

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  };

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };


  return (
    <div>
      {/* lg:py-2.5 py-4  */}
      <nav id="navbar" className="bg-white   lg:px-6 lg:py-0  lg:h-[84px] py-6   fixed w-full z-20 top-0 left-0 border-b border-gray-200  text-appBlack">
        <div className="container flex flex-wrap items-center justify-between mx-auto h-full">
          <a href="/" className="flex items-center lg:pl-0 pl-6">
            <Rattify fill="black" />
          </a>
          <div className="md:order-2 gap-5 ">
            <a
              href="#no"
              className="text-white gradient-bg  lg:inline-block hidden focus:ring-4   rounded-lg  px-5 py-2.5 text-center mr-3 md:mr-0 "
            >
              Create An Account 
            </a>
            <button
              onClick={toggleMenu}
              // data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 lg:pr-0 mr-6  text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              // aria-controls="navbar-sticky"
              // aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <Menu />
            </button>
          </div>
          
          <div
            ref={mainMenu}
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 lg:h-full  "
            id="navbar-sticky"
          >
            <ul className="flex flex-col h-full mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0  md:border-0 md:bg-white lg:h-full min-h-auto max-h-[calc(100vh_-_84px)] nav-list">
              <li className="lg:flex block  items-center gap-2  our-solutions nav-link lg:w-auto w-full lg:px-0 p-0  lg:static relative ">
                <div className="lg:p-[12px_16px] p-[16px_24px] flex items-center lg:justify-start justify-between w-full title-icon rounded-lg">
                  <a
                    href="/our-solutions"
                    className="block  lg:pl-3 lg:pr-4 lg:font-normal font-semibold lg:text-base text-[18px] rounded "
                  >
                    Economy
                  </a>
                  {/* <ArrowDown fill="#121212" className="lg:block hidden" /> */}
                  <button
                    onClick={toggleSolutions}
                    type="button"
                    // aria-expanded="false"
                    // aria-controls="our-solutions-menu"
                    // data-collapse-toggle="our-solutions-menu"
                  >
                    {/* <Plus fill="#121212" className="block lg:hidden" /> */}
                  </button>
                </div>


                <div
      ref={solutionsMenuRef}
      id="our-solutions-menu"
      className="w-[100vw] left-0 hidden bg-white lg:border lg:mt-[83px] m-0 lg:absolute lg:top-0 top-[23px] z-50 max-h-[calc(50vh_-_84px)]"
    >
      <div className="flex justify-center items-center py-8">
        <div className="grid grid-cols-3 gap-8 container mx-auto overflow-y-auto px-4">
          {solutions.map((ele, i) => (
            <div
              key={i}
              className={`hover:bg-cardHoverBg rounded-lg border cursor-pointer flex flex-col justify-center items-center ${
                ele.dropdown ? "relative" : ""
              }`}
            >
              <div className="flex items-center p-2">
                <h3 className="font-semibold text-sm text-center">
                  {ele.title}
                </h3>
                {ele.dropdown && (
                  <button
                    className="ml-1"
                    onClick={() => toggleDropdown(i)}
                  >
                    <ArrowDown
                      fill="#121212"
                      className={`w-4 h-4 ${
                        dropdownOpen === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>
              {dropdownOpen === i && ele.dropdown && (
                <div className="absolute w-full z-50 top-full left-0">
                  <ul className="py-2 px-4 bg-white shadow-lg rounded-lg">
                    {ele.dropdownContent.map((option, index) => (
                      <li
                        key={index}
                        className="cursor-pointer py-1 hover:bg-gray-200"
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>

              </li>
              <li className="lg:flex block  items-center gap-2  industries nav-link lg:w-auto w-full lg:px-0 p-0 lg:static relative">
                <div className="lg:p-[12px_16px] p-[16px_24px] flex items-center lg:justify-start justify-between lg:w-auto w-full title-icon rounded-lg  relative">
                  <a
                    href="/industries"
                    className="block  lg:pl-3 lg:pr-4 lg:font-normal font-semibold lg:text-base text-[18px]  rounded  md:hover:bg-transparent   "
                  >
                    Industries
                  </a>
                   <ArrowDown fill="#121212" className="lg:block hidden" /> 
                  <button
                    onClick={toggleIndustries}
                    type="button"
                    // aria-expanded="false"
                    // aria-controls="our-solutions-menu"
                    // data-collapse-toggle="our-solutions-menu"
                  >
                    {/* <Plus fill="#121212" className="block lg:hidden" /> */}
                  </button>
                </div>

                {/* <div
                  ref={industriesMenuRef}
                  id="industries-menu"
                  className="w-[100vw] left-0  hidden  bg-white lg:border lg:mt-[83px] m-0 lg:absolute  lg:top-0 top-[-23px] z-30 "
                >
                  <div className="lg:grid grid-cols-3 gap-8 container mx-auto lg:pt-24">
                    {industries.map((ele, i) => (
                      <a href={ele.link}>
                        <div
                          key={i}
                          className="p-6 mb-5 hover:bg-cardHoverBg lg:rounded-3xl lg:border-none border-b cursor-pointer"
                        >
                          <h3 className="font-semibold text-xl">{ele.title}</h3>
                          <p className="mt-[8px]">{ele.text}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div> */}
              </li>
              <li className="flex items-center lg:hover:bg-cardHoverBg rounded-xl mt-4 mb-4 lg:w-auto w-full cursor-pointer lg:px-0 px-6">
                <Link
                  to="/pricing"
                  className="block  lg:pl-4 lg:pr-4 lg:font-normal font-semibold lg:text-base text-[18px] rounded  md:hover:bg-transparent"
                >
                  Pricing
                </Link>
              </li>
              <li className="lg:flex block items-center gap-2  our-company lg:w-auto w-full lg:nav-link lg:px-0 p-0 lg:relative static">
                <div className="lg:p-[12px_16px] p-[16px_24px] flex items-center lg:justify-start justify-between lg:w-auto w-full title-icon rounded-lg">
                  <a
                    href="/our-company"
                    className="block  lg:pl-3 lg:pr-4 lg:font-normal font-semibold lg:text-base text-[18px] rounded  md:hover:bg-transparent   "
                  >
                    Our Company
                  </a>
                  {/* <ArrowDown fill="#121212" className="lg:block hidden" /> */}
                  <button
                    onClick={toggleCompany}
                    type="button"
                    // aria-expanded="false"
                    // aria-controls="our-solutions-menu"
                    // data-collapse-toggle="our-solutions-menu"
                  >
                    {/* <Plus fill="#121212" className="block lg:hidden" /> */}
                  </button>
                </div>
                {/* <div
                  ref={companyMenuRef}
                  id="our-company-menu"
                  className="lg:w-[200px] w-full left-0  hidden  bg-white lg:border  lg:mt-[83px] m-0 lg:absolute lg:top-0 top-[-23px] z-30 "
                >
                  <ul>
                    <li className="lg:p-3  p-6 border-b">
                      <a
                        className="lg:font-normal lg:text-base font-semibold text-[18px]"
                        href="/our-company#about-rattify"
                      >
                        About Rattify
                      </a>
                    </li>
                    <li className="lg:p-3  p-6 border-b">
                      <a
                        className="lg:font-normal lg:text-base font-semibold text-[18px]"
                        href="/our-company#why-rattify"
                      >
                        Why Rattify
                      </a>
                    </li>

                    <li className="lg:p-3  p-6 border-b">
                      <a
                        className="lg:font-normal lg:text-base font-semibold text-[18px]"
                        href="/our-company#blog"
                      >
                        Blog
                      </a>
                    </li>

                    <li className="lg:p-3  p-6 border-b">
                      <a
                        className="lg:font-normal lg:text-base font-semibold text-[18px]"
                        href="/our-company#press"
                      >
                        Press
                      </a>
                    </li>

                    <li className="lg:p-3  p-6 border-b">
                      <a
                        className="lg:font-normal lg:text-base font-semibold text-[18px]"
                        href="/our-company#careers"
                      >
                        Careers
                      </a>
                    </li>

                    <li className="lg:p-3  p-6 border-b">
                      <a
                        className="lg:font-normal lg:text-base font-semibold text-[18px]"
                        href="/talk-to-us"
                      >
                        Contact us
                      </a>
                    </li>
                  </ul>
                </div> */}
              </li>
              <li className="flex items-center lg:hover:bg-cardHoverBg rounded-xl mt-4 mb-4 cursor-pointer lg:w-auto w-full lg:px-0 px-6">
                <a
                  href="https://docs.rattify.com"
                  className="block  lg:pl-4 lg:pr-4 lg:font-normal font-semibold  lg:text-base text-[18px] rounded  md:hover:bg-transparent  "
                >
                  For Developers
                </a>
              </li>
              <li className="lg:hidden flex items-center lg:hover:bg-cardHoverBg rounded-xl mt-4 mb-4 cursor-pointer lg:px-0 px-6">
                <a
                  href="https://dashboard.rattify.com/login"
                  className="block  lg:pl-4 lg:pr-4 lg:font-normal font-semibold  text-[18px] rounded  md:hover:bg-transparent  "
                >
                  Sign in
                </a>
              </li>
              <li className="lg:hidden flex items-center lg:hover:bg-cardHoverBg rounded-xl mt-4 mb-4 cursor-pointer lg:px-0 px-6">
                <a
                  href="/talk-to-us"
                  className="text-white gradient-bg  w-full  focus:ring-4   rounded-lg  px-5 py-2.5 text-center mr-3 md:mr-0 "
                >
                  Talk to us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
