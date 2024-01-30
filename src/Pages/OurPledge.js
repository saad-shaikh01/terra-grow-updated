import React, { useState, useEffect } from "react";
import PledgeHeader from "../components/Pledge Components/PledgeHeader";
import Pledgeupdated from "../components/Pledge Components/Pledge";
import Goal1 from "../components/Pledge Components/Goal1";
import Goal2 from "../components/Pledge Components/Goal2";
import Goal3 from "../components/Pledge Components/Goal3";
import Goal12 from "../components/Pledge Components/Goal12";
import Goal15 from "../components/Pledge Components/Goal15";
import Sustainblefooter from "../components/Pledge Components/Sustainblefooter";
import Footer from "../components/Layout/Footer";
import { Circles, MutatingDots } from "react-loader-spinner";

function OurPledge() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
    <div>
      {loading ? (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            background: `url(${require("../Assets/firstHeader.png")})`,
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
          <Pledgeupdated />
          {/* <Goal2 /> */}
          <Goal1 />
          <Sustainblefooter />
        </>
      )}
    </div>
  );
}

export default OurPledge;
