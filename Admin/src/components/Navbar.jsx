import React from "react";
import { assets } from "../assets/assets";
const Navbar = () => {
  return (
    <div className="flex justify-between mx-14 my-2 items-center md:mx-24">
      <div>
        <img src={assets.logo} alt={assets.logo} />
      </div>
      <div>
        <img src={assets.profile_image} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
