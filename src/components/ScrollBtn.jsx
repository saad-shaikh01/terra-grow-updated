// import React, { useState } from "react";
// import "../style/style.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

// function ScrollBtn() {
//   const [showButton, setShowButton] = useState(false);

//   function handleScroll() {
//     if (window.pageYOffset > 300) {
//       setShowButton(true);
//     } else {
//       setShowButton(false);
//     }
//   }

//   function handleClick() {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }

//   if (typeof window !== "undefined") {
//     window.addEventListener("scroll", handleScroll);
//   }

//   return (
//     <div>
//       {showButton && (
//         <button onClick={handleClick} className="scroll-to-top">
//           <FontAwesomeIcon icon={faArrowUp} />
//         </button>
//       )}
//       {/* code for the rest of the component goes here */}
//     </div>
//   );
// }

// export default ScrollBtn;


import React, { useState, useEffect } from "react";
import "../style/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function ScrollBtn() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShowButton(window.pageYOffset > 300);
    }

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Adding an empty dependency array to run the effect only once

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div>
      {showButton && (
        <button onClick={handleClick} className="scroll-to-top">
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
      {/* code for the rest of the component goes here */}
    </div>
  );
}

export default ScrollBtn;
