// // import React, { useState } from "react";
// // import "react-phone-number-input/style.css";
// // import PhoneInput from "react-phone-number-input";
// // import "../../style/style.css";

// // function Contact() {
// //   const [value, setValue] = useState();

// //   return (
// //     <div className="w-[100%] p-[20px]">
// //       <div className="flex w-[100%] items-center justify-center flex-col mb-[30px]">
// //         <h1 className="text-white text-[26px] mb-[10px] font-Roboto tracking-[1px]">
// //           Contact us
// //         </h1>
// //         <h1 className='text-white text-[28px] sm:text-[35px] font-semibold font-Roboto tracking-[1px] leading-[58.67px] mb-[10px]'>
// //           Still have questions?
// //         </h1>
// //         <p className="text-center text-white text-[18px] sm:text-[22px] font-normal font-Roboto tracking-[1px] leading-10">
// //           We’d love to hear from you. Please fill out this form.
// //         </p>
// //       </div>
// //       <form action="#" className="w-[100%] md:w-[600px] m-[auto] sm:p-[20px]">
// //         <div className="sm:flex w-[100%] sm:items-center sm:justify-center sm:gap-[30px] mb-[20px]">
// //           <div className="flex w-[100%] justify-center flex-col mb-[20px] sm:mb-[0px]">
// //             <label className="text-white mb-[5px]">First name</label>
// //             <input
// //               type="text"
// //               name=""
// //               id=""
// //               className="w-[100%] py-[10px] px-[10px] text-[17px] outline-none
// //             rounded-[8px]"
// //               placeholder="First name"
// //             />
// //           </div>
// //           <div className="flex w-[100%] justify-center flex-col">
// //             <label className="text-white mb-[5px]">Last name</label>
// //             <input
// //               type="text"
// //               name=""
// //               id=""
// //               className="w-[100%] py-[10px] px-[10px] text-[17px] outline-none
// //             rounded-[8px]"
// //               placeholder="Last name"
// //             />
// //           </div>
// //         </div>
// //         <div className="flex w-[100%] justify-center flex-col mb-[20px]">
// //           <label className="text-white mb-[5px]">Phone number</label>
// //           <div className="bg-[white] rounded-[8px]">
// //           <PhoneInput
// //             className="w-[100%] py-[10px] px-[10px] text-[17px] outline-none
// //             rounded-[8px]"
// //             defaultCountry="PK"
// //             value={value}
// //             onChange={setValue}
// //             displayInitialValueAsLocalNumber
// //             international
// //             format={(value, country) => (value ? `+${country.phone}` : "")}
// //           />
// //           </div>
// //         </div>
// //         <div className="flex w-[100%] justify-center flex-col mb-[20px]">
// //           <label className="text-white mb-[5px]">Message</label>
// //           <textarea
// //             name=""
// //             id=""
// //             className="h-40 w-[100%] py-[10px] px-[10px] text-[17px] outline-none
// //             rounded-[8px]"
// //             style={{ resize: "none" }}
// //           ></textarea>
// //         </div>
// //         <div className="flex w-[100%] justify-center flex-col mt-[30px]">
// //           <button
// //             className="bg-[#3CA164] text-[white] py-[10px] w-[100%] py-[10px] px-[6px] text-[20px] outline-none
// //             rounded-[8px]"
// //           >
// //             Send message
// //           </button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // }

// // export default Contact;

// // import React, { useState } from "react";
// // import "react-phone-number-input/style.css";
// // import PhoneInput from "react-phone-number-input";
// // import axios from "axios";
// // import "../../style/style.css";

// // function Contact() {
// //   const [value, setValue] = useState();

// //   const [formData, setFormData] = useState({
// //     firstName: "",
// //     lastName: "",
// //     phoneNumber: "",
// //     message: "",
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       // Send the form data to the backend using Axios
// //       const response = await axios.post(
// //         "http://localhost:3200/submit-form",
// //         formData
// //       );

// //       // Handle the response from the backend if needed
// //       console.log(response.data);
// //     } catch (error) {
// //       console.error("Error submitting form:", error);
// //     }
// //   };

