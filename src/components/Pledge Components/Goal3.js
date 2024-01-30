// import React, { useEffect } from "react";
// import goal1 from "../../Assets/Our-Pledge/Goal.png";
// import pledgelogo from "../../Assets/Our-Pledge/Pledge-logo.png";
// import Reviewbg from "../../Assets/Our-Pledge/goal3-bg.png";
// import pledgelogo1 from "../../Assets/Our-Pledge/teragrow-logo.png";
// import AOS from "aos";
// import "aos/dist/aos.css";

// function Goal3() {
//   useEffect(() => {
//     AOS.init({ duration: 2000 });
//   }, []);

//   return (
//     <div className="lg:py-0  min-h-[100vh]  lg:px-[0] xl:px-[0] md:px-16 w-full relative  items-center justify-center">
//       <div className="flex justify-end h-[0px] relative lg:top-20 top-8">
//         <img src={pledgelogo1} className="h-[50px]" />
//       </div>

//       <img
//         data-aos="flip-up"
//         src={Reviewbg}
//         className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
//       />
//       <div className=" min-h-[100vh]  lg:px-[83px] xl:px-[83px]  goal3-main gap-16 lg:flex  items-center">
//         {/* goal3 div1 structure starts here */}
//         <div data-aos="fade-left" className="w-[100%]  lg:w-[50%]">
//           <div className="flex gap-4 items-center">
//             <img src={goal1} className=" h-[80px]" />
//             <h1 className="text-sky-500 text-[100px] font-bold font-Roboto tracking-[17.90px]  goal-head z-[4]">
//               #3
//             </h1>
//           </div>

//           <h1 className="lg:w-[500px]  xl:w-[100%] md:w-[600.05px] text-white md:text-[50.99px] font-bold font-Inter goal-head text-3xl lg:text-[68px] lg:leading-[76px] md:leading-[50px]">
//             Ensure healthy lives and promote well-being for all at all ages
//           </h1>
//         </div>
//         {/* goal3 div1 structure Ends here */}

//         {/* goal3 div2 structure starts here */}
//         <div
//           data-aos="fade-right"
//           className="w-[100%] pt-8 lg:pt-[130px]  pb-[256px]   lg:pt-0 lg:w-[50%]"
//         >
//           <img src={pledgelogo} className="w-[270px] h-[83px]" />

//           <div className="pl-[50px]">
//             <ol>
//               <li className="goal-head  leading-9 text-white text-[33.50px] font-bold font-Inter capitalize">
//                 Establish a community health and wellness program, reaching
//                 5,000 users with educational resources on nutrition and healthy
//                 eating.
//               </li>

//               <li className="goal-head  leading-9 mt-4 text-white text-[33.50px] font-bold font-Inter capitalize">
//                 Measure a 20% reduction in diet-related health issues, such as
//                 obesity and diabetes, among Food Replicator users.
//               </li>

//               <li className="goal-head leading-9 mt-4 text-white text-[33.50px] font-bold font-Inter capitalize">
//                 Offer a free health tracking app for Food Replicator users to
//                 monitor their improved health metrics over time.
//               </li>

//               <li className="goal-head  leading-9 mt-4 text-white text-[33.50px] font-bold font-Inter capitalize">
//                 Collaborate with healthcare providers to offer incentives for
//                 Food Replicator users who maintain healthier lifestyles.
//               </li>
//             </ol>
//           </div>
//         </div>
//         {/* goal3 div2 structure Ends here */}
//       </div>
//     </div>
//   );
// }

// export default Goal3;
