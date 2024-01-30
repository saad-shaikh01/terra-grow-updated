import React from 'react'
import "../../style/style.css"
import logoimg from '../../Assets/Re-used/Logo.png'
import dropdown from '../../Assets/Re-used/Arrow - Down 2.png'



function SecHeaderProduct({ data }) {

  const bgproduct2 = {
      background: `url(${data.backgroundImg})`,
  };

return (
  <div className="">
      <div
      //  data-aos="flip-down" 
      className='bgproduct2' style={bgproduct2}>
          <div className='grid grid-cols-1 w-[100%] h-[100%] items-center justify-center'>
            
          <h1
           data-aos="fade-up "
            className="text-center mt-auto text-white text-[25px] px-[10px] sm:text-[44px] font-bold font-Rubik sm:leading-[59px] tracking-wide"
          style={{
              textShadow: "0px 2px 8px #000",
            }}
          >Try Out <br /> FOOD REPLICATOR</h1>



<div className='mt-auto mx-auto pb-2'>
<img src={logoimg} data-aos="flip-down"/>
<a href="#card"><img src={dropdown} className='mx-auto pt-2 cursor-pointer' data-aos="flip-up"/></a>
</div>



          </div>
      </div>
  </div>
)
}

export default SecHeaderProduct