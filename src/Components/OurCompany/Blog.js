import React from "react";
import photo from "../../assets/images/default-blog-image.png";
import { ReactComponent as Arrow } from "../../assets/svgs/arrow-right.svg";
const Blog = () => {
  const posts = [
    {
      title: "Our deep learning models are trained ethically using large.",
      date: "Feb 12, 2023",
      image: photo,
    },
    {
      title: "Our deep learning models are trained ethically using large.",
      date: "Feb 12, 2023",
      image: photo,
    },
    {
      title: "Our deep learning models are trained ethically using large.",
      date: "Feb 12, 2023",
      image: photo,
    },
    {
      title: "Our deep learning models are trained ethically using large.",
      date: "Feb 12, 2023",
      image: photo,
    },
  ];
  return (
    <section id="blog" className="bg-white  text-appBlack  px-6">
      <div className="mx-auto container">
        <div className="flex justify-between items-center lg:mb-[32px]  mb-[24px]">
          <h2 className="font-semibold lg:text-[30px] text-[24px] leading-[120%] tracking-[-0.33px] ">
            Blog
          </h2>
          <button className="flex gap-[10px] items-center">
            <h5 className="leading-[150%] font-medium">View all blogs</h5>
            <Arrow fill="black"/>
          </button>
        </div>
        <div className="lg:grid md:grid sm:grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 block  gap-6">
          {posts.map((ele, i) => (
            <div key={i} className="lg:mb-0 mb-[24px]">
              <img className="w-full h-[260px]" src={ele.image} />
              {ele.icon}
              <div className="mt-[8px] mb-[4px] opacity-80">
                <p className="leading-[130%] font-semibold">{ele.title}</p>
                <p className="text-[14px] leading-[150%] ">{ele.date}</p>
              </div>
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

export default Blog;
