import React, { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  return (
    <div className="w-full py-10 px-10 md:px-28">
      <div className="flex justify-between items-center">
        <div>
          <img src={assets.logo} className="cursor-pointer w-[120px] md:w-full" alt="" />
        </div>
        <div className="lg:flex hidden">
          <ul className="flex  gap-5">
            <Link
            path='/'
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
            </Link>
            <a
            href="#explore-menu"
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
            </a>
            <a href="#mobile-App"
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
            </a>
            <a href="#contact-us"
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
            </a>
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-10">
            <img src={assets.search_icon} className="w-6 h-6" alt="" />
            <div className="relative">
              <img src={assets.basket_icon} className="w-6 h-6" alt="" />
              <div className="dot absolute w-3 h-3 -top-2 -right-2 bg-orange-700 rounded-full"></div>
            </div>
            <button className="border border-orange-600 hover:bg-red-600 hover:text-white  py-1 px-6 md:px-8 rounded-full hover:border-slate-600 hover:border-none hover:duration-300 cursor-pointer transition-all">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
