import React from "react";
import PageWrapper from "../Layout/PageWrapper";
import Hero from "../Components/Industries/Hero";
import Review from "../Components/Industries/Review";
import Help from "../Components/Industries/Help";
import Forms from "../Components/Industries/Forms";
import { ReactComponent as Wallet } from "../assets/svgs/wallet.svg";
import { ReactComponent as Government } from "../assets/svgs/government.svg";
import { ReactComponent as Healthcare } from "../assets/svgs/healthcare.svg";
import { ReactComponent as HR } from "../assets/svgs/hr.svg";
import { ReactComponent as Telecommunications } from "../assets/svgs/telecom.svg";
import { ReactComponent as Travel } from "../assets/svgs/travel.svg";
import { useSearchParams } from "react-router-dom";

const Industries = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);

  const data = [
    {
      type: "fintech",
      illustration: <Wallet />,
      title: "FINTECH",
      text: "Secure your financial institution with our identity verification solutions.",
      subtext: "Financial institutions, such as banks and credit card companies, depend on our AI solutions to improve fraud detection and prevention, streamline operations, enhance customer experiences, and increase compliance.",
    },
    {
      type: "government",
      illustration: <Government />,
      title: "GOVERNMENT",
      text: "Build trustworthy government services and programs with IDV",
      subtext: "Government agencies and departments rely on Rattify’s identity verification solutions to improve security, streamline operations, enhance citizen experiences, and increase compliance.",
    },
    {
      type: "healthcare",
      illustration: <Healthcare />,
      title: "HEALTHCARE",
      text: "Ensure patient safety with seamless IDV solutions for telemedicine and virtual health",
      subtext: "Healthcare organisations use Rattify services to verify the identity of patients, protect against medical identity theft, improve patient safety, streamline operations, enhance patient experiences, and increase compliance.",
    },
    {
      type: "hr-management",
      illustration: <HR />,
      title: "HR MANAGEMENT",
      text: "A must-have for effortless remote hiring and verification in HR",
      subtext: "HR teams and staffing firms use our solutions to verify the identity of job applicants and employees, and comply with employment verification regulations.",
    },
    {
      type: "travel-&-transportation",
      illustration: <Travel />,
      title: "TRAVEL & TRANSPORTATION",
      text: "Build smooth and secure identity authentication workflows for travel and transportation",
      subtext: "Travel and transportation companies use Rattify to verify the identity of travellers and ensure compliance with security and regulatory requirements",
    },
    {
      type: "telecommunications",
      illustration: <Telecommunications />,
      title: "TELECOMMUNICATIONS",
      text: "Expand your telecommunications user base with confidence through our IDV solutions",
      subtext: "Telecommunications companies rely on Rattify to verify the identity of customers when they sign up for new accounts or services and prevent fraudulent or unauthorised use of their networks.",
    },
  ];

  let current = data.filter((ele) => ele.type == searchParams.get("type"))[0] ??   {
    type: "fintech",
    illustration: <Wallet />,
    title: "FINTECH",
    text: "Secure your financial institution with our identity verification solutions.",
    subtext: "Financial institutions, such as banks and credit card companies, depend on our AI solutions to improve fraud detection and prevention, streamline operations, enhance customer experiences, and increase compliance.",
  };

  return (
    <PageWrapper>
      <Hero industry={current} />
      <Help />
      <Review />
      <Forms />
    </PageWrapper>
  );
};

export default Industries;
