import React,{useEffect} from "react";
import "../../style/style.css";
import pledgeimg3 from "../../Assets/Our-Pledge/Sustaible 2.png";
// import TerragrowHeading1 from "../TerragrowHeading1";
// import greenlayer from "../../Assets/Our-Pledge/green-layer 2.png";
// import bluelayer from "../../Assets/Our-Pledge/blue-layer.png";
// import pledgelayer from "../../Assets/Our-Pledge/pledge-layers.png";
import AOS from "aos";
import 'aos/dist/aos.css';

function PledgeHeader() {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, [])

  return (
    <div className="relative  flex items-center justify-center relative pledgeHeader-main">
      {/* <TerragrowHeading1 /> */}
      <div className="text-center text-white">
        {/* <div className="lg:h-[100vh] flex-wrap justify-center flex items-end"> */}
          <div className="mt-auto">
            <h1 data-aos="fade-up" className="sm:text-[50px] px-4 font-bold font-Roboto text-3xl">
              Our Pledge To
            </h1>
            <p data-aos="fade-down" className="sm:text-3xl text-lg px-4 font-bold font-Roboto leading-[29.53px] pt-4 ">
              United Nations Sustainable Development Goals
            </p>
            <img data-aos="flip-up" src={pledgeimg3} className="mx-auto px-4 h-[250px] pt-8" />
          </div>

          {/* <div className='h-[0px] relative top-[-40px] z-40 bg-green-400 w-[100%]'>
<img src={greenlayer} className='h-[300px] w-[100%]'/>
</div>

<div className='h-[0px] relative bottom-[-80px] z-40'>
<img src={bluelayer}/>
</div> */}

          <div className="w-[100vw] h-[0px] flex items-end">
            {/* <img
            // data-aos="flip-down"
              src={pledgelayer}
              // className="w-[100%] mt-auto h-[140px] md:h-[200px] absolute md:bottom-[50px] xl:h-[600px] lg:h-[500px] lg:bottom-[300px] xl:bottom-[350px] 2xl:bottom-[400px]"
              className="w-[100%] mt-auto  absolute top-[45vh] "
            /> */}
          </div>
        </div>
      </div>
    // </div>
  );
}

export default PledgeHeader;
