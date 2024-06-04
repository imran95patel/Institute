import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WebFont from "webfontloader";

import img from "../assets/JavaScript-logo.png";
import img2 from "../assets/React.png";
import img3 from "../assets/Node.png";
import img4 from "../assets/Python.png";
import img5 from "../assets/java.png";
import img6 from "../assets/Mongo.png";

import GoogleFontLoader from "react-google-font-loader";
import Layout from "../components/Layout";

const Courses = () => {
  return (
    <>
      <GoogleFontLoader fonts={[{ font: "Play", weights: [400, 700] }]} />
      <div className="mx-auto m-0 max-w-1920 w-auto relative mb-72 ">
        <div className="relative w-full h-[200vh] rounded-t-[40px]">
          <div className="absolute top-32 left-14 w-36 p-1 py-2 rounded-md bg-[#03E9F4]  text-center text-black font-bold text-sm  xs:top-16 sm:py-4 sm:w-52 lg:w-60  ">
            <div
              className="flex justify-center items-center h-full xs:py-[0.5px] xs:px-2 xs:text-xs sm:text-[16px] lg:text-[20px]  "
              style={{ fontFamily: "Play" }}
            >
              Courses
            </div>
          </div>
          <div
            className="absolute top-44 left-14 text-4xl text-black font-bold xs:text-lg xs:top-32 lg:text-[24px]"
            style={{ fontFamily: "Play" }}
          >
            Where Knowledge Meets Opportunity.
            <p>Education Without Limits.</p>
          </div>

          <div className="flex flex-wrap h-auto justify-between w-full relative xs:grid xs:grid-cols-1 md:grid md:grid-cols-2 xl:grid xl:grid-cols-3 md:mb-0 md:pb-0">
            <div
              className="card1 relative rounded-lg w-[25vw] h-[65vh] border-2 mx-12 mb-12  mt-72  xs:w-[260px] sm:ml-36 sm:w-[360px] md:w-[300px] md:ml-10 lg:w-[400px] xl:w-[370px] hover:bg-green-200"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.17) 0px -2px 2px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -7px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 1px 2px, rgba(0, 0, 0, 0.09) 0px 2px 4px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 10px 10px",
              }}
            >
              <FontAwesomeIcon
                style={{ color: "#03E9F4" }}
                className="h-10 w-10 ml-32 mt-6 absolute"
              />
              <div className="w-32 ml-28 pt-12 xs:ml-20 xs:w-20 sm:ml-32 md:ml-24 lg:ml-32 lg:w-24">
                <img src={img} alt="" />
              </div>

              <div className="p-6">
                <h5
                  className="mb-2 mt-8 ml-24 text-xl leading-tight text-black font-bold xs:ml-12  xs:mt-2 sm:ml-24 md:ml-16 lg:text-[22px] lg:ml-24 "
                  style={{ fontFamily: "Play" }}
                >
                  JavaScript
                </h5>
                <p
                  className="mb-4 ml-13 text-base text-neutral-600 lg:text-[18px] lg:mt-2"
                  style={{ fontFamily: "Play" }}
                >
                  Master the language of the web with our JavaScript course.
                  From basic syntax to advanced frameworks, dive into the core
                  concepts and unleash your creativity in web development.
                </p>
                <div className="border border-[#03E9F4] h-0.5 w-16 ml-24 mt-5 mb-5 xs:ml-16 sm:ml-28 md:ml-20 lg:ml-28 lg:w-28 lg:mt-10 xl:ml-24"></div>
              </div>
            </div>

            <div
              className="card02 relative rounded-lg w-[25vw] h-[65vh] border-2 mx-12 mb-12  mt-72  xs:w-[260px] xs:mt-9 sm:ml-36 sm:w-[360px] md:w-[300px] md:ml-10 md:mt-72 lg:w-[400px] xl:w-[370px] lg:mt-72 hover:bg-green-200"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.17) 0px -2px 2px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -7px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 1px 2px, rgba(0, 0, 0, 0.09) 0px 2px 4px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 10px 10px",
              }}
            >
              <FontAwesomeIcon
                style={{ color: "#03E9F4" }}
                className="h-10 w-10 ml-32 mt-6 absolute"
              />
              <div className="w-32 ml-28 pt-12 xs:ml-20 xs:w-20 sm:ml-32 md:ml-24 lg:ml-32 lg:w-24">
                <img src={img2} alt="" />
              </div>

              <div className="p-6">
                <h5
                  className="mb-2 mt-8 ml-24 text-xl leading-tight text-black font-bold xs:ml-14 xs:mt-2 sm:ml-28 md:ml-16 lg:text-[22px] lg:ml-24 "
                  style={{ fontFamily: "Play" }}
                >
                  React js
                </h5>
                <p
                  className="mb-4 ml-13 text-base text-neutral-600 lg:text-[18px] lg:mt-2"
                  style={{ fontFamily: "Play" }}
                >
                  Take your web development skills to the next level with our
                  ReactJS course. Learn how to build dynamic and interactive
                  user interfaces with the most popular JavaScript library used
                  by top companies worldwide.
                </p>
                <div className="border border-[#03E9F4] h-0.5 w-16 ml-24 mt-5 mb-5 xs:ml-16 sm:ml-28 md:ml-20 lg:ml-28 lg:w-28 lg:mt-10 xl:ml-24"></div>
              </div>
            </div>

            <div
              className="card03 relative rounded-lg w-[25vw] h-[65vh] border-2 mx-12 mb-12  mt-72  xs:w-[260px] xs:mt-9 sm:ml-36 sm:w-[360px] md:w-[300px] md:ml-10 lg:w-[400px] xl:w-[370px] md:mt-10 xl:mt-72 hover:bg-green-200"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.17) 0px -2px 2px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -7px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 1px 2px, rgba(0, 0, 0, 0.09) 0px 2px 4px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 10px 10px",
              }}
            >
              <FontAwesomeIcon
                style={{ color: "#03E9F4" }}
                className="h-10 w-10 ml-32 mt-6 absolute"
              />
              <div className="w-32 ml-28 pt-12 xs:ml-20 xs:w-20 sm:ml-32 md:ml-24 lg:ml-32 lg:w-24">
                <img src={img3} alt="" />
              </div>

              <div className="p-6">
                <h5
                  className="mb-2 mt-8 ml-24 text-xl leading-tight text-black font-bold xs:ml-14 xs:mt-2 sm:ml-28 md:ml-16 lg:text-[22px] lg:ml-24 xl:ml-28"
                  style={{ fontFamily: "Play" }}
                >
                  Node js
                </h5>
                <p
                  className="mb-4 ml-13 text-base text-neutral-600 lg:text-[18px] lg:mt-2"
                  style={{ fontFamily: "Play" }}
                >
                  Discover the power of server-side JavaScript with Node.js.
                  Explore its event-driven architecture and non-blocking I/O
                  model to build scalable web applications and APIs.
                </p>
                <div className="border border-[#03E9F4] h-0.5 w-16 ml-24 mt-5 mb-5 xs:ml-16 sm:ml-28 md:ml-20 lg:ml-28 lg:w-28 lg:mt-10 xl:ml-24"></div>
              </div>
            </div>
            <div
              className="card04 relative rounded-lg w-[25vw] h-[65vh] border-2 mx-12 mb-12 mt-72 xs:w-[260px] xs:mt-9 sm:ml-36 sm:w-[360px] md:w-[300px] md:ml-10 lg:w-[400px] xl:w-[370px] md:mt-10 hover:bg-green-200 "
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.17) 0px -2px 2px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -7px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 1px 2px, rgba(0, 0, 0, 0.09) 0px 2px 4px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 10px 10px",
              }}
            >
              <FontAwesomeIcon
                style={{ color: "#03E9F4" }}
                className="h-10 w-10 ml-32 mt-6 absolute"
              />
              <div className="w-32 ml-28 pt-12 xs:ml-20 xs:w-20 sm:ml-32 md:ml-24 lg:ml-32 lg:w-24">
                <img src={img4} alt="" />
              </div>

              <div className="p-6">
                <h5
                  className="mb-2 mt-8 ml-24 text-xl leading-tight text-black font-bold xs:ml-16 xs:mt-2 sm:ml-28 md:ml-16 lg:text-[22px] lg:ml-24 xl:ml-28 "
                  style={{ fontFamily: "Play" }}
                >
                  Python
                </h5>
                <p
                  className="mb-4 ml-13 text-base text-neutral-600 lg:text-[18px] lg:mt-2"
                  style={{ fontFamily: "Play" }}
                >
                  Journey into the versatile world of Python programming. From
                  basic syntax to advanced topics like data analysis and web
                  scraping, uncover the breadth of possibilities with Python.
                </p>
                <div className="border border-[#03E9F4] h-0.5 w-16 ml-24 mt-5 mb-5 xs:ml-16 sm:ml-28 md:ml-20 lg:ml-28 lg:w-28 lg:mt-10 xl:ml-24"></div>
              </div>
            </div>

            <div
              className="card05 relative rounded-lg w-[25vw] h-[65vh] border-2 mx-12 mb-12  mt-72  xs:w-[260px] xs:mt-9 sm:ml-36 sm:w-[360px] md:w-[300px] md:ml-10 lg:w-[400px] xl:w-[370px] md:mt-10 hover:bg-green-200"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.17) 0px -2px 2px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -7px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 1px 2px, rgba(0, 0, 0, 0.09) 0px 2px 4px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 10px 10px",
              }}
            >
              <FontAwesomeIcon
                style={{ color: "#03E9F4" }}
                className="h-10 w-10 ml-32 mt-6 absolute"
              />
              <div className="w-32 ml-28 pt-12 xs:ml-20 xs:w-20 sm:ml-32 md:ml-24 lg:ml-32 lg:w-24">
                <img src={img5} alt="" />
              </div>

              <div className="p-6">
                <h5
                  className="mb-2 mt-8 ml-24 text-xl leading-tight text-black font-bold xs:ml-20 xs:mt-1 sm:ml-32 md:ml-16 lg:text-[22px] lg:ml-24  xl:ml-32"
                  style={{ fontFamily: "Play" }}
                >
                  Java
                </h5>
                <p
                  className="mb-4 ml-13 text-base text-neutral-600 lg:text-[18px] lg:mt-2"
                  style={{ fontFamily: "Play" }}
                >
                  Embark on a comprehensive Java course covering object-oriented
                  programming, data structures, and algorithms. Build a solid
                  foundation for enterprise application development and Android
                  app creation.
                </p>
                <div className="border border-[#03E9F4] h-0.5 w-16 ml-24 mt-5 mb-5 xs:ml-16 sm:ml-28 md:ml-20 lg:ml-28 lg:w-28 lg:mt-10 xl:ml-24"></div>
              </div>
            </div>

            <div
              className="card06 relative rounded-lg w-[25vw] h-[65vh] border-2 mx-12 mb-12  mt-72  xs:w-[260px] xs:mt-9 sm:ml-36 sm:w-[360px] md:w-[300px] md:ml-10 lg:w-[400px] xl:w-[370px] md:mt-10 hover:bg-green-200"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.17) 0px -2px 2px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -7px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 1px 2px, rgba(0, 0, 0, 0.09) 0px 2px 4px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 10px 10px ",
              }}
            >
              <FontAwesomeIcon
                style={{ color: "#03E9F4" }}
                className="h-10 w-10 ml-32 mt-6 absolute"
              />
              <div className="w-32 ml-28 pt-12 xs:ml-20 xs:w-20 sm:ml-32 md:ml-24 lg:ml-32 lg:w-24">
                <img src={img6} alt="" />
              </div>

              <div className="p-6">
                <h5
                  className="mb-2 mt-8 ml-24 text-xl leading-tight text-black font-bold xs:ml-12 xs:mt-1 sm:ml-24 md:ml-16 lg:text-[22px] lg:ml-24 xl:ml-24 "
                  style={{ fontFamily: "Play" }}
                >
                  MongoDB
                </h5>
                <p
                  className="mb-4 ml-13 text-base text-neutral-600 lg:text-[18px] lg:mt-2"
                  style={{ fontFamily: "Play" }}
                >
                  the leading NoSQL database. Master data storage, retrieval,
                  and manipulation. Learn indexing, aggregation, and replication
                  for scalable applications.
                </p>
                <div className="border border-[#03E9F4] h-0.5 w-16 ml-24 mt-5 mb-5 xs:ml-16 sm:ml-28 md:ml-20 lg:ml-28 lg:w-28 lg:mt-10 xl:ml-24"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
