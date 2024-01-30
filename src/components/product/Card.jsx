import React from "react";
import "../../style/style.css";


function Card({ backGroundImg1, Img1, Img2, heading1, heading2, reverse }) {
    
  return (
    <div data-aos="zoom-in" className={` w-full flex items-center justify-center flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''}`} id="card">
      <div className="mediaquery py-[10px] relative w-[100%] h-[450px] md:h-[500px] lg:h-[640px]">
        <img src={backGroundImg1} alt="img" className="w-[100%] h-[100%]" />
        <div className="absolute top-[0] flex items-center justify-center sm:justify-around h-[100%] w-[100%] flex-col p-[20px]">
        <h1 className="text-black sm:text-xl font-normal font-Rubik tracking-widest">{heading1}</h1>
          <img 
          data-aos="flip-right"
           src={Img1} alt="" className="p-[10px] h-[300px] object-contain	" />
          <div className="w-[200px] sm:w-[356px] mb-[30px] h-[20px] opacity-50 bg-black rounded-full blur-[20px] mt-[30px]"></div>
        </div>
      </div>

      <div className="mediaquery py-[10px] bg-black relative w-[100%] h-[450px] md:h-[500px] lg:h-[640px]">
        <div className="absolute top-[0] flex items-center justify-center sm:justify-around h-[100%] w-[100%] flex-col p-[20px]">
            <h1 className="text-white sm:text-xl font-normal font-Rubik tracking-widest">{heading2}</h1>
          <img 
          data-aos="flip-right"
           src={Img2} alt="" className="p-[10px] h-[300px] object-contain	" />
          <div className="w-[200px] sm:w-[356px] mb-[30px] h-[20px] opacity-50 bg-white rounded-full blur-[20px] mt-[30px]"></div>
        </div>
      </div>
    </div>
  );
}

export default Card;