// //   return (
// //     <div className="w-[100%] p-[20px]">
// //       <div className="flex w-[100%] items-center justify-center flex-col mb-[30px]">
// //         <h1 className="text-white text-[26px] mb-[10px] font-Roboto tracking-[1px]">
// //           Contact us
// //         </h1>
// //         <h1 className="text-white text-[28px] sm:text-[35px] font-semibold font-Roboto tracking-[1px] leading-[58.67px] mb-[10px]">
// //           Still have questions?
// //         </h1>
// //         <p className="text-center text-white text-[18px] sm:text-[22px] font-normal font-Roboto tracking-[1px] leading-10">
// //           We’d love to hear from you. Please fill out this form.
// //         </p>
// //       </div>
// //       <form
// //         onSubmit={handleSubmit}
// //         className="w-[100%] md:w-[600px] m-[auto] sm:p-[20px]"
// //       >
// //         <div className="sm:flex w-[100%] sm:items-center sm:justify-center sm:gap-[30px] mb-[20px]">
// //           <div className="flex w-[100%] justify-center flex-col mb-[20px] sm:mb-[0px]">
// //             <label className="text-white mb-[5px]">First name</label>
// //             <input
// //               type="text"
// //               name="firstName"
// //               value={formData.firstName}
// //               onChange={handleChange}
// //               className="w-[100%] py-[10px] px-[10px] text-[17px] outline-none rounded-[8px]"
// //               placeholder="First name"
// //             />
// //           </div>
// //           <div className="flex w-[100%] justify-center flex-col">
// //             <label className="text-white mb-[5px]">Last name</label>
// //             <input
// //               type="text"
// //               name="lastName"
// //               value={formData.lastName}
// //               onChange={handleChange}
// //               className="w-[100%] py-[10px] px-[10px] text-[17px] outline-none rounded-[8px]"
// //               placeholder="Last name"
// //             />
// //           </div>
// //         </div>
// //         <div className="flex w-[100%] justify-center flex-col mb-[20px]">
// //           <label className="text-white mb-[5px]">Phone number</label>
// //           <div className="bg-[white] rounded-[8px]">
// //             <PhoneInput
// //               className="w-[100%] py-[10px] px-[10px] text-[17px] outline-none rounded-[8px]"
// //               defaultCountry="PK"
// //               value={value}
// //               onChange={setValue}
// //               displayInitialValueAsLocalNumber
// //               international
// //               format={(value, country) => (value ? `+${country.phone}` : "")}
// //             />
// //           </div>
// //         </div>
// //         <div className="flex w-[100%] justify-center flex-col mb-[20px]">
// //           <label className="text-white mb-[5px]">Message</label>
// //           <textarea
// //             name="message"
// //             value={formData.message}
// //             onChange={handleChange}
// //             className="h-40 w-[100%] py-[10px] px-[10px] text-[17px] outline-none rounded-[8px]"
// //             style={{ resize: "none" }}
// //           ></textarea>
// //         </div>
// //         <div className="flex w-[100%] justify-center flex-col mt-[30px]">
// //           <button
// //             type="submit"
// //             className="bg-[#3CA164] text-[white] py-[10px] w-[100%] py-[10px] px-[6px] text-[20px] outline-none rounded-[8px]"
// //           >
// //             Send message
// //           </button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // }

// // export default Contact;

// import React, { useState } from "react";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
// import axios from "axios";
// import "../../style/style.css";
// import Swal from "sweetalert2";

