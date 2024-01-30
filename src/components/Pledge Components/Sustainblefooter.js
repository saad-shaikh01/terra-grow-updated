import React,{useEffect} from "react";
import sustainblelogo from "../../Assets/Our-Pledge/Sustaible.png";
import { Link } from "react-router-dom";
import footerimg from "../../Assets/Our-Pledge/pledge-footer.png";
import AOS from "aos";
import 'aos/dist/aos.css';

function Sustainblefooter() {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, [])

  return (
    <>
      <div data-aos="zoom-in" className="lg:py-0 lg:h-[250px] relative flex items-center justify-center">
        <img
          src={footerimg}
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        />

        <div className="h-[250px] flex justify-center">
          <Link to="/Goalpage">
            <div className="h-[250px] w-[300px] bg-white flex items-center p-12">
              <img data-aos="flip-up" src={sustainblelogo} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sustainblefooter;
