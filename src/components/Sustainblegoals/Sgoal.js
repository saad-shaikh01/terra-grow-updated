import React,{useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import goalImg1 from '../../Assets/Our-Pledge/Goal1-img1.png';
import goalImg2 from '../../Assets/Our-Pledge/Goal1-img2.png';
import goalImg3 from '../../Assets/Our-Pledge/Goal1-img3.png';
import goalImg4 from '../../Assets/Our-Pledge/Goal1-img4.png';
import goalImg5 from '../../Assets/Our-Pledge/Goal1-img5.png';
import goalImg6 from '../../Assets/Our-Pledge/Goal1-img6.png';
import goalImg7 from '../../Assets/Our-Pledge/Goal1-img7.png';
import goalImg8 from '../../Assets/Our-Pledge/Goal1-img8.png';
import goalImg9 from '../../Assets/Our-Pledge/Goal1-img9.png';
import goalImg10 from '../../Assets/Our-Pledge/Goal1-img10.png';
import goalImg11 from '../../Assets/Our-Pledge/Goal1-img11.png';
import goalImg12 from '../../Assets/Our-Pledge/Goal1-img12.png';
import goalImg13 from '../../Assets/Our-Pledge/Goal1-img13.png';
import goalImg14 from '../../Assets/Our-Pledge/Goal1-img14.png';
import goalImg15 from '../../Assets/Our-Pledge/Goal1-img15.png';
import goalImg16 from '../../Assets/Our-Pledge/Goal1-img16.png';
import goalImg17 from '../../Assets/Our-Pledge/Goal1-img17.png';

const goalsData = [

  {
    id: 1,
    goalImg: goalImg1,
    heading: 'Goal 1:',
    paragraph: 'End poverty in all its forms everywhere',
  },
  
  {
    id: 2,
    goalImg: goalImg2,
    heading: 'Goal 2:',
    paragraph: 'End hunger, achieve food security and improved nutrition and promote sustainable agriculture',
    reverse: true, 
  },

  {
    id: 3,
    goalImg: goalImg3,
    heading: 'Goal 3 :',
    paragraph: 'Ensure healthy lives and promote well-being for all at all ages',
  },

  {
    id: 4,
    goalImg: goalImg4,
    heading: 'Goal 4 :',
    paragraph: 'Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all',
    reverse: true, 
  },

  {
    id: 5,
    goalImg: goalImg5,
    heading: 'Goal 5 :',
    paragraph: 'Achieve gender equality and empower all women and girls',
  },

  {
    id: 6,
    goalImg: goalImg6,
    heading: 'Goal 6 :',
    paragraph: 'Ensure availability and sustainable management of water and sanitation for all',
    reverse: true, 
  },

  {
    id: 7,
    goalImg: goalImg7,
    heading: 'Goal 7 :',
    paragraph: ' Ensure access to affordable, reliable, sustainable and modern energy for all',
  },

  {
    id: 8,
    goalImg: goalImg8,
    heading: 'Goal 8 :',
    paragraph: 'Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all',
    reverse: true, 
  },

  {
    id: 9,
    goalImg: goalImg9,
    heading: 'Goal 9 :',
    paragraph: 'Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation',
  },

  {
    id: 10,
    goalImg: goalImg10,
    heading: 'Goal 10 :',
    paragraph: ' Reduce inequality within and among countries',
    reverse: true, 
  },

  {
    id: 11,
    goalImg: goalImg11,
    heading: 'Goal 11 :',
    paragraph: 'Make cities and human settlements inclusive, safe, resilient and sustainable',
  },

  {
    id: 12,
    goalImg: goalImg12,
    heading: 'Goal 12 :',
    paragraph: 'Ensure sustainable consumption and production patterns',
    reverse: true, 
  },

  {
    id: 13,
    goalImg: goalImg13,
    heading: 'Goal 13 :',
    paragraph: 'Take urgent action to combat climate change and its impacts',
  },

  {
    id: 14,
    goalImg: goalImg14,
    heading: 'Goal 14 :',
    paragraph: 'Conserve and sustainably use the oceans, seas and marine resources for sustainable development',
    reverse: true, 
  },

  {
    id: 15,
    goalImg: goalImg15,
    heading: 'Goal 15 :',
    paragraph: 'Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss',
  },

  {
    id: 16,
    goalImg: goalImg16,
    heading: 'Goal 16 :',
    reverse: true, 
    paragraph: 'Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels',
  },

  {
    id: 17,
    goalImg: goalImg17,
    heading: 'Goal 17 :',
    paragraph: 'Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development',
  },

  // Add more data for other goals if needed
];



function Sgoal() {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, [])
  return (
    <div className="   my-0  ">
      {goalsData.map((goal, index) => (
        <div
          key={index}
          className={` mx-auto sm:flex items-center justify-between  px-8 lg:w-[900px]  my-10   gap-8 ${
            goal.reverse ? 'flex-row-reverse' : '' // Conditionally apply flex-row-reverse class
          }`}
        >
          <img 
          data-aos="fade-left" 
          src={goal.goalImg} alt="Goal" className="  z-[2] w-[250px] flex justify-center  items-center mx-auto "  />
          <div 
          data-aos="fade-right"
          className=""
          >
            <h1 className="text-white text-4xl font-bold font-Roboto md:leading-[50.53px] text-center md:text-start pt-8 md:pt-0">{goal.heading}</h1>
            <p className="text-white text-lg font-normal font-Roboto md:w-[490px] lg:w-[495px] text-center md:text-start text">{goal.paragraph}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Sgoal;