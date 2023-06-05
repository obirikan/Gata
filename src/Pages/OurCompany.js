import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Blog from "../Components/OurCompany/Blog";
import Careers from "../Components/OurCompany/Careers";
import Hero from "../Components/OurCompany/Hero";
import RattifyInTheNews from "../Components/OurCompany/RattifyInTheNews";
import WhatWeValue from "../Components/OurCompany/WhatWeValue";
import WhyRattify from "../Components/OurCompany/WhyRattify";
import PageWrapper from "../Layout/PageWrapper";
import { scrollToElement } from "../utils/helpers";

const OurCompany = () => {
  return (
    <PageWrapper>
      <Hero />
      <WhatWeValue />
      {/* <WhyRattify /> */}
      <Blog />
      <RattifyInTheNews />
      <Careers />
    </PageWrapper>
  );
};

export default OurCompany;
