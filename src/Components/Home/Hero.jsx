import React from "react";
import { useNavigate } from "react-router-dom";
import hero from "../../assets/images/hero-image.png";
import  map  from "../../assets/images/map.png";
import  sun  from "../../assets/images/sample.png";
// import icon1 from "../../assets/images/ft1.png";
import  maintext  from "../../assets/images/maintext.png"
import { ReactComponent as Box } from "../../assets/svgs/boxes.svg";
import { ReactComponent as Icon1 } from "../../assets/svgs/ft1.svg";

const  Hero = () => {
  const navigate = useNavigate();
  const data=[
    {
      icon:<Icon1 className="w-[30px] h-[30px]"/>,
      title:'EASE OF USE',
      description:'Our platform streamlines the sales and logistics process, eliminating the need for middlemen and reducing transaction costs.'   
    },
    {
      icon:<Icon1 className="w-[30px] h-[30px]"/>,
      title:'GLOBAL BUSINESS COMMUNITY NETWORK',
      description:'Connect with potential buyers and sellers from around the world, expanding your reach and opening up new opportunities for growth.'   
    },
    {
      icon:<Icon1 className="w-[30px] h-[30px]"/>,
      title:'Secured and Trustless Payments Systems',
      description:'Conduct transactions with confidence, knowing that your payments are secure and transparent.'   
    },
    {
      icon:<Icon1 className="w-[30px] h-[30px]"/>,
      title:'EFFICIENT DELIVERY OF GOODS AND SERVICES',
      description:'We prioritize getting your products to your customers quickly and reliably.'   
    },
    {
      icon:<Icon1 className="w-[30px] h-[30px]"/>,
      title:'Cheaper Transaction Cost',
      description:'Save money on fees and commissions by using our decentralized platform.'   
    },
    {
      icon:<Icon1 className="w-[30px] h-[30px]"/>,
      title:'Improve Bottom Line',
      description:'Streamlining processes and reducing costs can help your business thrive and grow.'   
    },
  ]

  const data2=[
    {
      img:sun,
      desc:'GATANow - Decentralised Logistics:',
      time:'12 hrs'
    },
    {
      img:sun,
      desc:'GATANow - Decentralised Logistics:',
      time:'12 hrs'
    },
    {
      img:sun,
      desc:'GATANow - Decentralised Logistics:',
      time:'12 hrs'
    },
    {
      img:sun,
      desc:'GATANow - Decentralised Logistics:',
      time:'12 hrs'
    }
  ]
  return (
    <div>
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
         <img src={map} alt='map' width={700}/>
      </div>
    </div>

    <div className="flex items-center justify-center mt-5">
      <div className="relative">
         <img src={maintext} alt='map' width={500}/>
      </div>
    </div>

    <div className="flex items-center justify-center mt-5">
      <div className="relative">
         <p className="text-white text-2xl">
         Revolutionising eCommerce with Blockchain, AI, AND VR Technology
         </p>
      </div>
    </div>

    <div className="flex items-center justify-center mt-10">
      <div className="relative">
        <div className="dashed">
        <a
              href="#no"
              className="text-#355E3B gradient-bg  lg:inline-block    rounded-lg  px-5 py-2.5 text-center mr-3 md:mr-0 "
            >
              Explore Gata Protocol
            </a>
        </div>
      </div>
    </div>
</section>
<div className="flex items-center justify-center mt-15 mb-10">
    <div className="relative">
       <Box className="w-full h-[89.69px] "/>
    </div>
</div>
  {/* CARDS TEXT */}
  <section className="lg:px-20 lg:py-0 lg:h-[84px] py-[32px]">
  <p className="destext2">KEY FEATURES OF THE WEBSITE</p>
  </section>

  {/* CARDS */}
  <section className="lg:px-20 lg:py-0 lg:h-[84px] py-[32px] cardparent ">
    
          {data.map(item=>(
        <div className="bg-white card-container ">
            <div className="icon-container">
              
              <div className="icon-body">
              {item.icon}
                 {/* <img src={item.icon} alt="sdsd" width={100}/> */}
              </div>
            
            </div>
            <div className="w-[200px]">
               <p className="destext1">{item.title}</p>
            </div>
            <div>
              <p className="destext1">{item.description}</p>
            </div>        
        </div>
          ))}

  </section>

  {/* TEXT AND IMAGES*/}
   {/* CARDS TEXT */}
<div className="sm:mt-[700px]">
  <section className="lg:px-20 lg:py-0 lg:h-[84px] py-[32px]">
  <p className="destext2">LATEST ARTICLES</p>
  </section>
  {/* CARDS */}
  <section className="lg:px-20 lg:py-0 lg:h-[84px] py-[32px] all">

          {data2.map((item)=>(
            <>
          <div >
            <div>
               <img src={item.img} alt='' className="image-cont"/>
            </div>
            <div>
            <p className="dtext">{item.desc}</p>
            </div>
            <div>
            <p className="dtext1">{item.time}</p>
            </div>
          </div>
            </>
          ))}
          
  </section>
</div>

{/* NEWSLETTER */}

<section className=" sub lg:p-[56px] p-6 py-[96px] sm:mt-[700px] ">
   <h1 className="subtext">subscribe to our news letter</h1>
   <div class="container2">
  <input type="text" placeholder="Enter text" class="input-field" />
  <button type="submit" class="submit-button">Submit</button>
</div>
</section>
 
  </div>
  );
};

export default Hero;
