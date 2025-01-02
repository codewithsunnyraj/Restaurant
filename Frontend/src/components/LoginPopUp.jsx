import React, { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";

const LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  return (
    <div className="absolute z-10 flex justify-center items-center px-4 md:px-0 w-full h-full bg-[#00000090]">
      <div className="bg-white  w-[450px] p-10 rounded-lg shadow-md ">
        <form className="">
          <div className=" flex justify-between">
            <h2 className="font-bold text-xl">{currState}</h2>
            <div>
              <img
                src={assets.cross_icon}
                className="cursor-pointer"
                onClick={() => {
                  setShowLogin(false);
                }}
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col space-y-4 mt-4 md:mt-8 ">
            {currState === "Login" ? (
              <></>
            ) : (
              <input
                type="text"
                className="p-2 border-2 border-gray-200 rounded-sm"
                placeholder="Your Name"
                required
              />
            )}

            <input
              type="email"
              className="p-2 border-2 border-gray-200 rounded-sm"
              placeholder="Your Email"
              required
            />
            <input
              type="password"
              className="p-2 border-2 border-gray-200 rounded-sm"
              placeholder="Your Password"
              required
            />
          </div>
          <div>
            <button className="bg-orange-500 text-white w-full p-2 font-bold rounded-md my-3 md:my-5 cursor-pointer">
              {currState === "Sign Up" ? "Create Account" : "Login"}
            </button>
          </div>
          <div className="flex items-baseline gap-2 my-3">
            <input type="checkbox" required />
            <p>I agree to the term of use & privacy policy</p>
          </div>
          {currState === "Sign Up" ? (
            <div className="flex justify-between">
              <p>Already Have an Account?</p>
              <span
                className="cursor-pointer text-orange-500 font-bold"
                onClick={() => {
                  setCurrState("Login");
                }}
              >
                Login Here
              </span>
            </div>
          ) : (
            <div className="flex justify-between">
              <p>Create a Account</p>
              <span
                className="cursor-pointer text-orange-500 font-bold"
                onClick={() => {
                  setCurrState("Sign Up");
                }}
              >
                Click Here
              </span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPopUp;
