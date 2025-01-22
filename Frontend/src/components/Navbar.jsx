import React, { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const { getTotalCartAmount, setToken, token } = useContext(StoreContext);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };
  return (
    <div className="w-full py-10 px-10 md:px-28">
      <div className="flex justify-between items-center">
        <div>
          <Link to="/">
            <img
              src={assets.logo}
              className="cursor-pointer w-[120px] md:w-full"
              alt=""
            />
          </Link>
        </div>
        <div className="lg:flex hidden">
          <ul className="flex  gap-5">
            <Link
              path="/"
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
            <a
              href="#mobile-App"
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
            <a
              href="#contact-us"
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
            <Link to="/cart" className="relative">
              <img src={assets.basket_icon} className="w-6 h-6" alt="" />
              <div
                className={
                  getTotalCartAmount() === 0
                    ? ""
                    : "dot absolute w-3 h-3 -top-2 -right-2 bg-orange-700 rounded-full"
                }
              ></div>
            </Link>
            {!token ? (
              <button
                onClick={() => {
                  setShowLogin(true);
                }}
                className="border border-orange-600 hover:bg-red-600 hover:text-white  py-1 px-6 md:px-8 rounded-full hover:border-slate-600 hover:border-none hover:duration-300 cursor-pointer transition-all"
              >
                Sign in
              </button>
            ) : (
              <div className="relative group">
                <img src={assets.profile_icon} alt="" />
                <ul className="absolute w-[150px] group-hover:flex group-hover:flex-col duration-300 hidden cursor-pointer z-10 bg-black p-3 text-white -left-16">
                  <li className="flex items-center mb-2" onClick={()=>{navigate("/myorders")}}>
                    <img src={assets.bag_icon} className="w-6" alt="" />
                    <p className="text-xs">Orders</p>
                  </li>
                  <hr />
                  <li className="flex items-center mt-2">
                    <img src={assets.logout_icon} className="w-6" alt="" />
                    <p className="text-xs" onClick={logout}>
                      Logout
                    </p>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
