import React, { useState, useEffect } from "react";
import HomeBlog from "../components/HomeBlog";
import HomeHeader from "../components/HomeHeader";
import { Circles, MutatingDots } from "react-loader-spinner";

function Home() {
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
        <HomeHeader />
      )}
      {/* <HomeBlog /> */}
    </div>
  );
}

export default Home;
