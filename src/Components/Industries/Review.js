import React from "react";
import { ReactComponent as Adobe } from "../../assets/svgs/adobe.svg";
import { ReactComponent as Headspace } from "../../assets/svgs/headspace.svg";
import { ReactComponent as Dropbox } from "../../assets/svgs/dropbox.svg";

const Fintech = () => {
  const data = [
    {
      logo: <Headspace className="mb-[16px]" />,
      style: "pt-0",
      text: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”`,
    },
    {
      logo: <Adobe className="mb-[16px]" />,
      style: "border-b border-t border-appBorder",
      text: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”`,
    },
    {
      logo: <Dropbox className="mb-[16px]" />,
      text: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”`,
    },
  ];
  return (
    <section className="bg-white text-appBlack lg:p-0 p-6 ">
      <div className="mx-auto container lg:py-[72px] ">
        <div className="lg:grid grid-cols-[3fr_4fr] block gap-[96px]">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-3xl leading-[120%] tracking-[-0.33px] font-semibold">
              Our customers have some good things to say about us
            </h2>
            <p className="leading-[150%] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="">
            {data.map((item) => (
              <div className={`py-[24px] ${item.style}`}>
                {item.logo}
                <p className="text-[#414141] leading-[150%]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fintech;
