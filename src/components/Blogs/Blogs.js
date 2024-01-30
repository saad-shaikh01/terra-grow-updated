import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Circles } from "react-loader-spinner";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(12);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get(
    //       `https://accessible-bubble-25ccb03cca.strapiapp.com/api/blogs?populate=*&sort[0]=createdAt:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
    //     );

    //     // Assuming your API response has a property like `total` representing the total count
    //     setTotalCount(response.data.total);

    //     // Update the blogs state with the fetched data
    //     setBlogs(response.data?.data); // Adjust this line based on your actual API response structure
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // };

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://accessible-bubble-25ccb03cca.strapiapp.com/api/blogs?populate=*&sort[0]=createdAt:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
        );
    
        // Assuming your API response has a property like `total` representing the total count
        setTotalCount(response.data.total);
    
        // Check if 'data' property exists in the response before setting the state
        if (response.data && response.data.data) {
          // Update the blogs state with the fetched data
          setBlogs(response.data.data);
        } else {
          // Handle the case where 'data' property is missing or null
          console.error("Invalid API response format: 'data' property not found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    

    fetchData();
  }, [page, pageSize]); // The useEffect will re-run whenever `page` or `pageSize` changes

  return (
    <>
      <section className="blogpage-main w-full   flex justify-center relative top-[0px] py-[100px] lg:pb-[312px]">
        <div className={`w-full min-h-[100vh] xl:max-w-[1240px] relative`}>
          {/* <div className={`absolute top-[-20px]`}>
            <Image src={bgImage} alt="image" />
          </div> */}
          <div className="relative top-[40px] flex flex-col  gap-y-[32px] px-[30px] md:px-[80px]">
            <h1 className="text-[32px] lg:text-[48px] font-poppins font-bold text-white xl:text-center">
              Blogs
            </h1>
            <div className="flex  gap-x-[32px] gap-y-[40px] overflow-scroll lg:overflow-hidden lg:flex-wrap">
              {blogs !== undefined ? (
                blogs?.length ? (
                  blogs?.map((blog, ind) => {
                    let today = new Date(blog?.attributes?.createdAt);
                    let options = {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    };
                    let formattedDate = today.toLocaleDateString(
                      "en-US",
                      options
                    );

                    return (
                      <Link
                        to={`/blogs/${blog?.attributes?.slug}`}
                        className="w-full md:w-[230px]  pb-[0px] bg-[#4DA164] flex flex-col"
                        key={ind}
                      >
                        <div className="img-container w-[230px] h-[210px]">
                          <img
                            // unoptimized={true}
                            // src={`http://localhost:1337${blog?.attributes?.thumbnail?.data?.attributes?.url}`}
                            src={`${blog?.attributes?.thumbnail?.data[0]?.attributes?.url}`}
                            alt="img"
                            className="w-[100%] h-[100%] object-cover"
                            // width={100}
                            // height={100}
                          />
                        </div>
                        <div className="px-[27px] py-[20px] text-white bg-[#4DA164]">
                          <span className="text-[16px] font-oswald font-bold">
                            {blog?.attributes?.title}
                          </span>
                          {/* <p className="text-[12px] font-jakarta text-[#000000] text-opacity-[50%] pt-[18px]">
                          {formattedDate}
                        </p> */}
                        </div>
                      </Link>
                    );
                  })
                ) : (
                  <div
                    style={{
                      position: "absolute",
                      top: "20rem",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: 9,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      height: "200vh",
                      backgroundSize: "cover",
                      // backgroundColor: "red",
                      // backgroundColor: "rgba(0, 0, 0, 0.1)",
                      // backdropFilter: "blur(25px)",
                    }}
                  >
                    {totalCount > 0 ? (
                      // Data not found message
                      <p style={{ color: "white",  fontSize: "18px" }}>
                        Data not found
                      </p>
                    ) : (
                      // Loader component
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
                    )}
                  </div>
                )
              ) : (
                <p className="w-full text-center text-[red] my-[3rem]">
                  !No data Founds
                </p>
              )}
            </div>
            {totalCount > blogs?.length ? (
              <button
                className="w-fit px-[40px] mx-auto uppercase font-['Poppins']"
                // onClick={onPageChange}
              >
                Read More
              </button>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
