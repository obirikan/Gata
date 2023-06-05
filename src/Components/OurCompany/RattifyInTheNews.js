import React from "react";
import tnyt from "../../assets/images/the-ny-post.png";
import forbes from "../../assets/images/forbes.png";
import tech_crunch from "../../assets/images/tech-crunch.png";
import the_economist from "../../assets/images/the-economist.png";
import { ReactComponent as Arrow } from "../../assets/svgs/arrow-right.svg";

const RattifyInTheNews = () => {
  const news = [
    {
      outlet: "Forbes",
      image: forbes,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      full_story: "",
    },
    {
      outlet: "The Economist",
      image: the_economist,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      full_story: "",
    },
    {
      outlet: "Tech Crunch",
      image: tech_crunch,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      full_story: "",
    },
    {
      outlet: "The New York Times",
      image: tnyt,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      full_story: "",
    },
  ];
  return (
    <section id="press" className="bg-white  text-appBlack  px-6">
      <div className="mx-auto container">
        <div className="flex justify-between items-center lg:mb-[32px]  mb-[24px]">
          <h2 className="font-semibold lg:text-[30px] text-[24px] leading-[120%] tracking-[-0.33px] ">
            Rattify in the news
          </h2>
        </div>
        <div className="lg:grid md:grid sm:grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 block  gap-6">
          {news.map((ele, i) => (
            <div key={i} className="lg:mb-0 mb-[24px] bg-appGray p-6">
              <img className="h-[40px]" src={ele.image} />
              <p className="leading-[150%]  my-[24px]">
                {ele.text}
              </p>
              <button className="w-[52px] h-[44px] bg-appBlack flex justify-center items-center rounded-full">
                <Arrow fill="white" />
              </button>
            </div>
          ))}
        </div>
        <div className="lg:pt-[80px] lg:pb-[48px] pt-[24px] pb-[40px] ">
          <hr className="bg-appBorder" />
        </div>
      </div>
    </section>
  );
};

export default RattifyInTheNews;
