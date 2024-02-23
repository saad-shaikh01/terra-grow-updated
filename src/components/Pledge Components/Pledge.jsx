import React, { useEffect } from "react";
import "../../style/style.css";
import TerragrowHeading1 from "../TerragrowHeading1";
import AOS from "aos";
import "aos/dist/aos.css";
import pledgeImage3 from "../../Assets/Our-Pledge/Sustaible 2.png";
import rectangle22600 from "../../Assets/Our-Pledge/Group 100000.png";
import headerBg from '../../Assets/Our-Pledge/Ourpledge-bg.png'

function PledgeHeader() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    // <div className="relative flex items-center justify-center">
    <div className=" h-[100vh]">
      {/* <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center"> */}
      <img src={rectangle22600} alt="" className="lg:block hidden relative w-full lg:h-[900px] xl:h-auto h-auto z-[9] " />
      <img src={headerBg} alt="" className="lg:hidden block relative w-full min-h-[100vh] object-cover " />
      {/* </div> */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center lg:z-[99] justify-center">
        <TerragrowHeading1 />
        <div className="text-center text-white">
          <div className="mt-8 ">
            <h1
              data-aos="fade-up"
              className="sm:text-4xl lg:text-5xl px-4 font-bold font-Roboto text-3xl"
            >
              Our Pledge To
            </h1>
            <p
              data-aos="fade-down"
              className="sm:text-3xl text-lg px-4 font-bold font-Roboto leading-[29.53px] pt-4"
            >
              United Nations Sustainable Development Goals
            </p>

            <img
              data-aos="flip-up"
              src={pledgeImage3}
              className="mx-auto px-4   h-[180px] object-cover  lg:h-[250px] pt-8"
              alt="Pledge Image"
            />
          </div>
        </div>
        {/* <div className="lg:top-[330px] absolute xl:bottom-[-450px] 3xl:bottom-[-930px] hidden lg:block  w-full h-[500px]">
      <img
        data-aos="flip-down"
        src={pledgeLayer}
        className="     w-full"
        alt="Pledge Layer"
      />
        </div> */}
      </div>
      
       {/* <div className="bg-red-900">
       </div> */}
    </div>
  );
}

export default PledgeHeader;
