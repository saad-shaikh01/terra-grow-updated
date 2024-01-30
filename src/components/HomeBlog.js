import React,{useEffect} from "react";
import "../style/style.css";
import blogimg1 from '../Assets/Blog/Blog-img1.png'
import AOS from "aos";
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

function HomeBlog() {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, [])

    const blogData = [
        {
          id: 1,
          title: "The Benefits of Hydroponics",
          description: "Learn how hydroponics can revolutionize farming practices",
          image: blogimg1,
        },
        {
            id: 2,
            title: "The Benefits of Hydroponics",
            description: "Learn how hydroponics can revolutionize farming practices",
            image: blogimg1,
          },
          {
            id: 3,
            title: "The Benefits of Hydroponics",
            description: "Learn how hydroponics can revolutionize farming practices",
            image: blogimg1,
          },
          {
            id: 4,
            title: "The Benefits of Hydroponics",
            description: "Learn how hydroponics can revolutionize farming practices",
            image: blogimg1,
          },
        // Add more blog entries as needed
      ];


      
  return (
    <div className='py-12 min-h-[100vh] flex items-center justify-center blog-main'>
      <div>
        <p data-aos="fade-down" className='text-[#3BA164] text-center text-base font-semibold font-Inter leading-normal '>Hydroponics</p>
        <h1 data-aos="fade-down" className='text-white text-center  text-xl md:text-[50px] font-bold font-Inter leading-[44px] pt-2 sm:pt-4'>Discover the Latest Blogs</h1>
        <p data-aos="fade-down" className=' text-center text-neutral-300 text-md px-2 lg:text-xl font-normal pt-2 sm:pt-4 font-Inter leading-[30px]'>Stay updated with our informative blog posts</p>

        {/* Blogs cards Section starts here */}
        <div className='grid gap-20 sm:gap-12 lg:grid-cols-2 my-16 xl:gap-12  xl:mx-20 mx-12'>

          {/* Map through blogData array */}
          {blogData.map((blog) => (
            <div key={blog.id} className='flex-wrap lg:flex-nowrap justify-center flex gap-8 items-center w-[auto]'>
              <div className='sm:w-auto w-[100%] flex justify-center'>
                <img data-aos="fade-left" src={blog.image} className='z-[2] w-[200px] h-[200px] lg:w-[auto] lg:h-[auto] xl:h-[200px] xl:w-[200px] ' alt="" />
              </div>

              <div data-aos="fade-right" className='w-[100%] sm:w-[auto] px-1'>
                <h1 className='text-white text-2xl font-bold font-Roboto text-center sm:text-start'>{blog.title}</h1>
                <p className='text-white text-md xl:w-[320px] font-medium font-Roboto pt-4 text-center sm:text-start'>
                  {blog.description}
                </p>
              </div>
            </div>
          ))}

        </div>
        {/* Blogs cards Section ends here */}

        {/* Blog button structure starts here */}
        <div className='flex justify-center '>
          <Link to={'/blog'}>
          <button data-aos="flip-up" className='button text-white border-2 px-10 py-[10px] border-white bg-[transparent] flex'>VIEW ALL</button>
          </Link>
        </div>
        {/* Blog button structure ends here */}

      </div>
    </div>
  );
}

export default HomeBlog;
