import React, { useEffect } from "react";
import "../../style/style.css";
import imge from "../../Assets/hero-img.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

function FirstHeaderProduct() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);


  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/contact', { state: { scrollToSection: true } });
  };
  return (
    <div className="bgproduct1 px-[10px] relative bg-red-400">
      <div className=" my-auto min-h-[100vh] flex items-center justify-center">
        <div className="">
          <div className="textproduct3 text-[210px] xl:text-[225px] mt-4 hidden lg:block font-medium font-Roboto my-auto">
            Terragrow
          </div>

          <div className="flex w-[100%] justify-center z-[22]">
            <div className="mt-[90px] mb-[20px] bg-[]">
              <h1
                data-aos="fade-up"
                className="text-white text-center text-2xl sm:text-4xl font-bold font-Roboto mb-[30px]"
              >
                Experience the future
              </h1>
              <p
                data-aos="fade-down"
                className="text-[rgba(255,255,255,0.6)] text-center text-[19px] sm:text-2xl font-normal font-Roboto leading-9"
              >
                Introducing the Food Replicator, a groundbreaking technology
                that allows <br class="lg:block hidden"/> you to do AFH Farming
              </p>
            </div>
          </div>

          <div
            className="h-[100%] flex items-center justify-center mt-[10px] lg:mt-[0px] lg:justify-center
      	flex-col lg:flex-row pb-[20px] px-[10px] lg:px-[30px]"
          >
            <div
              data-aos="fade-left"
              className="bg-[] z-[2] ml-[0px] lg:ml-[40px]"
            >
              <h1 className="text-white text-2xl md:text-4xl font-bold font-Roboto mb-[30px]">
                Experience the Future of Food Replication
              </h1>
              <p className="opacity-60 text-white text-[19px] md:text-2xl font-normal font-Roboto md:leading-9">
                Our Food Replicator utilizes cutting-edge technology to{" "}
              </p>
              <div className=" ml-2 mt-[30px] sm:mt-[50px]">
                <ol className="pl-5">
                  <li
                    className="text-white text-opacity-80 text-[18px] sm:text-2xl font-normal font-Roboto sm:leading-9 leading-5 mb-[8px] sm:mb-[10px]"
                    style={{ listStyleType: "disc" }}
                  >
                    Fast and Efficient hydroponic farming
                  </li>
                  <li
                    className="text-white text-opacity-80 text-[18px] sm:text-2xl font-normal font-Roboto sm:leading-9 leading-5 mb-[8px] sm:mb-[10px]"
                    style={{ listStyleType: "disc" }}
                  >
                    Customized configuration for everybody
                  </li>
                  <li
                    className="text-white text-opacity-80 text-[18px] sm:text-2xl font-normal font-Roboto sm:leading-9 leading-5 mb-[8px] sm:mb-[10px]"
                    style={{ listStyleType: "disc" }}
                  >
                   Sustainable and Eco-Friendly Food Production
                  </li>
                </ol>
                <button
                  onClick={handleLearnMoreClick}
                  className="button border border-white block w-fit mt-[40px] bg-[white] py-[10px] px-[20px] sm:py-[15px] sm:px-[30px] text-center text-black text-[15px] font-bold font-rubik uppercase tracking-wider"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div data-aos="fade-right" className="mt-[50px] lg:mt-[0px] z-[2]">
              <img
                src={imge}
                alt=""
                className="h-[100%] w-[100%] md:h-[550px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstHeaderProduct;
