import React from "react";
import { ReactComponent as Explore } from "../../assets/svgs/explore-sdk.svg";
import { ReactComponent as DiagonalArrow } from "../../assets/svgs/arrow-top-right.svg";
import { ReactComponent as RightArrow } from "../../assets/svgs/arrow-right.svg";
import { ReactComponent as Beautiful } from "../../assets/svgs/beautiful-ui.svg";
import { ReactComponent as Customizable } from "../../assets/svgs/customizable-workflow.svg";
import { ReactComponent as RoundTheClock } from "../../assets/svgs/round-the-clock.svg";
import code from "../../assets/images/code-sample.png";
const ExploreThePower = () => {
  const data = [
    {
      icon: <Beautiful />,
      title: "Beautiful and modern UI",
      text: "Book a demo",
      link: "/talk-to-us",
      arrowIcon: <RightArrow fill="#1D68CE" />,
    },
    {
      icon: <Customizable />,
      title: "Customizable workflow",
      text: "See Documentation",
      arrowIcon: (
        <DiagonalArrow fill="#1D68CE" className="diagonal-arrow transition" />
      ),
      link: "https://docs.rattify.com/",
    },
    {
      icon: <RoundTheClock />,
      title: "Round-the-clock support",
      text: "Book a demo",
      arrowIcon: <RightArrow fill="#1D68CE" />,
      link: "/talk-to-us",
    },
  ];
  return (
    <section className="lg:py-[96px] p-6 text-appBlack bg-appSecondaryBg">
      <div
        className="container text-appBlack mx-auto relative z-[1]
      "
      >
        <div className="explore-text-bg absolute  right-[-10px] w-[600px] h-[600px] rounded-full z-[-1] lg:block hidden "></div>

        <div className="rounded-3xl lg:grid grid-cols-2 bg-white z-2">
          <div className="lg:p-[56px] p-6">
            <Explore />
            <div className="tracking-[-1px]   lg:mt-[48px] mt-[32px]">
              <h2 className="font-semibold lg:text-[38px] text-[24px]  leading-[120%]">
                Explore the power of our intuitive SDKs
              </h2>
              <p className="leading-[150%]  lg:text-[18px] text-base lg:mt-0 mt-[8px] opacity-[0.8]">
                Streamline your workflow and improve efficiency with our
                all-in-one integration solution. Quickly and easily deploy it
                using our iOS, Android, and web SDKs or through direct API
                integration.
              </p>
              <a
                href="https://docs.rattify.com/"
                className="flex items-center lg:mt-[52px] mt-[36px] w-fit see-doc"
              >
                <span className="mr-[10px] text-base text-appBlue font-medium leading-[150%] ">
                  See Documentation{" "}
                </span>
                <DiagonalArrow
                  fill="#1D68CE"
                  className="transition diagonal-arrow"
                />
              </a>
            </div>
          </div>
          <div className="pr-[56px] lg:flex hidden items-end ml-auto">
            <img src={code} alt="code" />
          </div>
        </div>

        <div className="lg:grid grid-cols-3 gap-6 mt-6">
          <div className="explore-text-bg absolute bottom-[0px] left-[-100px] w-[600px] h-[600px] rounded-full z-[-1] lg:block hidden "></div>

          {data.map((ele, i) => (
            <div
              key={i}
              className="rounded-3xl bg-white lg:py-[40px] lg:px-[56px] p-[24px] lg:mb-0 mb-6"
            >
              {ele.icon}
              <p className="mt-[32px] font-semibold leading-[120%] tracking-[0.33px] lg:text-[30px] text-[24px]">
                {ele.title}
              </p>
              <a
                href={ele.link}
                className="flex items-center lg:mt-[52px] mt-[36px] w-fit sec-doc"
              >
                <span className="mr-[10px] text-base text-appBlue font-medium leading-[150%] ">
                  {ele.text}
                </span>
                {ele.arrowIcon}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreThePower;
