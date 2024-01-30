import React,{useEffect} from "react";
import "../style/style.css";
import AOS from "aos";
import 'aos/dist/aos.css';
import img1 from "../../src/Assets/Home-Head/home-img1.png"
import TerragrowHeading1 from "./TerragrowHeading1";

function HomeHeader() {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, [])
  
  return (
    <div className="h-[auto] overflow-hidden lg:min-h-[100vh] home-header-main">

      <div className="lg:min-h-[100vh]  grid grid-cols-1">

      <div className="pt-48 px-4">
        <TerragrowHeading1/>
        <h1 data-aos="fade-left" className="text-center text-white text-3xl  lg:text-[64px] font-bold font-Roboto">
          Revolutionizing Hydroponics
        </h1>
        <p data-aos="fade-right" className="text-center text-white md:px-32 text-lg lg:text-xl font-semibold font-Rubik tracking-widest pt-4 lg:pt-8">
          Experience the future of gardening with our advanced hydroponics
          system and user-friendly {""}
          <br className="hidden xl:block" />
          mobile app.
        </p>
      </div>


<div className="md:pt-20 flex justify-center mt-auto">
  <img src={img1} className="xl:h-[500px] mt-auto"/>
</div>

</div>
    </div>
  );
}

export default HomeHeader;
