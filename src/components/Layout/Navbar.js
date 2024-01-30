import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TGlogo from "../../Assets/Re-used/Logo.png";
import Mobilenav from "./Mobilenav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// ... (your existing imports)

function Navbar({ services, developments, route }) {
  const [isSticky, setIsSticky] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Scroll to the top when the location changes
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    // Scroll to the top after the component has mounted
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  const isActiveRoute = (route) => {
    return location.pathname.startsWith(route);
  };

  const closeMobileMenu = () => {
    setOpenMobileMenu(false);
  };

  const handleNavigation = (to) => {
    // Check if the navigation is within the same page
    const isSamePage = to === location.pathname;

    // Toggle smooth scroll based on whether it's the same page or not
    document.body.style.scrollBehavior = isSamePage ? 'smooth' : 'auto';

    // Use navigate instead of history.replace
    navigate(to);

    // After the navigation, reset the scroll behavior to the default
    setTimeout(() => {
      document.body.style.scrollBehavior = 'auto';
    }, 1000); // Adjust the timeout value if needed
  };

  return (
    <>
      <header
        className={`font-Rubik w-[100%] dt-nav px-[] xl:px-[] lg:px-[] ${
          route === "/" ? " z-10" : ""
        } md:px-[] py-[] md:py-[] fixed top-0 z-[200] flex justify-center ${
          isSticky ? "bg-[#000B15] shadow-md" : ""
        }`}
      >
        {isActive && (
          <div className="absolute left-0 top-[100px] w-full h-screen bg-[#000B15] backdrop-blur-[5px] z-[99]"></div>
        )}
        <div className="w-full h-[80px] grid grid-cols-2 md:flex items-center justify-center xl:justify-start gap-x-[0px]">
          <div className="bg-[] relative md:flex items-center justify-end pr-[60px] xl:justify-center w-[100%]">
            <div className="ml-[20px] md:ml-[0px] md:absolute md:left-[70px] md:bottom-[1] flex gap-x-2 items-center w-32 lg:w-48 h-[45px]">
              <a href="/" onClick={() => handleNavigation("/")}>
                <img src={TGlogo} className="w-48" alt="img" />
              </a>
            </div>

            <div className="">
              <ul
                className="gap-x-[30px] xl:gap-x-[40px] items-center hidden md:flex justify-center font-roboto"
                id="navbar-example2"
              >
                <Link to="/" onClick={() => handleNavigation("/")}>
                  <li
                    className={`${
                      location.pathname === "/" ? "text-[#ffffff] border-b-[white]" : "text-white"
                    }  lg:text-[14px] font-normal font-Rubik tracking-widest text-[10px] border-b-[1px] border-transparent duration-300 ease-in-out hover:border-b-[white]`}
                  >
                    HOME
                  </li>
                </Link>

                <Link to="/our-pledge" onClick={() => handleNavigation("/our-pledge")}>
                  <li
                    className={`${
                      location.pathname === "/our-pledge" ? "text-[#ffffff] border-b-[white]" : "text-white"
                    }  lg:text-[14px] font-normal font-Rubik tracking-widest text-[10px] border-b-[1px] duration-300 ease-in-out border-transparent hover:border-b-[white]`}
                  >
                    OUR PLEDGE
                  </li>
                </Link>

                <Link to="/product" onClick={() => handleNavigation("/product")}>
                  <li
                    className={`${
                      location.pathname === "/product" ? "text-[#ffffff] border-b-[white]" : "text-white"
                    } lg:text-[14px] font-normal font-Rubik tracking-widest text-[10px] border-b-[1px] duration-300 ease-in-out border-transparent hover:border-b-[white]`}
                  >
                    PRODUCTS
                  </li>
                </Link>

                <Link to="/blog" onClick={() => handleNavigation("/contact")}>
                  <li
                    className={`${
                      location.pathname === "/contact" ? "text-[#ffffff] border-b-[white]" : "text-white"
                    }  lg:text-[14px] font-normal font-Rubik tracking-widest text-[10px] duration-300 ease-in-out border-b-[1px] border-transparent hover:border-b-[white]`}
                  >
                    BLOGS
                  </li>
                </Link>
                <Link to="/contact" onClick={() => handleNavigation("/contact")}>
                  <li
                    className={`${
                      location.pathname === "/contact" ? "text-[#ffffff] border-b-[white]" : "text-white"
                    }  lg:text-[14px] font-normal font-Rubik tracking-widest text-[10px] duration-300 ease-in-out border-b-[1px] border-transparent hover:border-b-[white]`}
                  >
                    CONTACT US
                  </li>
                </Link>
              </ul>
            </div>
          </div>

          {!openMobileMenu ? (
            <FontAwesomeIcon
              icon={faBars}
              className="ml-auto mr-4 -4 md:hidden text-[#E2E2E2] text-[20px]"
              onClick={() => setOpenMobileMenu(true)}
            />
          ) : (
            <FontAwesomeIcon
              icon={faTimes}
              className="md:hidden ml-auto mr-4 -4 text-[#E2E2E2] text-[20px]"
              onClick={() => setOpenMobileMenu(false)}
            />
          )}
        </div>
      </header>

      {openMobileMenu && <Mobilenav closeMobileMenu={closeMobileMenu} />}
    </>
  );
}

export default Navbar;
