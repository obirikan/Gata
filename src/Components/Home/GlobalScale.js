import React from "react";

const GlobalScale = () => {
  const stats = [
    {
      number: "32,000+",
      text: "Metric description",
      className: "text-left",
    },
    {
      number: "32,000+",
      text: "Metric description",
      className: "text-center",
    },
    {
      number: "32,000+",
      text: "Metric description",
      className: "text-right",
    },
  ];
  return (
    <section className="lg:p-[56px] p-6 py-[96px] bg-cardHoverBg map-bg text-white">
      <div className="container mx-auto">
        <h4 className="font-semibold leading-[150%] text-lg">Global Scale</h4>
        <h3 className="text-[30px] font-semibold leading-[120%] ">
          Bringing the world to your business, wherever you are.{" "}
        </h3>
        <div className="mt-[64px]">
          <div className="lg:grid grid-cols-3 gap-6 block">
            <div className="">
              <div className="">
                <div className="w-[56px] h-[8px] bg-appGreen mb-[8px]"></div>
                <p
                  className={`text-left tracking-[-1px] leading-[120%] text-[38px] font-semibold `}
                >
                  16,000+
                </p>
                <p className="">Expansive Coverage</p>
              </div>
            </div>
            <div className="lg:my-0 my-[80px]">
              <div className="lg:mx-auto m-0 w-fit">
                <div className="w-[56px] h-[8px] bg-appGreen mb-[8px]"></div>
                <p
                  className={`text-left tracking-[-1px] leading-[120%] text-[38px] font-semibold `}
                >
                  150+
                </p>
                <p className="">Comprehensive Language Support</p>
              </div>
            </div>
            <div className="">
              <div className="lg:ml-auto m-0 w-fit">
                <div className="w-[56px] h-[8px] bg-appGreen mb-[8px]"></div>
                <p
                  className={`text-left tracking-[-1px] leading-[120%] text-[38px] font-semibold `}
                >
                  99.997%
                </p>
                <p className="">Superior Matching Precision</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalScale;
