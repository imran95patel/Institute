import React from "react";
import HeroSection from "../components/HeroSection";
import Courses from "./Courses";
import InterestingCards from "./InterestingCards";
import About from "./About";
import Signup from "./Signup";
import Slider from "../components/Slider";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Slider />
      <Courses />
      <InterestingCards />
      <About />
      <Signup />
      <Contact />
    </>
  );
};

export default Home;
