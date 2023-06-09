import React from "react";
import { useNavigate } from "react-router-dom";
import hero from "../../assets/images/hero-image.png";
import  map  from "../../assets/images/map.png";
const Hero = () => {
  const navigate = useNavigate();
  return (
<section className="bg-#355e3b lg:py-[80px] p-6 mt-[53px]">
<div className="flex items-center justify-center">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="py-2 pl-8 pr-4 rounded-lg searchinput text-black outline-none sm:w-5 md:w-80"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a4 4 0 11-8 0 4 4 0 018 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 20l-4.35-4.35"
          />
        </svg>
      </div>
    </div>
    {/* image  */}
    <div className="flex items-center justify-center mt-5">
      <div className="relative">
         <img src={map} alt='map'/>
      </div>
    </div>
    
</section>
  );
};

export default Hero;
