import React from "react";

const WhyRattify = () => {
  return (
    <section id="why-rattify" className="text-appBlack">
      <div className="container mx-auto lg:grid grid-cols-[286px_auto] block gap-[144px]  px-6 ">
        <div className="leading-[120%] font-semibold lg:text-[30px] tracking-[1px] text-[24px] lg:mb-0 mb-[16px] ">
          Why Rattify?
        </div>
        <div className="leading-[150%] lg:opacity-80 opacity-100  text-base">
          Our deep learning models are trained ethically using large, diverse
          datasets that accurately represent the populations that our clients
          serve. This ensures that our AI accurately reflects the diverse
          demographics of their customers. To further promote fairness, we use
          algorithmic bias mitigation techniques and regularly review and audit
          our training data.
          <br />
          <br />
          Additionally, we work with experts in the field and consult with
          leading privacy bodies such as the International Association of
          Privacy Professionals (IAPP) to ensure that the training data is
          diverse and free of bias.
        </div>
      </div>
      <div className="lg:pt-[80px] lg:pb-[48px] pt-[40px] pb-[40px] container mx-auto  px-6">
        <hr className="bg-appBorder" />
      </div>
    </section>
  );
};

export default WhyRattify;
