import React from "react";
import img from "../assets/Design1.png";
import img1 from "../assets/dad.png";
import img2 from "../assets/Design2.png";

const About = () => {
  return (
    <>
      <div className="mx-auto m-0 max-w-1920 w-auto relative ">
        <section className="py-12 bg-gray-100 xs:mt-10 md:mt-16 xl:-mt-16 2xl:-mt-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <p className="mb-6">
              We are dedicated to providing the best online courses to help you
              master new skills and advance your career. Welcome to SkillStream,
              your go-to online learning platform for mastering the latest and
              most in-demand skills in web development and programming. Our
              mission is to empower individuals to enhance their technical
              abilities, advance their careers, and achieve their professional
              goals through high-quality, accessible education
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center border border-black p-1 rounded-xl hover:shadow-2xl  ">
                <img
                  src={img}
                  alt="Our Mission"
                  className="mx-auto mb-4 h-24 mt-2 rounded-xl"
                />
                <h3 className="text-xl font-bold">Our Mission</h3>
                <p>
                  To deliver high-quality online education.Our courses are
                  created and taught by experienced professionals who are
                  passionate about sharing their knowledge and helping you
                  succeed.
                </p>
              </div>
              <div className="text-center  border border-black p-1 rounded-xl hover:shadow-2xl ">
                <img
                  src={img1}
                  alt="Our Vision"
                  className="mx-auto mb-4 h-24 mt-2 rounded-xl"
                />
                <h3 className="text-xl font-bold">Our Vision</h3>
                <p>
                  Empowering individuals through education.Learn at your own
                  pace with our flexible course offerings. Whether you prefer
                  self-paced learning or live sessions, we have options that fit
                  your schedule.
                </p>
              </div>
              <div className="text-center border border-black p-1 rounded-xl hover:shadow-2xl ">
                <img
                  src={img2}
                  alt="Our Values"
                  className="mx-auto mb-4 h-24 mt-2 rounded-xl"
                />
                <h3 className="text-xl font-bold">Our Values</h3>
                <p>
                  Commitment to excellence and innovation.Equip yourself with
                  the skills that are in high demand in the tech industry. Our
                  courses are designed to help you build a strong portfolio and
                  advance your career.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
