import React, { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  return (
    <div className="w-full  py-10 px-28">
      <div className="flex justify-between items-center">
        <div>
          <img src={assets.logo} className="cursor-pointer" alt="" />
        </div>
        <div className="flex">
          <ul className="flex  gap-5">
            <li
              className={`${
                menu === "Home"
                  ? "active border-b-2 pb-2 border-orange-500 "
                  : ""
              }cursor-pointer font-text-outfit`}
              onClick={() => {
                setMenu("Home");
              }}
            >
              Home
            </li>
            <li
              className={`${
                menu === "Menu"
                  ? "active border-b-2 pb-2 border-orange-500"
                  : ""
              } cursor-pointer font-text-outfit`}
              onClick={() => {
                setMenu("Menu");
              }}
            >
              Menu
            </li>
            <li
              className={`${
                menu === "Mobile-App"
                  ? "active border-b-2 pb-2 border-orange-500"
                  : ""
              } cursor-pointer font-text-outfit`}
              onClick={() => {
                setMenu("Mobile-App");
              }}
            >
              Mobile-App
            </li>
            <li
              className={`${
                menu === "Contact-Us"
                  ? "active border-b-2 pb-2 border-orange-500"
                  : ""
              } cursor-pointer font-text-outfit`}
              onClick={() => {
                setMenu("Contact-Us");
              }}
            >
              Contact-Us
            </li>
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-10">
            <img src={assets.search_icon} className="w-6 h-6" alt="" />
            <div className="relative">
              <img src={assets.basket_icon} className="w-6 h-6" alt="" />
              <div className="dot absolute w-3 h-3 -top-2 -right-2 bg-orange-700 rounded-full"></div>
            </div>
            <button className="border border-orange-600 hover:bg-red-600  py-1 px-8 rounded-full hover:border-slate-600 hover:duration-300 cursor-pointer transition-all">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
