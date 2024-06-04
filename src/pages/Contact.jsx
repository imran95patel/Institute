import React from "react";
import img from "../assets/contact.png";

const Contact = () => {
  return (
    <>
      <div className="relative ">
        <div className="text-8xl text-amber-600 font-bold absolute top-9 left ml-40 xs:text-6xl xs:mt-32 xs:ml-24">
          Contact Us
        </div>
        <div>
          <img
            src={img}
            alt=""
            className="h-[80vh] w-screen px-20 py-2 rounded-full"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
