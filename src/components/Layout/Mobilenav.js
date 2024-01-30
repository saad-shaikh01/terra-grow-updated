// import { Link, useLocation } from "react-router-dom";
// import React from "react";

// const Mobilenav = ({ closeMobileMenu }) => {
//   const location = useLocation();

//   return (
//     <div className="fixed top-0 z-40 bg-[#020617] flex items-center justify-center w-full h-[100vh] backdrop-blur-[5px] pt-[40px]">
//       <div className=" ">
//         <ul className="flex flex-col gap-y-[24px] justify-center items-center text-[26px] font-oswald font-bold text-white">
//           <Link to="/" onClick={closeMobileMenu}>
//             <li
//               className={`${
//                 location.pathname === "/" ? "text-[#ffffff]" : "text-[white] "
//               }`}
//             >
//               HOME
//             </li>
//           </Link>
//           <Link to="/our-pledge" onClick={closeMobileMenu}>
//             <li
//               className={`${
//                 location.pathname === "/our-pledge"
//                   ? "text-[#ffffff]"
//                   : "text-[white] "
//               }`}
//             >
//               OUR PLEDGE
//             </li>
//           </Link>
//           <Link to="/product" onClick={closeMobileMenu}>
//             <li
//               className={`${
//                 location.pathname === "/product"
//                   ? "text-[#ffffff]"
//                   : "text-[white] "
//               }`}
//             >
//               PRODUCTS
//             </li>
//           </Link>
//           <Link to="/blog" onClick={closeMobileMenu}>
//             <li
//               className={`${
//                 location.pathname === "/blog" ||
//                 location.pathname.startsWith("/blog")
//                   ? "text-[#ffffff]"
//                   : "text-[white] "
//               }`}
//             >
//               BLOGS
//             </li>
//           </Link>
//           <Link to="/contact" onClick={closeMobileMenu}>
//             <li
//               className={`${
//                 location.pathname === "/contact" ||
//                 location.pathname === "/contact"
//                   ? "text-[#ffffff]"
//                   : "text-[white] "
//               }`}
//             >
//               CONTACT US
//             </li>
//           </Link>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Mobilenav;


import { Link, useLocation } from "react-router-dom";
import React from "react";

const Mobilenav = ({ closeMobileMenu }) => {
  const location = useLocation();

  // Function to check if the route is active
  const isActiveRoute = (route) => {
    return location.pathname === route;
  };

  return (
    <div className="fixed top-0 z-40 bg-[#000B15] flex items-center justify-center w-full h-[100vh] backdrop-blur-[5px] pt-[40px]">
      <div className=" ">
        <ul className="flex flex-col gap-y-[24px] justify-center items-center text-[26px] font-oswald font-bold text-white">
          <Link to="/" onClick={closeMobileMenu}>
            <li
              className={`${
                isActiveRoute("/") ? "text-[#ffffff] border-b-[1px] border-b-[white]" : "text-[white] border-b-[1px] border-transparent"
              }`}
            >
              HOME
            </li>
          </Link>
          <Link to="/our-pledge" onClick={closeMobileMenu}>
            <li
              className={`${
                isActiveRoute("/our-pledge") ? "text-[#ffffff] border-b-[1px] border-b-[white]" : "text-[white] border-b-[1px] border-transparent"
              }`}
            >
              OUR PLEDGE
            </li>
          </Link>
          <Link to="/product" onClick={closeMobileMenu}>
            <li
              className={`${
                isActiveRoute("/product") ? "text-[#ffffff] border-b-[1px] border-b-[white]" : "text-[white] border-b-[1px] border-transparent"
              }`}
            >
              PRODUCTS
            </li>
          </Link>
          <Link to="/blog" onClick={closeMobileMenu}>
            <li
              className={`${
                isActiveRoute("/blog") ? "text-[#ffffff] border-b-[1px] border-b-[white]" : "text-[white] border-b-[1px] border-transparent"
              }`}
            >
              BLOGS
            </li>
          </Link>
          <Link to="/contact" onClick={closeMobileMenu}>
            <li
              className={`${
                isActiveRoute("/contact") ? "text-[#ffffff] border-b-[1px] border-b-[white]" : "text-[white] border-b-[1px] border-transparent"
              }`}
            >
              CONTACT US
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Mobilenav;

