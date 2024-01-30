import backGroundimg2 from "../Assets/SecHeader.png";
import backGroundimg3 from "../Assets/TrdHeader.png";

const data = {
  rows: [
    {
      title: <div data-aos="fade-left" className="cursor-pointer py-[12px] text-white text-[18px] sm:text-[27px] font-Roboto flex justify-between	items-center">How does it work?</div>,
      content: (
        <p className="text-[rgba(255,255,255,0.6)] py-[10px] text-[18px] font-Roboto">
          The Food Replicator uses advanced hydroponic technology to grow fresh
          and nutritious food in a controlled environment. It utilizes sensors
          to monitor the plants’ growth and optimize their nutrient intake. The
          mobile app allows users to track the progress of their crops and
          receive notifications when it’s time to harvest.
        </p>
      ),
    },
    {
      title: <div data-aos="fade-right" className="cursor-pointer py-[12px] text-white text-[18px] sm:text-[27px] font-Roboto">Is it easy to use?</div>,
      content: (
        <p className="text-[rgba(255,255,255,0.6)] py-[10px] text-[18px] font-Roboto">
          Yes, the Food Replicator is designed to be user-friendly. The mobile
          app provides step-by-step instructions for setting up and maintaining
          the system. It also offers troubleshooting tips and access to a
          community forum where users can ask questions and share their
          experiences.
        </p>
      ),
    },
    {
      title: <div data-aos="fade-left" className="cursor-pointer py-[12px] text-white text-[18px] sm:text-[27px] font-Roboto">What can I grow?</div>,
      content: (
        <p className="text-[rgba(255,255,255,0.6)] py-[10px] text-[18px] font-Roboto">
          The Food Replicator is versatile and can grow a wide variety of
          fruits, vegetable, and herbs. From leafy greens like lettuce and
          spinach to vine crops like tomatoes and cucumbers, you can cultivate
          your favorite produce right at home. The mobile app provides
          recommendations on what plants thrive in different conditions.
        </p>
      ),
    },
    {
      title: (
        <div data-aos="fade-right" className="cursor-pointer py-[12px] text-white text-[18px] sm:text-[27px] font-Roboto">How long does it take</div>
      ),
      content: (
        <p className="text-[rgba(255,255,255,0.6)] py-[10px] text-[18px] font-Roboto">
          The growth time of plants in the Food Replicator varies depending on
          the type of crop. Leafy greens can harvested in as little as a few
          weeks, while larger fruits and vegetables may take a few months. The
          mobile app provides estimated harvest times for different plants.
        </p>
      ),
    },
    {
      title: <div data-aos="fade-left" className="cursor-pointer py-[12px] text-white text-[18px] sm:text-[27px] font-Roboto">Is it sustainable?</div>,
      content: (
        <p className="text-[rgba(255,255,255,0.6)] py-[10px] text-[18px] font-Roboto">
          Yes, the Food Replicator promotes sustainable agriculture by using
          less water and space compared to traditional farming methods. It
          eliminates the need for pesticides and reduces food waste. By growing
          your own food at home, you can contribute to a more environmentally
          friendly and self-sufficient lifestyle.
        </p>
      ),
    },
  ],
};
export default data;



export const backgroundimg = {
  backgroundImg: backGroundimg2,
  backgroundImg3: backGroundimg3,
}