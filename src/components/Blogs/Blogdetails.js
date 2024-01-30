
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as farThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { Circles } from "react-loader-spinner";
const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState([]);
  const [isLiked, setIsLiked] = useState(false); // New state for tracking whether the user has already liked

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://accessible-bubble-25ccb03cca.strapiapp.com/api/blogs?filters[slug][$eq]=${slug}&populate=*`
        );
        setBlog(response.data?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [slug]);

  const handleLikeClick = async () => {
    if (!isLiked) {
      try {
        // Make a request to your Strapi API to update the like count
        // await axios.put(`http://localhost:1337/api/blogs/${blog[0]?.id}`, {
        //   likes: blog[0]?.attributes?.likes + 1,
        // });
        await axios.put(`https://accessible-bubble-25ccb03cca.strapiapp.com/api/blogs/${blog[0]?.id}`, {
          data: {
            likes: blog[0]?.attributes?.likes + 1,
          },
        });

        // Update the local state to reflect the new like count
        setBlog((prevBlog) => [
          {
            ...prevBlog[0],
            attributes: {
              ...prevBlog[0]?.attributes,
              likes: prevBlog[0]?.attributes?.likes + 1,
            },
          },
        ]);

        // Set isLiked to true to prevent multiple likes from the same user
        setIsLiked(true);
      } catch (error) {
        console.error("Error updating likes:", error);
      }
    }
  };

  return (
    <section className="flex justify-center py-[50px] px-[30px] bg-[#0D0D0D] md:px-[130px]  relative top-[0px]">
      <div className="pt-[50px] pb-[92px] w-full xl:max-w-[1440px]">
        {blog?.attributes ? (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 9,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100vh",
              backgroundSize: "cover",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(25px)",
            }}
          >
            <Circles
              height="80"
              width="80"
              color={"rgba(0, 157, 255, 1)"}
              secondaryColor={"rgba(0, 157, 255, 1)"}
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        ) : (
          <>
            <div className=" font-jakarta">
              <Link to="/blog">
                <span className="text-[rgb(140,140,140)] text-[14px] cursor-pointer">
                  Blog &nbsp;/&nbsp;&nbsp;
                </span>
              </Link>
              <span className="text-white text-[14px] font-bold">
                {blog[0]?.attributes?.title}
              </span>
            </div>
            <div>
              <div className="pt-[20px]  flex flex-col gap-y-[21px] justify-center md:items-center">
                <h1 className="text-[32px] font-poppins font-bold text-white lg:text-[48px]  md:text-center">
                  {blog[0]?.attributes?.title}
                </h1>
                <span className="font-roboto text-[rgb(140,140,140)]">
                  {blog[0]?.attributes?.count} Reads
                </span>
              </div>
              <div className="img-container py-[48px]">
                {blog[0]?.attributes && (
                  <img
                    // unoptimized={true}
                    src={`${blog[0]?.attributes?.cover?.data[0]?.attributes?.url}`}
                    // src={blog?.attributes?.thumbnail?.data?.attributes?.url}
                    alt="img"
                    // width={100}
                    // height={100}
                  />
                )}

              </div>
              {
                console.log(blog[0]?.attributes?.cover?.data[0]?.attributes?.url)
              }
              <div className=" md:px-[120px]  flex flex-col gap-y-[32px] font-jakarta">
                {/* <div className="flex gap-x-[9px] justify-center items-center">
                  <button  className="text-white">
                    <FontAwesomeIcon icon={faThumbsUp} />
                  </button>
                  <span className="text-[14px] text-white font-roboto">
                    {blog[0]?.attributes?.likes}
                  </span>
                </div> */}
                <div className="flex gap-x-[9px] justify-center items-center">
                  <button className="text-white" onClick={handleLikeClick}>
                    {/* <FontAwesomeIcon icon={farThumbsUp} /> */}
                    <FontAwesomeIcon
                      icon={isLiked ? faThumbsUp : farThumbsUp}
                    />
                  </button>
                  <span className="text-[14px] text-white font-roboto">
                    {blog[0]?.attributes?.likes}
                  </span>
                </div>
                <p
                  className="text-white font-roboto"
                  dangerouslySetInnerHTML={{
                    __html: blog[0]?.attributes?.description,
                  }}
                ></p>
                <p className="text-white font-roboto"></p>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default BlogDetails;