// function Form() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     phoneNumber: "", // This should be a string
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "phoneNumber") {
//       // Handle phone number separately
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     } else {
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Update the form data state first
//       await new Promise((resolve) => {
//         setFormData((prevData) => ({
//           ...prevData,
//           // Add any additional form fields as needed
//         }));
//         resolve();
//       });

//       // Send the form data to the backend using Axios
//       const response = await axios.post(
//         "http://localhost:3200/submit-form",
//         formData
//       );

//       // Handle the response from the backend if needed
//       console.log(response.data);

//       // Reset the form after successful submission
//       setFormData({
//         firstName: "",
//         lastName: "",
//         phoneNumber: "",
//         message: "",
//       });
//         // Show success alert
//         // alert("Form submitted successfully!");
//         Swal.fire({
//           title: "Thanks",
//           text: "Form submitted successfully!",
//           icon: "success"
//         });
//       } catch (error) {
//         console.error("Error submitting form:", error);

//         // Show error alert
//         // alert("Error submitting form. Please try again.");
//         Swal.fire({
//           icon: "error",
//           title: "Sorry...",
//           text: "Error submitting form. Please try again.!",
//         });
//       }
//     };

//   return (
//     <div className="w-[100%] p-[20px]">
//       <div className="flex w-[100%] items-center justify-center flex-col mb-[30px]">
//         <h1 data-aos="zoom-in" className="text-white text-[26px] mb-[10px] font-Roboto tracking-[1px]">
//           Contact us
//         </h1>
//         <h1 data-aos="flip-up" className="text-white text-[28px] sm:text-[35px] font-semibold font-Roboto tracking-[1px] leading-[58.67px] mb-[10px]">
//           Still have questions?
//         </h1>
//         <p data-aos="fade-up" className="text-center text-white text-[18px] sm:text-[22px] font-normal font-Roboto tracking-[1px] leading-10">
//           We’d love to hear from you. Please fill out this form.
//         </p>
//       </div>
//       <form data-aos="fade-up"
//         onSubmit={handleSubmit}
//         className="w-[100%] md:w-[600px] m-[auto] sm:p-[20px]"
//       >
//         <div className="sm:flex w-[100%] sm:items-center sm:justify-center sm:gap-[30px] mb-[20px]">
//           <div data-aos="fade-left" className="flex w-[100%] justify-center flex-col mb-[20px] sm:mb-[0px] z-[2]">
//             <label className="text-white mb-[5px]">First name</label>
//             <input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               className="w-[100%] py-[10px] px-[10px] text-[17px] outline-none rounded-[8px]"
//               placeholder="First name"
//               required
//             />
//           </div>
//           <div data-aos="fade-right" className="flex w-[100%] justify-center flex-col z-[2]">
//             <label className="text-white mb-[5px]">Last name</label>
//             <input
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               className="w-[100%] py-[10px] px-[10px] text-[17px] outline-none rounded-[8px]"
//               placeholder="Last name"
//               required
//             />
//           </div>
//         </div>
//         <div data-aos="flip-up" className="flex w-[100%] justify-center flex-col mb-[20px] z-[2]">
//           <label className="text-white mb-[5px]">Phone number</label>
//           <div className="bg-[white] rounded-[8px]">
//           <PhoneInput
//             className="w-[100%] py-[10px] px-[10px] text-[17px] outline-none rounded-[8px]"
//             defaultCountry="US"
//             value={formData.phoneNumber}
//             onChange={(value) => handleChange({ target: { name: "phoneNumber", value } })}
//             displayInitialValueAsLocalNumber
//             international
//             format={(value, country) => (value ? `+${country.phone}` : "")}
//             required
//           />
//           </div>
//         </div>
//         <div data-aos="flip-down" className="flex w-[100%] justify-center flex-col mb-[20px] z-[2]">
//           <label className="text-white mb-[5px]">Message</label>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             className="h-40 w-[100%] py-[10px] px-[10px] text-[17px] outline-none rounded-[8px]"
//             style={{ resize: "none" }}
//             required
//           ></textarea>
//         </div>
//         <div className="flex w-[100%] justify-center flex-col mt-[30px]">
//           <button
//             type="submit"
//             className="bg-[#3CA164] text-[white] py-[10px] w-[100%] py-[10px] px-[6px] text-[20px] outline-none rounded-[8px]"
//           >
//             Send message
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Form;

import React, { useEffect, useRef } from "react";
import AOS from "aos";
import { useLocation } from "react-router-dom"; // Import useLocation hook
import "aos/dist/aos.css"; // Import the AOS styles
import TerragrowHeading3 from "../../components/TerragrowHeading3";
import UAE from "../../Assets/UAE.png";
import UK from "../../Assets/United-kingdom.png";
import AUS from "../../Assets/Australia.png";

function Contactus() {
  const location = useLocation(); // Use the useLocation hook
  const contactRef = useRef(null);
  console.log("here is ", location);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    // Check if location is defined and has state
    if (location && location.state && location.state.scrollToSection) {
      // Scroll to the contact element
      if (contactRef.current) {
        contactRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //   });

  //   // Check if props.location is defined and has state
  //   if (props.location && props.location.state && props.location.state.scrollToSection) {
  //     // Scroll to the contact element
  //     if (contactRef.current) {
  //       contactRef.current.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   }
  // }, [props.location]);

  return (
    <div className="w-full min-h-[100vh]">
      <div
        ref={contactRef}
        className="py-8 py-10 lg:py-20  w-[100%] flex items-center justify-center contact-img"
        data-aos="flip-up"
      >

        <div className="w-[80%]">
          <h1
            className="font-Roboto pt-12 text-5xl font-bold text-white pt-10 text-center"
            data-aos="fade-left"
          >
            Contact
          </h1>
          <p
            className="text-white pt-8 w-[95%] text-center"
            data-aos="fade-down"
          >
            We value your feedback and inquiries. Feel free to get in touch with
            us via email for prompt assistance. Whether you have questions about
            our services, suggestions for improvement, or any other matter,
            we're here to help.
          </p>

          <div className="pt-12">
            <h1
              className="font-Roboto text-5xl font-bold text-white text-center"
              data-aos="fade-left"
            >
              Address:
            </h1>

            <div className="grid grid-cols-2 my-12">
              <div className="flex gap-4 items-center">
                <img src={UAE} />
                <p className="text-white w-[350px]" data-aos="fade-down">
                  Sharjah UAE: Business Bay, Sharjah Publishing City Freezone,
                  United Arab Emirates (UAE)
                </p>
              </div>

              <div className="flex justify-center gap-4 items-center">
                <img src={AUS} />
                <p className="text-white w-[350px]" data-aos="fade-down">
                  Australia: PO Box 95, Bardwell Park, NSW 2207
                </p>
              </div>

              <div className="flex gap-4 items-center mt-12 bg-red-4004">
                <img src={UK} />
                <p className="text-white w-[370px]" data-aos="fade-down">
                  United Kingdom: Office 1414, 182-184 High Street North East
                  Ham, London, E6 2JA
                </p>
              </div>
            </div>
          </div>

          <div className="">
            <h1
              className="font-Roboto text-5xl pt-12 font-bold text-white text-center"
              data-aos="fade-left"
            >
              Contact Details:
            </h1>

            <div className="grid grid-cols-2 my-4 justify-center">
              <div className="w-[300px] mx-auto">
                <p className="text-white pt-4 w-[350px]" data-aos="fade-down">
                  info@terra-grow.com
                </p>
              </div>

              <div className="w-[300px] mx-auto">
                <p className="text-white pt-4 w-[350px]" data-aos="fade-down">
                  info@terra-grow.com.au
                </p>
              </div>

              <div className="w-[300px] pt-4 mx-auto">
                <p className="text-white w-[370px]" data-aos="fade-down">
                  info@drivetechnology.co
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
