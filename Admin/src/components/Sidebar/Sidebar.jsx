import React from "react";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  const isActive ="active"
  return (
    <div className="w-[20%] border border-t-0 border-l-0 min-h-screen py-16 border-black">
      <div className="flex  justify-end">
        <div>
          <NavLink to="/add" className={`flex isActive items-center cursor-pointer gap-5 border border-black border-r-0 py-2 ps-2 md:pr-16 pr-4`}>
            <img src={assets.add_icon} alt="{assets.add_icon}" />
            <div className="md:flex hidden">
              <p className="font-semibold">Add Items</p>
            </div>
          </NavLink>
          <NavLink to="/list" className="flex isActive items-center cursor-pointer my-4 md:my-7 gap-5 border border-black border-r-0 py-2 ps-2 md:pr-16 pr-4">
            <img src={assets.order_icon} alt="{assets.add_icon}" />
            <div className="md:flex hidden">
              <p className="font-semibold">List Items</p>
            </div>
          </NavLink>
          <NavLink to="/orders" className="flex isActive items-center cursor-pointer gap-5 border border-black border-r-0 py-2 ps-2 md:pr-16 pr-4">
            <img src={assets.order_icon} alt="{assets.add_icon}" />
            <div className="md:flex hidden">
              <p className="font-semibold">Orders</p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
