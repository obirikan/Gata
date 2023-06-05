import React from "react";
import faces from "../../assets/images/faces.png";
const FairAndEthical = () => {
  return (
    <section className="lg:p-[56px] lg:py-[96px] p-0 ">
      <div className="container text-appBlack mx-auto lg:grid grid-cols-2 block gap-[72px] bg-cardHoverBg lg:p-[56px] p-6 pt-[40px] lg:rounded-[24px] rounded-[0px]">
        <div className="">
          <h4 className="font-semibold leading-[150%] text-lg">
            Fair & Ethical
          </h4>
          <h3 className="lg:text-[30px] text-[24px] lg:mb-0 mb-[16px] font-semibold leading-[120%] ">
            AI optimized to remove bias against race, ethnicity and age
          </h3>
          <p className="text-base leading-[150%] mt-[16px]">
            Our deep learning models are trained ethically using large, diverse
            datasets that accurately represent the populations that our clients
            serve. This ensures that our AI accurately reflects the diverse
            demographics of their customers. To further promote fairness, we use
            algorithmic bias mitigation techniques and regularly review and
            audit our training data. Additionally, we work with experts in the
            field and consult with leading privacy bodies such as the
            International Association of Privacy Professionals (IAPP) to ensure
            that the training data is diverse and free of bias.
          </p>
        </div>
        <div className="flex flex-col justify-center lg:mt-0 mt-[40px]">
          <img src={faces} alt="faces" />
        </div>
      </div>
    </section>
  );
};

export default FairAndEthical;
