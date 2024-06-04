import React, { useState } from "react";
import Signup from "./Signup";
import img from "../assets/Logo.png";

const Login = (props) => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [showSignup, setShowSignup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    // Handle login logic
  };

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  const handleLogin = () => {
    // Handle login logic
  };

  return (
    <>
      {props.showModal && (
        <div
          className={`fixed inset-0 z-20 flex justify-center items-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg ${
            showSignup ? "hidden" : ""
          }`}
        >
          <div
            id="authentication-modal"
            tabIndex="-1"
            aria-hidden="true"
            className="overflow-y-auto overflow-x-hidden fixed flex z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            {/* Left side div with image */}
            <div className="h-[70vh] w-[70vh] bg-[#fdfdfd] py-10 px-10 rounded-l-xl">
              <img src={img} alt="" className="xs:mr-20" />
            </div>

            {/* Right side modal content */}
            <div className="relative h-[70vh] w-[70vh]">
              <div className="relative bg-[#f1f1f1] shadow h-[70vh] rounded-r-xl ">
                <div className="flex items-center justify-between  md:p-5 border-b rounded-t ">
                  <h3 className="text-xl font-semibold text-gray-900 ">
                    Sign in to our platform
                  </h3>
                  <button
                    type="button"
                    className="end-2.5 text-gray-900 bg-transparent hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-[#21575a] "
                    onClick={props.closeModal}
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-4 md:p-5">
                  <form className="space-y-4" onSubmit={handleSumbit}>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-[gray-300] "
                      >
                        Your Email / Username.
                      </label>
                      <input
                        type="TEXT"
                        name="email"
                        id="email"
                        autoComplete="off"
                        className="bg-grey-300 border-2 border-[#03e9f4] text-grey-900 text-sm rounded-lg block w-full p-2.5 focus:bg-[#cfd1d6]"
                        placeholder="Email. / Userna"
                        // required
                        value={loginForm.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Your password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-grey-300 border-2 border-[#03e9f4] text-grey-900 text-sm rounded-lg focus:bg-[#cfd1d6]  block w-full p-2.5 "
                        required
                        value={loginForm.password}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="remember"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 border border-black rounded bg-[#03e9f4]"
                            required
                          />
                        </div>
                        <label
                          htmlFor="remember"
                          className="ms-2 text-sm font-medium text-gray-900"
                        >
                          Remember me
                        </label>
                      </div>
                      <a
                        href="#"
                        className="text-sm text-blue-700 hover:underline"
                      >
                        Forgot Password?
                      </a>
                    </div>
                    <button
                      type="submit"
                      className="w-full focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center text-[#03e9f4] text-[20px] border-2 border-[#03e9f4] hover:text-black hover:bg-amber-400 my-4"
                      onClick={() => handleLogin()}
                    >
                      Login to your account
                    </button>
                    <div className="text-sm font-medium text-gray-900">
                      Not registered?{" "}
                      <button
                        onClick={toggleSignup}
                        className="text-blue-700 hover:underline"
                      >
                        Create account
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showSignup && <Signup closeModal={toggleSignup} />}
    </>
  );
};

export default Login;
