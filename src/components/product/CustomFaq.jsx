// CustomFaq.js
import React, { useState } from "react";
import "../../style/style.css"; // Import your stylesheet

const CustomFaq = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  

  const faqItems = data.rows.map((faq, index) => (
    <div key={index} className="faq-item border-[1px] border-bottom border-t-[0] border-l-[0] border-r-[0] ">
      <div
        className={`faq-question cursor-pointer py-[12px] text-white text-[18px] sm:text-[27px] font-Roboto flex justify-between items-center ${activeIndex === index ? "active" : ""}`}
        onClick={() => toggleAccordion(index)}
      >
        {faq.title} <span className={`icon ${activeIndex === index ? "rotate" : ""}`} dangerouslySetInnerHTML={{ __html: "&and;" }}></span>
      </div>
      <div
        className={`faq-answer ${activeIndex === index ? "open" : "closed"}`}
      >
        {faq.content}
      </div>
    </div>
  ));

  return <div>{faqItems}</div>;
};

export default CustomFaq;
