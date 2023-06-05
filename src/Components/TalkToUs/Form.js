import React from "react";
import { ReactComponent as ArrowDown } from "../../assets/svgs/arrow-down.svg";

const Form = () => {
  const options = [
    {
      key: 1,
      value: "Option 1",
    },
    {
      key: 2,
      value: "Option 2",
    },
    {
      key: 3,
      value: "Option 3",
    },
  ];

  return (
    <section className="bg-white lg:p-0 px-6 text-appBlack mt-[73px]">
      <div className="container lg:grid grid-cols-2 block gap-[129px] mx-auto lg:py-[96px] pt-[30px] pb-[80px]">
        <div className="mb-[40px]">
          <h2 className="mb-[16px] tracking-[-1px] lg:text-[38px] text-[32px] font-semibold leading-[120%] ">
            Talk to us{" "}
          </h2>
          <p className=" lg:text-md text-base leading-[150%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-1 md:gap-12 md:space-y-0">
          <form>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div className="mb-[32px]">
                <label for="first_name" className="mb-[4px]  leading-[150%]">
                  First name*
                </label>
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="block py-1 mt-[8px] w-full  bg-transparent border-0 placeholder: placeholder:opacity-50 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-appBlue peer"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className="mb-[32px]">
                <label for="last_name" className="mb-[4px]  leading-[150%]">
                  Last name*
                </label>
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="block py-1 mt-[8px] w-full  bg-transparent border-0 placeholder: placeholder:opacity-50 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-appBlue peer"
                  placeholder="Enter your last name"
                  required
                />
              </div>
              <div className="mb-[32px]">
                <label for="company" className="mb-[4px]  leading-[150%]">
                  Company name*
                </label>
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="block py-1 mt-[8px] w-full  bg-transparent border-0 placeholder: placeholder:opacity-50 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-appBlue peer"
                  placeholder="Enter company name"
                  required
                />
              </div>
              <div className="mb-[32px]">
                <label for="phone" className="mb-[4px]  leading-[150%]">
                  Job title*
                </label>
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="block py-1 mt-[8px] w-full  bg-transparent border-0 placeholder: placeholder:opacity-50 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-appBlue peer"
                  placeholder="Job title"
                  required
                />
              </div>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <label for="floating_dropdown" className="mb-[4px]  leading-[150%]">
                Where is the company located?*
              </label>
              <select
                name="floating_dropdown"
                id="floating_dropdown"
                className=" mb-[32px] block py-1 mt-[8px] w-full  bg-transparent border-0 placeholder: placeholder:opacity-50 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-appBlue peer"
                required
              >
                {options.map((ele, i) => (
                  <option value={ele.key}>{ele.value} </option>
                ))}
              </select>
              <ArrowDown
                className="right-[10px] absolute top-[60%]"
                fill="black"
              />
            </div>
            <div className="mb-6">
              <label for="password" className="mb-[4px]  leading-[150%]">
                Business email*
              </label>
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="mb-[32px] block py-1 mt-[8px] w-full  bg-transparent border-0 placeholder: placeholder:opacity-50 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-appBlue peer"
                placeholder="first name"
                required
              />
            </div>
            <div className="mb-6">
              <label for="confirm_password" className="mb-[4px]  leading-[150%]">
                Phone number*
              </label>
              <input
                type="phone"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="floating_email"
                id="floating_email"
                className="mb-[32px] block py-1 mt-[8px] w-full  bg-transparent border-0 placeholder: placeholder:opacity-50 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-appBlue peer"
                placeholder="+1 555 555 555"
                required
              />
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <label for="floating_dropdown" className="mb-[4px]  leading-[150%]">
                Estimated number of verifications per month
              </label>
              <select
                name=" floating_dropdown"
                id="floating_dropdown"
                className="mb-[32px] block py-1 mt-[8px] w-full  bg-transparent border-0 placeholder: placeholder:opacity-50 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-appBlue peer"
                required
              >
                {options.map((ele, i) => (
                  <option key={i} value={ele.key}>
                    {ele.value}{" "}
                  </option>
                ))}
              </select>
              <ArrowDown
                className="right-[10px] absolute top-[60%]"
                fill="black"
              />
            </div>
            <p className="">
              By submitting this form, you confirm that you have read,
              understood and agreed to Rattify’s{" "}
              <a href="#" target="_blank" className="text-[#1D68CE]">
                Privacy Policy
              </a>
              .
            </p>
            <button
              type="submit"
              className=" gradient-bg focus:outline-none text-white  font-medium rounded-lg w-full  py-3 text-center mt-[44px]"
            >
              Get in touch
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
