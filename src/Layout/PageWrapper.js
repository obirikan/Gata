import React from "react";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";

const PageWrapper = ({ children }) => {
  return (
    <>
      <Navbar />
        {children}
      <Footer/>
    </>
  );
};

export default PageWrapper;
