import React from "react";
import Landing from "../Components/OurSolutions/Landing";
import PageWrapper from "../Layout/PageWrapper";
import { useSearchParams } from "react-router-dom";

export const OurSolutions = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const data = [
    {
      type: "identity-verification",
      image: <div className="card-hero"></div>,
      title: "Identity verification",
      subtext: (
        <p className="leading-[150%]">
          Transform your identity verification process with our integrated
          solution, designed to provide a smooth and secure user experience.
          <br />
          <br />
          Our advanced technology offers customisable interfaces, clear
          instructions, and robust security, catering to the needs of both users
          and organisations.
        </p>
      ),
    },
    {
      title: "Biometric authentication",
      type: "biometric-authentication",
      image: <div className="biometric-hero"></div>,
      subtext: (
        <p className="leading-[150%]">
          Experience the future of user authentication with our state-of-the-art
          Biometric Authentication technology.
          <br />
          <br />
          Our advanced AI-driven solution provides unparalleled accuracy,
          meeting international standards for online identity verification
          without compromising access for hard-to-identify groups.
        </p>
      ),
    },

    {
      title: "KYC Compliance",
      type: "kyc-compliance",
      image: <div className="kyc-hero"></div>,
      subtext: (
        <p className="leading-[150%]">
          Revolutionise your KYC processes with our comprehensive compliance
          solution that automates and scales according to your requirements.
          <br />
          <br />
          Our cutting-edge technology reduces operational costs and simplifies
          compliance management, providing a seamless experience.
        </p>
      ),
    },

    {
      title: "Fraud prevention",
      type: "fraud-preventation",
      image: <div className="fraud-hero"></div>,
      subtext: (
        <p className="leading-[150%]">
          Stay one step ahead of identity fraud with our innovative Fraud
          Prevention solution, harnessing the power of AI and machine learning
          to detect and prevent fraudulent activities.
          <br />
          <br />
          Our advanced algorithms analyse data patterns, ensuring a secure
          environment for your users and business.
        </p>
      ),
    },
    {
      title: "Assisted image capture",
      type: "assisted-image-capture",
      image: <div className="assisted-hero"></div>,
      subtext: (
        <p className="leading-[150%]">
          Empower your users with our intuitive Assisted Image Capture system,
          designed to make the ID verification process a breeze.
          <br />
          <br />
          Leveraging advanced AI, our solution offers step-by-step assistance,
          ensuring accuracy and user satisfaction.
        </p>
      ),
    },
    {
      title: "Social Security Number Verification",
      type: "social-security-number-verification",
      image: <div className="social-hero"></div>,
      subtext: (
        <p className="leading-[150%]">
          Effortlessly verify your users' social security numbers with our
          advanced technology, reducing human error and ensuring secure
          transactions.
          <br />
          <br />
          Our innovative approach guarantees a seamless experience for your
          users while maintaining data accuracy.
        </p>
      ),
    },

    {
      title: "Customer onboarding",
      type: "customer-onboarding",
      image: <div className="customer-hero"></div>,
      subtext: (
        <p className="leading-[150%]">
          Transform your customer onboarding experience with our streamlined
          solution designed to prioritise both security and user experience.
          <br />
          <br />
          Drive user engagement and trust while safeguarding sensitive
          information with our advanced onboarding system.
        </p>
      ),
    },

    {
      title: "Proof of address verification",
      type: "proof-of-address-verification",
      image: <div className="proof-hero"></div>,
      subtext: (
        <p className="leading-[150%]">
          Authenticate users' addresses with minimal hassle using our automated
          proof of address solution.
          <br />
          <br />
          Combining cutting-edge technology and user-centric design, our system
          simplifies the process while maintaining high levels of security and
          accuracy.
        </p>
      ),
    },

    {
      title: "Insurance card scan",
      type: "insurance-card-scan",
      image: <div className="insurance-hero"></div>,
      subtext: (
        <p className="leading-[150%]">
          Accelerate your insurance verification process with our advanced
          Insurance Card Scan technology.
          <br />
          <br />
          Our solution offers rapid and secure extraction of relevant
          information, ensuring accuracy and a smooth experience for both
          businesses and users.
        </p>
      ),
    },

    {
      title: "PPE Detection",
      type: "ppe-detection",
      image: <div className="ppe-hero"></div>,
      subtext: (
        <p className="leading-[150%]">
          Enhance workplace safety with our cutting-edge PPE Detection solution,
          leveraging AI technology to accurately monitor and identify the usage
          of personal protective equipment.
          <br />
          <br />
          Ensure compliance with safety regulations and protect your employees
          in real-time.
        </p>
      ),
    },
  ];
  let current = data.filter(
    (ele) => ele.type == searchParams.get("type")
  )[0] ?? {
    type: "identity-verification",
    image: <div className="card-hero"></div>,
    title: "Identity verification",
    subtext: (
      <p className="leading-[150%]">
        Transform your identity verification process with our integrated
        solution, designed to provide a smooth and secure user experience.
        <br />
        <br />
        Our advanced technology offers customisable interfaces, clear
        instructions, and robust security, catering to the needs of both users
        and organisations.
      </p>
    ),
  };
  return (
    <PageWrapper>
      <Landing solution={current} />
    </PageWrapper>
  );
};
