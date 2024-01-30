import React, { useState, useEffect } from "react";
import "../../style/style.css";
import Sgoal from "./Sgoal";
import sgimg1 from "../../Assets/Our-Pledge/sustainble-real.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Circles, MutatingDots } from "react-loader-spinner";

function Sustainblegoal() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 2000 });
    // Assume that your data is fetched here or any other operation that takes time
    // For example purposes, using setTimeout to mimic an asynchronous operation
    setTimeout(() => {
      setLoading(false); // Set loading to false once operation is completed
    }, 1000); // Change this time according to your requirement
  }, []);

  const classes = {
    textClr: "rgba(0, 157, 255, 1)",
    // textClr: "rgb(7, 153, 186)",
    // textClr: "rgb(7, 153, 186)",
  };

  return (
    <>
      {loading ? (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            background: `url(${require("../../Assets/firstHeader.png")})`,
            backgroundSize: "cover", // Adjust background size as needed
            backgroundColor: "rgba(0, 0, 0, 0.1)", // Translucent white background
            backdropFilter: "blur(25px)", // Blur effect
            zIndex: 999, // Place it above the content
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Circles
            height="80"
            width="80"
            color={classes.textClr}
            secondaryColor={classes.textClr}
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <>
          <div className="goalpage-main min-h-[100vh] pt-32 pb-4 lg:py-32 ">
            <div>
              <div className="mb-16">
                <img
                  data-aos="flip-down"
                  src={sgimg1}
                  className="mx-auto mb-7 w-[150px]"
                />
                <h1
                  data-aos="zoom-in"
                  className="text-center text-white text-2xl md:text-[35px] font-bold font-Inter md:leading-[77.71px]"
                >
                  Sustainable Development Goals
                </h1>
              </div>

              <Sgoal />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Sustainblegoal;
