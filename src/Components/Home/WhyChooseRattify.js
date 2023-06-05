import React from "react";
import { ReactComponent as GlobalReach } from "../../assets/svgs/global-reach.svg";
import { ReactComponent as LowerCost } from "../../assets/svgs/lower-cost.svg";
import { ReactComponent as FasterProcessing } from "../../assets/svgs/faster-processing.svg";
import { ReactComponent as ImprovedCustomer } from "../../assets/svgs/improved-customer.svg";
import { ReactComponent as ImprovedAccuracy } from "../../assets/svgs/improved-accuracy.svg";
import { ReactComponent as EnchancedSecurity } from "../../assets/svgs/enhanced-security.svg";

const WhyChooseRattify = () => {
  const data = [
    {
      icon: <GlobalReach/>,
      title: "Global Reach",
      text: "Support for 11K+ government issued IDs, 195 countries, 130 jurisdictions and 45 languages.",
    },
    {
      icon: <LowerCost/>,
      title: "Lower costs and overheads",
      text: "Average of 60% reduction in cost with our fully automated verification solutions.",
    },
    {
      icon: <FasterProcessing/>,
      title: "Faster processing time",
      text: "Verify millions of users within seconds using our bespoke artificial intelligence (AI).",
    },
    {
      icon: <ImprovedCustomer/>,
      title: "Improved customer experience",
      text: "Boost your customer satisfaction and loyalty scores by up to 60%.",
    },
    {
      icon: <ImprovedAccuracy/>,
      title: "Improved accuracy",
      text: "Deliver highly accurate results with up to 99% success rate through our fully automated AI system in just 4 seconds.",
    },
    {
      icon: <EnchancedSecurity/>,
      title: "Block Digital Fakes",
      text: "Our solution effectively thwarts spoofs (printed photos, digital images, videos, 3D masks, deepfakes and pre-recorded videos etc.) with 99.9% accuracy rate.",
    },
  ];
  return (
    <section className="flex flex-col container mx-auto lg:py-[96px] p-6">
      <div className="flex flex-col lg:justify-center lg:items-center">
        <p className="font-bold text-3xl">Why choose Rattify?</p>
      </div>
      <div className="lg:grid lg:grid-cols-3 gap-6 block pt-[40px] ">
        {data.map((item, i) => (
          <div key={i} className="flex flex-col gap-5 text-appBlack mb-[40px] lg:mb-0 ">
            {item.icon}
            <h3 className="font-bold text-xl leading-[120%] ">{item.title}</h3>
            <p className="leading-[150%]">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseRattify;
