import React, { useContext } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
 
  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);
  return (
    <div className="mt-14 shadow-box-shadow p-3 cursor-pointer">
      <div className="relative">
        <img src={image} alt="" className="rounded-md w-full" />
        {!cartItems[id] ? (
          <img
            src={assets.add_icon_white}
            className="cursor-pointer absolute bottom-4 right-3"
            onClick={() => {
             addToCart(id)
            }}
            alt=""
          />
        ) : (
          <div className="flex items-center  absolute bottom-5 gap-4 p-2 right-3 bg-white rounded-full">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              className="cursor-pointer"
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
              className="cursor-pointer"
            />
          </div>
        )}
      </div>
      <div className="p-2 mt-3">
        <div className="flex justify-between items-center ">
          <p className="font-semibold font-text-outfit text-xl">{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="my-4 text-slate-600 text-base">{description}</p>
        <p className="text-xl font-semibold text-orange-500">₹{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
