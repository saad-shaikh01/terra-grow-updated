import React, { useState, useEffect } from "react";
import Card from "../components/product/Card";
import Frequently from "../components/product/Frequently";
import "../style/style.css";
import digital from "../Assets/service-img.png";
import cardImg1 from "../Assets/Card1.png";
import cardImg2 from "../Assets/Card2.png";
import cardImg3 from "../Assets/Card3.png";
import cardImg4 from "../Assets/Card4.png";
import cardImg5 from "../Assets/Card5.png";
import cardImg6 from "../Assets/Card6.png";
import cardImg7 from "../Assets/Card7.png";
import cardImg8 from "../Assets/Card8.png";
import cardImg9 from "../Assets/Card9.png";
import cardImg10 from "../Assets/Card10.png";
import SecHeaderProduct from "../components/product/SecHeaderProduct";

import { backgroundimg } from "../data/data";
import ThreeHeader from "../components/product/ThreeHeader";
import FirstHeaderProduct from "../components/product/FirstHeaderProduct";
import { Circles, MutatingDots } from "react-loader-spinner";

function Productpage() {
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
  const sectionsData = [
    {
      backGroundImg1: digital,
      Img1: cardImg1,
      Img2: cardImg2,
      heading1: "Arduino Uno",
      heading2: "Arduino Mega",
    },
    {
      backGroundImg1: digital,
      Img1: cardImg4,
      Img2: cardImg3,
      reverse: true,
      heading1: "MicroSD card Module",
      heading2: "Bluetooth Module AT-09 (HM-10)",
    },
    {
      backGroundImg1: digital,
      Img1: cardImg5,
      Img2: cardImg6,
      heading1: "Water Temperature Sensor",
      heading2: "Real Time Clock Module",
    },
    {
      backGroundImg1: digital,
      Img1: cardImg8,
      Img2: cardImg7,
      reverse: true,
      heading2: "Air Temperature & Humidity Sensor",
    },
    {
      backGroundImg1: digital,
      Img1: cardImg9,
      Img2: cardImg10,
      heading2: "Relay Module",
    },
  ];

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
          <FirstHeaderProduct />
          <SecHeaderProduct data={backgroundimg} />
          {sectionsData.map((section, index) => (
            <Card key={index} {...section} />
          ))}
          <ThreeHeader data={backgroundimg} />
          <Frequently />
        </>
      )}
    </div>
  );
}

export default Productpage;
