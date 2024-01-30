import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../style/style.css'; // Import your external CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

const FAQItem = ({ index, question, answer, isOpen, onToggle }) => {
  const toggleAnswerVisibility = () => {
    onToggle(index);
  };

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`} data-aos={isOpen ? 'fade-up' : ''}>
      <h3 className="faq-question" onClick={toggleAnswerVisibility} data-aos="fade-right">
        {question} <FontAwesomeIcon className="icon" icon={isOpen ? faCaretUp : faCaretDown} />
      </h3>
      {isOpen && <p className="faq-answer" data-aos="fade-up">{answer}</p>}
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [openIndex]);

  return (
    <div>
      <FAQItem
        index={0}
        question="How does it work?"
        answer="The Food Replicator uses advanced hydroponic technology to grow fresh and nutritious food in a controlled environment. It utilizes sensors to monitor the plants’ growth and optimize their nutrient intake. The mobile app allows users to track the progress of their crops and receive notifications when it’s time to harvest."
        isOpen={openIndex === 0}
        onToggle={handleToggle}
      />
      <hr className="" />
      <FAQItem
        index={1}
        question="Is it easy to use?"
        answer="Yes, the Food Replicator is designed to be user-friendly. The mobile app provides step-by-step instructions for setting up and maintaining the system. It also offers troubleshooting tips and access to a community forum where users can ask questions and share their experiences."
        isOpen={openIndex === 1}
        onToggle={handleToggle}
      />
      <hr className="" />
      <FAQItem
        index={2}
        question="What can I grow?"
        answer="The Food Replicator is versatile and can grow a wide variety of fruits, vegetables, and herbs. From leafy greens like lettuce and spinach to vine crops like tomatoes and cucumbers, you can cultivate your favorite produce right at home. The mobile app provides recommendations on what plants thrive in different conditions."
        isOpen={openIndex === 2}
        onToggle={handleToggle}
      />
      <hr className="" />
      <FAQItem
        index={3}
        question="How long does it take?"
        answer="The growth time of plants in the Food Replicator varies depending on the type of crop. Leafy greens can be harvested in as little as a few weeks, while larger fruits and vegetables may take a few months. The mobile app provides estimated harvest times for different plants."
        isOpen={openIndex === 3}
        onToggle={handleToggle}
      />
      <hr className="" />
      <FAQItem
        index={4}
        question="Is it sustainable?"
        answer="Yes, the Food Replicator promotes sustainable agriculture by using less water and space compared to traditional farming methods. It eliminates the need for pesticides and reduces food waste. By growing your own food at home, you can contribute to a more environmentally friendly and self-sufficient lifestyle."
        isOpen={openIndex === 4}
        onToggle={handleToggle}
      />
      {/* Add more FAQ items as needed */}
    </div>
  );
};

export default Faq;
