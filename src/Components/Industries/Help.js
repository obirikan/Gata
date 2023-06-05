import React from "react";

const Help = () => {
  const data = [
    {
      name: "Global Reach",
      number: "16,000+",
      subtitle: "Unrivaled Global Verification",
      text: "Experience the power of our advanced platform, built to accommodate over 16,000+ government-issued IDs from an impressive 195 countries around the world. With a comprehensive reach across 130+ distinct legal jurisdictions and fluency in 150+ languages, our solution sets the standard for global identity verification and seamless user experiences.",
    },
    {
      name: "Lower Costs",
      number: "60%",
      subtitle: "Significant Cost Reduction",
      text: `Transform your business's bottom line with our fully automated verification solutions, designed to deliver an average cost reduction of 60%. Experience the benefits of increased efficiency and streamlined processes, all while maintaining the highest level of security and accuracy in your verification systems."`,
    },
    {
      name: "Digital Forgery Prevention",
      number: "99.9%",
      subtitle: "Exceptional Forgery Detection",
      text: "Unlock the power of our AI-driven solution, engineered to tackle a broad spectrum of digital fakery threats, including deepfakes, pre-recorded videos, digital images, printed photos, and 3D masks. Boasting a remarkable 99.9% accuracy rate, depend on Rattify's pioneering technology for unparalleled protection against digital deception, instilling trust and confidence in your digital landscape.",
    },
  ];
  return (
    <section className="bg-white  text-appBlack lg:p-0 p-6">
      <div className="mx-auto container lg:pt-[96px]">
        <h2 className="font-semibold lg:text-3xl text-2xl leading-[120%] tracking-[-0.33px] lg:mb-[48px] mb-[24px]">
          How Rattify can help your business grow
        </h2>
        <div className="lg:grid grid-cols-3 block  gap-6">
          {data.map((ele, i) => (
            <div
              key={i}
              className="bg-gray-100  flex flex-col lg:p-[20px] p-6 rounded-3xl lg:mb-0 mb-[24px]"
            >
              <h3 className="font-semibold text-xl leading-[120%]">
                {ele.name}
              </h3>
              <div className="bg-white p-6 rounded-xl shadow-industry-card mt-[16px] ">
                <p className="text-[48px]  tracking-[-1px] leading-[120%] industry-text font-semibold">
                  {ele.number}
                </p>
                <p className="font-semibold text-lg leadding-[150%]">
                  {ele.subtitle}
                </p>
                <p
                  dangerouslySetInnerHTML={{
                    __html: ele.text,
                  }}
                  className="text-base leading-[150%]"
                ></p>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:pt-[96px] pt-[48px] ">
          <hr className="bg-appBorder" />
        </div>
      </div>
    </section>
  );
};

export default Help;
