import React from "react";
import { menu_list } from "../assets/frontend_assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className=" py-10  mx-10 lg:mx-32 explore-menu" id="explore-menu">
      <div className="container mx-auto">
        <div className="md:w-3/4">
          <h2 className="lg:text-3xl text-xl font-semibold my-2">Explore Our Menu</h2>
          <p className="md:py-6 py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            necessitatibus cum dicta, corporis soluta laboriosam placeat officia
            vitae eaque delectus beatae culpa nemo eum ad?
          </p>
        </div>
        <div className="flex  lg:flex-row items-center lg:flex-nowrap justify-center lg:justify-start flex-wrap gap-6 md:gap-10 my-4 ">
          {menu_list.map((items, index) => (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === items.menu_name ? "All" : items.menu_name
                )
              }
              key={index}
              className="text-center cursor-pointer"
            >
              <img 
              className={`${category === items.menu_name ? "active border-2  hover:duration-105 transition-all border-orange-700  rounded-full p-1 ":""}`}
              src={items.menu_image} alt="" />
              <p className="md:mt-5 my-6 font-semibold text-base">{items.menu_name}</p>
            </div>
          ))}
        </div>
        <hr className=" bg-black mt-12" />
      </div>
    </div>
  );
};

export default ExploreMenu;
