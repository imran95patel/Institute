import React, { useState, useEffect, useRef } from "react";
import img1 from "../assets/Designer1.png";
import img2 from "../assets/Designer.png";
import img3 from "../assets/Designer2.png";
import img4 from "../assets/Design4.png";
import img5 from "../assets/Design3.png";

import GoogleFontLoader from "react-google-font-loader";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3, img4, img5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <GoogleFontLoader fonts={[{ font: "Righteous", weights: [400, 700] }]} />
      <GoogleFontLoader fonts={[{ font: "Unbounded", weights: [400, 700] }]} />
      <GoogleFontLoader fonts={[{ font: "Antic Slab", weights: [400, 700] }]} />
      <GoogleFontLoader
        fonts={[{ font: "Alegreya Sans SC", weights: [400, 700] }]}
      />
      <div className="mx-auto m-0 max-w-1920 w-auto relative ">
        <section className="section_top w-full h-screen relative overflow-hidden md:rounded-t-[40px]  ">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              className={`absolute inset-0 object-cover transition-opacity duration-1000 md:w-full md:h-screen xs:h-[100%] xs:object-fill  sm:h-[100%] sm:object-fill md:object-cover ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-gray-400 to-transparent opacity-60 backdrop-filter backdrop-blur-3xl"></div>
          <div className="content absolute inset-0 flex flex-col justify-center items-start text- z-10">
            <h1 className="text-7xl font-black mt-16 ml-20 ">
              <span
                style={{ fontFamily: "Righteous" }}
                className="xs:text-[24px] xs:font-normal xs:text-white  sm:text-[24px] sm:text-white md:text-[40px] lg:text-[35px] lg:text-white  2xl:text-[65px]"
              >
                Stop wasting time. Start
              </span>
            </h1>
            <span
              style={{ fontFamily: "Righteous" }}
              className="text-7xl font-black ml-20 xs:text-[24px] xs:font-normal xs:text-white sm:text-[24px] sm:text-white md:text-[40px] 2xl:text-[65px] 2xl:mb-4 lg:text-[35px] "
            >
              connecting.
            </span>
            <div className="my-2"></div>
            <h1 className="ml-20 font-semibold text-2xl mb-2">
              <span
                style={{ fontFamily: "Antic Slab" }}
                className="text-3xl font-black xs:text-[18px] xs:font-normal xs:text-white xs:leading-3 sm:text-[18px] sm:text-white md:text-[30px] 2xl:text-[40px] 2xl:leading-1 2xl:pb-2 lg:text-[22px] "
              >
                Discover Your Potential: Transforming Learning, Inspiring
                Growth.{" "}
              </span>
            </h1>
            <h1 className="mb-2">
              <span
                style={{ fontFamily: "Antic Slab" }}
                className="ml-20 font-semibold text-3xl xs:text-[18px] xs:font-normal xs:text-white sm:text-[18px] sm:text-white md:text-[30px] 2xl:text-[40px] 2xl:leading-1 lg:text-[22px]"
              >
                Join Us to Embark on an Exciting
              </span>
            </h1>

            <h1 className="mb-2">
              <span
                style={{ fontFamily: "Antic Slab" }}
                className="ml-20 font-semibold text-3xl xs:text-[18px] xs:font-normal xs:text-white sm:text-[18px] sm:text-white md:text-[30px] 2xl:text-[40px] 2xl:leading-1 lg:text-[22px]"
              >
                Journey Towards Success and
              </span>
            </h1>

            <div
              style={{ fontFamily: "Antic Slab" }}
              className="ml-20 font-semibold text-3xl mb-5 xs:text-[18px] xs:font-normal xs:text-white sm:text-[18px] sm:text-white md:text-[30px]  2xl:text-[40px] 2xl:leading-1 lg:text-[22px] "
            >
              Personal Development Today!
            </div>
            <li
              style={{ fontFamily: "Unbounded, sans-serif" }}
              className="ml-20 list-none mb-1 text-1xl font-extrabold  xs:text-[16px] xs:font-normal sm:text-[16px] md:text-[25px] lg:text-[22px]"
            >
              Dedicated 24/7 Student Supports
            </li>
            <li
              style={{ fontFamily: "Unbounded, sans-serif" }}
              className="ml-20 font-extrabold text-1xl list-none mb-1 xs:text-[16px] xs:font-normal sm:text-[16px] md:text-[25px] lg:text-[22px]"
            >
              Access to diverse courses,
            </li>
            <li
              style={{ fontFamily: "Unbounded, sans-serif" }}
              className="ml-20 font-extrabold text-1xl list-none mb-1 xs:text-[16px] xs:font-normal sm:text-[16px] md:text-[25px] lg:text-[22px] 2xl:mb-3"
            >
              personalized learning,interactive community.
            </li>
            <button
              className="text-gray-100 font-bold py-4 px-8 rounded inline-flex items-center ml-20 mt-5 bg-[#03E9F4] hover:bg-[#3dc0f3] text-xs transition duration-300 ease-in-out xs:px-4 xs:py-2 xs:ml-28 sm:ml-44 sm:px-8 sm:py-4 md:ml-32 md:px-4 md:py-4 lg:ml-[82px] 2xl:px-6 2xl:py-6 2xl:mt-[50px]"
              style={{ fontFamily: "Alegreya Sans SC" }}
            >
              <span className="text-[3vh] xs:text-[12px] sm:text-[16px] md:text-[20px] 2xl:text-[20px]">
                SEE PLANS AND DEALS
              </span>
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroSection;
