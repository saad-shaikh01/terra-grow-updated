// Frequently.js
import React from "react";
import CustomFaq from "./CustomFaq";
import "../../style/style.css";
import data from "../../data/data";
import Contactus from "./Contactus";
import Faq from "./Faq";
function Frequently() {
  return (
    <>
      <div className="backgroundimg flex w-[100%] items-center justify-center flex-col ">
        <div className="w-[100%] lg:w-[1000px] p-[20px]  mt-[30px] mb-[30px] mb-[50px]">
          <div className="flex items-center justify-center mb-[20px] flex-col w-[100%]">
            <h1
              data-aos="fade-up"
              className="text-white text-[40px] sm:text-[50px] mb-[10px] font-semibold font-Roboto"
            >
              FAQs
            </h1>
            <p
              data-aos="fade-down"
              className="text-[rgba(255,255,255,0.6)] text-[20px] sm:text-[24px] mb-[10px] text-center font-Roboto"
            >
              Find answers to common questions about the Food Replicator
            </p>
          </div>

          <hr className="" />
          <Faq />
        </div>
        <Contactus />
      </div>
    </>
  );
}

export default Frequently;
