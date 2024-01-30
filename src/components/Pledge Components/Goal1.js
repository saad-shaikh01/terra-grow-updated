import React, { useEffect } from "react";
// import goal1 from "../../Assets/Our-Pledge/Goal.png";
import pledgelogo from "../../Assets/Our-Pledge/Pledge-logo.png";
import bg1 from "../../Assets/Our-Pledge/Goal1-bg.png";
import bg2 from "../../Assets/Our-Pledge/goal2-bg.png";
import bg3 from "../../Assets/Our-Pledge/goal3-bg.png";
import bg4 from "../../Assets/Our-Pledge/goal12-bg.png";
import bg5 from "../../Assets/Our-Pledge/goal15-bg.png";
import goal1 from "../../Assets/Our-Pledge/gaol1.png";
import goal2 from "../../Assets/Our-Pledge/gaol2.png";
import goal3 from "../../Assets/Our-Pledge/gaol3.png";
import goal4 from "../../Assets/Our-Pledge/gaol12.png";
import goal5 from "../../Assets/Our-Pledge/gaol15.png";
import pledgelogo1 from "../../Assets/Our-Pledge/teragrow-logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import '../../style/style.css'

function Goal1() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const content = [
    {
      top: 'lg:mt-20',
      bgImage: bg1,
      gaolImage: goal1,
      gaalHeading: "End poverty in all its forms everywhere",
      margin:
        " mt-[20px] lg:pb-[40px]  lg:mt-[140px] xl:mt-[137px]   xl:mb-[10px]  lg:pr-[20px]",
      listItems: [
        "Increase the number of Food Replicator units in low-income households by 25% annually.",
        "Achieve a 10% reduction in the cost of the Food Replicator system to make it more affordable for economically disadvantaged families.",
        "Create partnerships with local NGOs and government agencies to reach 5,000 low-income households in the first year.",
        "Establish a Educational  program to support the Young Generation of low-income individuals interested in hydroponic farming.",
      ],
    },
    {
      bgImage: bg2,
      gaolImage: goal2,
      gaalHeading:
        "End hunger, achieve food security & improved nutrition & promote sustainable agriculture",
      // margin: "mt-[20px] mb-[68px] xl:mb-[200px] xl:mt-[150px]  pr-[20px]",
      listItems: [
        "Ensure that Food Replicator users have access to a diverse range of crops, with a goal of growing at least 15 different types of fruits and vegetables.",
        "Monitor a 20% reduction in food waste among Food Replicator users, leading to reduced hunger in communities.",
        "Collaborate with local schools to install Food Replicator units, providing fresh produce for school meal programs and targeting at least 10 schools in the first year.",
        "Track a 10% increase in food security for families using the Food Replicator.",
      ],
    },
    {
      bgImage: bg3,
      gaolImage: goal3,
      gaalHeading:
        "Ensure healthy lives and promote well-being for all at all ages",
      // margin: "xl:mb-[200px] xl:mt-[150px]",
      listItems: [
        "Establish a community health and wellness program, reaching 5,000 users with educational resources on nutrition and healthy eating.",
        "Measure a 20% reduction in diet-related health issues, such as obesity and diabetes, among Food Replicator users.",
        "Offer a free health tracking app for Food Replicator users to monitor their improved health metrics over time.",
        "Collaborate with healthcare providers to offer incentives for Food Replicator users who maintain healthier lifestyles.",
      ],
    },
    {
      bgImage: bg4,
      gaolImage: goal4,
      gaalHeading: "Ensure sustainable consumption and production patterns",
      // margin: "xl:mb-[20px] xl:mt-[50px]",
      listItems: [
        "Implement a recycling and waste reduction program for Food Replicator users, aiming for a 30% reduction in plastic and packaging waste.",
        "Set a target of achieving 90% sustainable sourcing of materials used in Food Replicator production within five years.",
        "Track the water and energy consumption of Food Replicator systems and strive for a 15% reduction Compared to traditional farming",
        "Collaborate with users to measure and report on their Food Replicator Data and share the information across Terragrow Community",
        "Promote sustainable and responsible consumption by providing users with resources on responsible and eco-friendly purchasing choices.",
      ],
    },
    {
      bgImage: bg5,
      gaolImage: goal5,
      gaalHeading:
        "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss",
      // margin: "xl:mb-[200px] xl:mt-[150px]",
      listItems: [
        "Commit to planting one tree for every Food Replicator unit sold, contributing to reforestation efforts and setting a target of 10,000 trees planted annually.",
        "Monitor the reduction in land usage achieved through the compact design of Food Replicator units, with a goal of preserving 50 acres of land over five years.",
        "Collaborate with environmental organizations to create educational programs for users about the importance of biodiversity and land conservation.",
      ],
    },
  ];

  return (
    <>
      {content?.map((item, index) => (
        // <div key={index} className="relative  2xl:flex h-[100vh] overflow-hidden ">
        <div key={index} className={` ${item.top} relative   overflow-hidden xl:flex `}>
          
          
          <div className=" hidden  lg:flex  w-[100%] justify-end h-[0px] bg-red-900 absolute top-4 lg:top-32 md:top-20 right-[80px]" data-aos="fade-right">
            <img src={pledgelogo1} className="h-[50px] z-[2]" />
          </div>


          {/* <div className=""> */}
            <img
              data-aos="flip-up"
              src={item.bgImage}
              className="absolute  top-0 bottom-0 left-0 object-cover h-full w-full z-[-1]"
            />
          {/* </div> */}

          {/* Background Image */}
         
          {/* <div
            className=" max-w-[100vw] h-auto z-[-1] bg-center bg-no-repeat bg-cover "
            style={{ backgroundImage: `url(${item.bgImage})` }}
          > */}



          <div
            className={` PledgeContent relative   mx-4  lg:gap-12 2xl:w-[100%] lg:ml-[40px] xl:px-[83px]  pledge-img-main xl:h-[900px] lg:h-[800px] md:mx-16 xl:pt-8 lg:flex lg:items-center lg:justify-center ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >           
            <div
              data-aos="fade-left"
              className="w-full  lg:my-auto  mt-[20px]  2xl:w-[700px] lg:w-[50%] items-center"
            >
              <img
                src={item.gaolImage}
                className="    ml-[-7px]    lg:h-[50px] xl:h-[70px]   image-goal goal-head"
              />
              <h1 className="text-2xl lg:text-[38px] xl:w-[500px] :w-[400px] xl:text-[48px]  xl:leading-[56px] text-white md:text-[50.99px] font-bold font-Inter goal-head md:leading-[50px] text-center sm:text-left">
                {item.gaalHeading}
              </h1>
            </div>
            
            
            <div
              data-aos="fade-right"
              className={`${item.margin} w-full lg:w-[50%] 2xl:w-[700px] ml-0 lg:ml-[20px] lg:pt-0 `}
            >
              <img
                src={pledgelogo}
                className=" h-[50px] md:h-[70px] lg:h-[50px] lg:ml-[20px]  xl:w-[270px]  xl:h-[83px] lg:  lg:mx-0"
              />
              <div className=" pl-[15px]  lg:pl-[0px] lg:pl-0">
                <ol>
                  {item.listItems.map((listItem, listIndex) => (
                    <li
                      key={listIndex}
                      className="goal-head mb-4 lg:mb-2 xl:mb-6 leading-5 lg:leading-6 xl:leading-6 text-white md:text-[20px] lg:w-[480px] lg:text-[25px] font-bold font-Inter capitalize"
                    >
                      {listItem}
                    </li>
                  ))}
                </ol>
              </div>
            </div>



          </div>


          {/* </div> */}
         
         
          {/* Content */}
        </div>
      ))}
    </>
  );
}

export default Goal1;

// import React, { useEffect } from "react";
// // import goal1 from "../../Assets/Our-Pledge/Goal.png";
// import pledgelogo from "../../Assets/Our-Pledge/Pledge-logo.png";
// import bg1 from "../../Assets/Our-Pledge/Goal1-bg.png";
// import bg2 from "../../Assets/Our-Pledge/goal2-bg.png";
// import bg3 from "../../Assets/Our-Pledge/goal3-bg.png";
// import bg4 from "../../Assets/Our-Pledge/goal12-bg.png";
// import bg5 from "../../Assets/Our-Pledge/goal15-bg.png";
// import goal1 from "../../Assets/Our-Pledge/gaol1.png";
// import goal2 from "../../Assets/Our-Pledge/gaol2.png";
// import goal3 from "../../Assets/Our-Pledge/gaol3.png";
// import goal4 from "../../Assets/Our-Pledge/gaol12.png";
// import goal5 from "../../Assets/Our-Pledge/gaol15.png";
// import pledgelogo1 from "../../Assets/Our-Pledge/teragrow-logo.png";
// import AOS from "aos";
// import "aos/dist/aos.css";

// function Goal1() {
//   useEffect(() => {
//     AOS.init({ duration: 2000 });
//   }, []);

//   const content = [
//     {
//       bgImage: bg1,
//       gaolImage: goal1,
//       gaalHeading: "End poverty in all its forms everywhere",
//       margin: "mt-[218px] mb-[138px]   pr-[20px]",
//       listItems: [
//         "Increase the number of Food Replicator units in low-income households by 25% annually.",
//         "Achieve a 10% reduction in the cost of the Food Replicator system to make it more affordable for economically disadvantaged families.",
//         "Create partnerships with local NGOs and government agencies to reach 5,000 low-income households in the first year.",
//         "Establish a Educational  program to support the Young Generation of low-income individuals interested in hydroponic farming.",
//       ],
//     },
//     // {
//     //   bgImage: bg2,
//     //   gaolImage: goal2,
//     //   gaalHeading:
//     //     "End hunger, achieve food security & improved nutrition & promote sustainable agriculture",
//     //   margin: "mt-[117px] mb-[268px]  pr-[20px]",
//     //   listItems: [
//     //     "Ensure that Food Replicator users have access to a diverse range of crops, with a goal of growing at least 15 different types of fruits and vegetables.",
//     //     "Monitor a 20% reduction in food waste among Food Replicator users, leading to reduced hunger in communities.",
//     //     "Collaborate with local schools to install Food Replicator units, providing fresh produce for school meal programs and targeting at least 10 schools in the first year.",
//     //     "Track a 10% increase in food security for families using the Food Replicator.",
//     //   ],
//     // },
//     // {
//     //   bgImage: bg3,
//     //   gaolImage: goal3,
//     //   gaalHeading:
//     //     "Ensure healthy lives and promote well-being for all at all ages",
//     //   margin: "",
//     //   listItems: [
//     //     "Establish a community health and wellness program, reaching 5,000 users with educational resources on nutrition and healthy eating.",
//     //     "Measure a 20% reduction in diet-related health issues, such as obesity and diabetes, among Food Replicator users.",
//     //     "Offer a free health tracking app for Food Replicator users to monitor their improved health metrics over time.",
//     //     "Collaborate with healthcare providers to offer incentives for Food Replicator users who maintain healthier lifestyles.",
//     //   ],
//     // },
//     // {
//     //   bgImage: bg4,
//     //   gaolImage: goal4,
//     //   gaalHeading: "Ensure sustainable consumption and production patterns",
//     //   margin: "",
//     //   listItems: [
//     //     "Implement a recycling and waste reduction program for Food Replicator users, aiming for a 30% reduction in plastic and packaging waste.",
//     //     "Set a target of achieving 90% sustainable sourcing of materials used in Food Replicator production within five years.",
//     //     "Track the water and energy consumption of Food Replicator systems and strive for a 15% reduction Compared to traditional farming",
//     //     "Collaborate with users to measure and report on their Food Replicator Data and share the information across Terragrow Community",
//     //     "Promote sustainable and responsible consumption by providing users with resources on responsible and eco-friendly purchasing choices.",
//     //   ],
//     // },
//     // {
//     //   bgImage: bg5,
//     //   gaolImage: goal5,
//     //   gaalHeading:
//     //     "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss",
//     //   margin: "",
//     //   listItems: [
//     //     "Commit to planting one tree for every Food Replicator unit sold, contributing to reforestation efforts and setting a target of 10,000 trees planted annually.",
//     //     "Monitor the reduction in land usage achieved through the compact design of Food Replicator units, with a goal of preserving 50 acres of land over five years.",
//     //     "Collaborate with environmental organizations to create educational programs for users about the importance of biodiversity and land conservation.",
//     //   ],
//     // },
//   ];

//   return (
//     <>
//       {content?.map((item, index) => (
//         <div
//           key={index}
//           className="  lg:py-0 h-full lg:min-h-[100vh]  w-full relative top-[-0px]  2xl:top-[-350px]  overflow-hidden  items-center justify-center"
//         >
//           <div className=" hidden lg:block flex  w-[100%] justify-end h-[0px] absolute top-4  md:top-20 right-[100px] ">
//             <img src={pledgelogo1} className="h-[50px]" />
//           </div>

//           <div className="  w-full  h-full   lg:min-h-[100vh]  flex items-center justify-center">
//             <img
//               data-aos="flip-up"
//               src={item.bgImage}
//               className="relative top-0 bottom-0 left-0 2xl:w-full h-full object-cover z-[-1]"
//             />
//             <div
//               className={`absolute px-4 lg:px-[83px]  md:px-16 goal1-main gap-12 lg:flex  justify-center items-center  ${
//                 index % 2 === 0 ? " lg:flex-row" : " lg:flex-row-reverse"
//               }`}
//             >
//               {/* goal1 div1 structure starts here */}
//               <div
//                 //  data-aos="fade-left"
//                 className="w-[100%]  lg:w-[50%] "
//               >
//                 <div className=" ">
//                   <img
//                     src={item.gaolImage}
//                     className=" h-[100px] image-goal  goal-head"
//                   />
//                 </div>

//                 <h1 className=" text-3xl lg:text-[68px] lg:leading-[76px]  text-white md:text-[50.99px] font-bold font-Inter goal-head md:leading-[50px]">
//                   {item.gaalHeading}
//                 </h1>
//               </div>
//               {/* goal1 div1 structure Ends here */}

//               {/* goal1 div2 structure starts here */}

//               <div
//                 // data-aos="fade-right"
//                 className={`${item.margin}  w-[100%]  ml-[20px]  lg:pt-0  lg:w-[50%]`}
//               >
//                 <img src={pledgelogo} className="w-[270px]    h-[83px] " />
//                 <div className=" pl-[50px] ">
//                   <ol className="">
//                     {item.listItems.map((listItem, listIndex) => (
//                       <li
//                         key={listIndex}
//                         className="goal-head mb-6  leading-9  text-white text-[] lg:text-[33.50px] font-bold font-Inter capitalize"
//                       >
//                         {listItem}
//                       </li>
//                     ))}
//                   </ol>
//                 </div>
//                 {/*

//             */}
//               </div>
//               {/* goal1 div2 structure Ends here */}
//             </div>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }

// export default Goal1;
