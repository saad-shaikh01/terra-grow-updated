import React from "react";
import "../../style/style.css";

function SecHeaderProduct({ data }) {
  const bgproduct2 = {
    background: `url(${data.backgroundImg3})`,
  };

  return (
    <div>
      <div data-aos="zoom-in" className="bgproduct3" style={bgproduct2}>
        <div className="h-[100%] flex items-center justify-center lg:justify-end">
          <div className="">
            <h1 data-aos="fade-left"
              className="text-white text-[35px] sm:text-[44px] font-semibold font-Rubik
                 tracking-wide px-[10px] lg:mr-[70px] text-center" 
                 style={{
                    textShadow: "0px 2px 8px #000",
                  }}
            >
              TRY OUT TERRAGROW
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecHeaderProduct;
