import React, { useState } from "react";
import { FaBars, FaRegWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";
import Login from "../pages/Login";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className="bg-black 700 sticky top-0 z-20">
        <nav className="md:flex items-center justify-between py-4 md:px-10 px-7">
          <div className="font-bold text-2xl cursor-pointer flex items-center font-[poppings] text-white hover:text-amber-400">
            <Link to="/">SkillStream</Link>
          </div>

          <ul className="hidden md:flex md:items-center md:pb-0 pb-12">
            <li className="md:ml-8 text-xl md:my-0 my-7 mr-5">
              <Link
                to="/"
                className="text-white duration-500 hover:text-[#03e9f4]"
              >
                Home
              </Link>
            </li>
            <li className="md:ml-8 text-xl md:my-0 my-7 mr-5">
              <Link
                to="/courses"
                className="text-white duration-500 hover:text-[#03e9f4]"
              >
                Courses
              </Link>
            </li>
            <li className="md:ml-8 text-xl md:my-0 my-7 mr-5">
              <Link
                to="./About"
                className="text-white duration-500 hover:text-[#03e9f4]"
              >
                About
              </Link>
            </li>
            <li className="md:ml-8 text-xl md:my-0 my-7 mr-5">
              <Link
                to="/contact"
                className="text-white duration-500 hover:text-[#03e9f4]"
              >
                Contact
              </Link>
            </li>
          </ul>

          <button
            onClick={() => setShowModal(!showModal)}
            className="text-[#03e9f4] text-[20px] border-2 border-[#03e9f4] px-[30px] py-[7px] rounded hover:text-black mx-[10px] hidden md:flex md:items-center hover:bg-amber-400"
          >
            Get started
          </button>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white"
          >
            {open ? (
              <FaRegWindowClose aria-label="Close menu" />
            ) : (
              <FaBars aria-label="Open menu" />
            )}
          </div>

          {open && (
            <ul className="text-white md:hidden flex flex-col items-center">
              <li className="text-xl my-4">
                <Link
                  to="/"
                  className="text-white duration-500 hover:text-[#03e9f4]"
                >
                  Home
                </Link>
              </li>
              <li className="text-xl my-4">
                <Link
                  to="/courses"
                  className="text-white duration-500 hover:text-[#03e9f4]"
                >
                  Courses
                </Link>
              </li>
              <li className="text-xl my-4">
                <Link
                  to="/about"
                  className="text-white duration-500 hover:text-[#03e9f4]"
                >
                  About
                </Link>
              </li>
              <li className="text-xl my-4">
                <Link
                  to="/contact"
                  className="text-white duration-500 hover:text-[#03e9f4]"
                >
                  Contact
                </Link>
              </li>
              <button
                className="text-[#03e9f4] text-[20px] border-2 border-[#03e9f4] px-[30px] py-[7px] rounded hover:text-black hover:bg-[#03e9f4] my-4"
                onClick={() => setShowModal(!showModal)}
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
              >
                Get started
              </button>
            </ul>
          )}
        </nav>
      </div>
      {showModal && <Login showModal={showModal} closeModal={closeModal} />}
    </>
  );
};

export default Navbar;
