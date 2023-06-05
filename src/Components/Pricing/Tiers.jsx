import React from "react";
import { ReactComponent as NotAvailable } from "../../assets/svgs/not-available.svg";
import { ReactComponent as Available } from "../../assets/svgs/available.svg";

const Tiers = () => {
  const essentials = {
    title: "Essential",
    text: "Sub-text description or not",
    price: "$2",
    features: [
      ...new Array(7).fill({
        feature: "Feature",
        icon: <Available />,
        available: true,
      }),
      ...new Array(3).fill({
        feature: "Feature",
        icon: <NotAvailable />,
        available: false,
      }),
    ],
  };
  const premium = {
    title: "Premium",
    text: "Sub-text description or not",
    price: "$2",
    features: [
      ...new Array(7).fill({
        feature: "Feature",
        icon: <Available />,
        available: true,
      }),
      ...new Array(3).fill({
        feature: "Feature",
        icon: <NotAvailable />,
        available: false,
      }),
    ],
  };

  const plus = {
    title: "Plus",
    text: "Sub-text description or not",
    price: "$2",
    features: [
      ...new Array(7).fill({
        feature: "Feature",
        icon: <Available />,
        available: true,
      }),
      ...new Array(3).fill({
        feature: "Feature",
        icon: <NotAvailable />,
        available: false,
      }),
    ],
  };

  return (
    <section className="lg:pb-[80px] p-6">
      <div className="container mx-auto lg:grid grid-cols-3 block items-end  gap-10 text-appBlack">
        {/* essentials */}
        <div className="p-8 bg-appGray rounded-2xl h-fit">
          <h3 className="text-[38px] tracking-[1px] font-semibold text-appBlack leading-[120%] mb-[10px] ">
            {essentials.title}
          </h3>
          <p className="leading-150 mb-6">{essentials.text}</p>
          <p>
            <span className="text-[30px] font-semibold  tracking-[-0.33px] mr-[4px]">
              {essentials.price}
            </span>
            per verification
          </p>
          <ul className="mt-6 mb-[40px]">
            {essentials.features.map((ele, i) => (
              <li
                key={i}
                className={`mb-[8px] flex items-center leading-150 ${
                  ele.available ? "opacity-100" : "opacity-50"
                }`}
              >
                <span className="mr-[8px]">{ele.icon}</span>
                {ele.feature}
              </li>
            ))}
          </ul>
          <a
            href="/talk-to-us"
            className="gradient-bg text-center block w-full py-[12px] text-white rounded-full"
          >
            Talk to us
          </a>
        </div>

        {/* plus */}
        <div className=" bg-appGray rounded-2xl border-2 lg:my-0 my-6 border-appGold">
          <div className="bg-appGold py-[12px]  text-appBlack rounded-t-[14px]  text-center font-semibold ">
            RECOMMENDED
          </div>
          <div className="p-8 pt-[24px]">
            <h3 className="text-[38px] tracking-[1px] font-semibold text-appBlack leading-[120%] mb-[10px] ">
              {plus.title}
            </h3>
            <p className="leading-150 mb-6">{plus.text}</p>
            <p>
              <span className="text-[30px] font-semibold  tracking-[-0.33px] mr-[4px]">
                {plus.price}
              </span>
              per verification
            </p>
            <ul className="mt-6 mb-[40px]">
              {plus.features.map((ele, i) => (
                <li
                  key={i}
                  className={`mb-[8px] flex items-center leading-150 ${
                    ele.available ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <span className="mr-[8px]">{ele.icon}</span>
                  {ele.feature}
                </li>
              ))}
            </ul>
            <a
              href="/talk-to-us"
              className="gradient-bg text-center block w-full py-[12px] text-white rounded-full"
            >
              Talk to us
            </a>
          </div>
        </div>

        {/* premium */}
        <div className="p-8 bg-appGray rounded-2xl h-fit">
          <h3 className="text-[38px] tracking-[1px] font-semibold text-appBlack leading-[120%] mb-[10px] ">
            {premium.title}
          </h3>
          <p className="leading-150 mb-6">{premium.text}</p>
          <p>
            <span className="text-[30px] font-semibold  tracking-[-0.33px] mr-[4px]">
              {premium.price}
            </span>
            per verification
          </p>
          <ul className="mt-6 mb-[40px]">
            {premium.features.map((ele, i) => (
              <li
                key={i}
                className={`mb-[8px] flex items-center leading-150 ${
                  ele.available ? "opacity-100" : "opacity-50"
                }`}
              >
                <span className="mr-[8px]">{ele.icon}</span>
                {ele.feature}
              </li>
            ))}
          </ul>
          <a
            href="/talk-to-us"
            className="gradient-bg transition-all text-center block w-full py-[12px] text-white rounded-full"
          >
            Talk to us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Tiers;
