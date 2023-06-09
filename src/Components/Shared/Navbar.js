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
      <nav id="navbar" className="lg:px-6 lg:py-0  lg:h-[84px] py-6   fixed w-full z-20 top-0 left-0   text-appBlack">
        <div className="container flex flex-wrap items-center justify-between mx-auto h-full bg-#355e3b ">
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
<ul className="flex flex-col h-full mt-4 border rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0 lg:h-full min-h-auto max-h-[calc(100vh_-_84px)] nav-list
    sm:bg-355e3b
    lg:bg-#355e3b"
>


            <li className="lg:flex block items-center gap-2 our-solutions nav-link lg:w-auto w-full lg:px-0 p-0 lg:static relative">
  <div className="lg:p-[12px_16px]  p-[16px_24px] flex items-center lg:justify-start justify-between w-full title-icon ">
    <a
      href="/our-solutions"
      className="block lg:pl-3 lg:pr-4 lg:font-normal font-semibold lg:text-base text-[18px] "
    >
      Economy
    </a>
    <button
      onClick={toggleSolutions}
      type="button"
    >
      <Plus fill="#121212" className="block lg:hidden" />
    </button>
  </div>
  <div
    ref={solutionsMenuRef}
    id="our-solutions-menu"
    className="w-full left-0 hidden bg-white lg:border lg:absolute lg:top-full top-auto z-50 mt-0"
  >
    <div className="flex justify-center items-center py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 container mx-auto overflow-y-auto px-4 h-md">
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
                <button className="ml-1" onClick={() => toggleDropdown(i)}>
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
              <div className="absolute w-full z-50 top-full left-0 ">
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




<li className="lg:flex block items-center gap-2 our-solutions nav-link lg:w-auto w-full lg:px-0 p-0 lg:static relative">
  <div className="lg:p-[12px_16px] p-[16px_24px] flex items-center lg:justify-start justify-between w-full title-icon rounded-lg">
    <a
      href="/our-solutions"
      className="block lg:pl-3 lg:pr-4 lg:font-normal font-semibold lg:text-base text-[18px] rounded"
    >
      Tokens
    </a>
    <button
      // onClick={toggleSolutions}
      type="button"
    >
      <Plus fill="#121212" className="block lg:hidden" />
    </button>
  </div>
  <div
    // ref={solutionsMenuRef}
    id="our-solutions-menu"
    className="w-full left-0 hidden bg-white lg:border lg:absolute lg:top-full top-auto z-50 mt-1"
  >
    <div className="flex justify-center items-center py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 container mx-auto overflow-y-auto px-4 h-md">
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
                <button className="ml-1" onClick={() => toggleDropdown(i)}>
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
              <div className="absolute w-full z-50 top-full left-0 ">
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


<li className="lg:flex block items-center gap-2 our-solutions nav-link lg:w-auto w-full lg:px-0 p-0 lg:static relative">
  <div className="lg:p-[12px_16px] p-[16px_24px] flex items-center lg:justify-start justify-between w-full title-icon rounded-lg">
    <a
      href="/our-solutions"
      className="block lg:pl-3 lg:pr-4 lg:font-normal font-semibold lg:text-base text-[18px] rounded"
    >
      Partnerships
    </a>
    <button
      // onClick={toggleSolutions}
      type="button"
    >
      <Plus fill="#121212" className="block lg:hidden" />
    </button>
  </div>
  <div
    // ref={solutionsMenuRef}
    id="our-solutions-menu"
    className="w-full left-0 hidden bg-white lg:border lg:absolute lg:top-full top-auto z-50 mt-1"
  >
    <div className="flex justify-center items-center py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 container mx-auto overflow-y-auto px-4 h-md">
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
                <button className="ml-1" onClick={() => toggleDropdown(i)}>
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
              <div className="absolute w-full z-50 top-full left-0 ">
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


<li className="lg:flex block items-center gap-2 our-solutions nav-link lg:w-auto w-full lg:px-0 p-0 lg:static relative">
  <div className="lg:p-[12px_16px] p-[16px_24px] flex items-center lg:justify-start justify-between w-full title-icon rounded-lg">
    <a
      href="/our-solutions"
      className="block lg:pl-3 lg:pr-4 lg:font-normal font-semibold lg:text-base text-[18px] rounded"
    >
      Develop
    </a>
    <button
      // onClick={toggleSolutions}
      type="button"
    >
      <Plus fill="#121212" className="block lg:hidden" />
    </button>
  </div>
  <div
    // ref={solutionsMenuRef}
    id="our-solutions-menu"
    className="w-full left-0 hidden bg-white lg:border lg:absolute lg:top-full top-auto z-50 mt-1"
  >
    <div className="flex justify-center items-center py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 container mx-auto overflow-y-auto px-4 h-md">
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
                <button className="ml-1" onClick={() => toggleDropdown(i)}>
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
              <div className="absolute w-full z-50 top-full left-0 ">
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

<li className="lg:flex block items-center gap-2 our-solutions nav-link lg:w-auto w-full lg:px-0 p-0 lg:static relative">
  <div className="lg:p-[12px_16px] p-[16px_24px] flex items-center lg:justify-start justify-between w-full title-icon rounded-lg">
    <a
      href="/our-solutions"
      className="block lg:pl-3 lg:pr-4 lg:font-normal font-semibold lg:text-base text-[18px] rounded"
    >
      Other
    </a>
    <button
      // onClick={toggleSolutions}
      type="button"
    >
      <Plus fill="#121212" className="block lg:hidden" />
    </button>
  </div>
  <div
    // ref={solutionsMenuRef}
    id="our-solutions-menu"
    className="w-full left-0 hidden bg-white lg:border lg:absolute lg:top-full top-auto z-50 mt-1"
  >
    <div className="flex justify-center items-center py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 container mx-auto overflow-y-auto px-4 h-md">
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
                <button className="ml-1" onClick={() => toggleDropdown(i)}>
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
              <div className="absolute w-full z-50 top-full left-0 ">
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
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
