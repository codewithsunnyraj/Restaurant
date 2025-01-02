import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="mx-4 lg:mx-32">
      <div className="container mx-auto lg:mx-auto ">
        <div className="">
          <div className=" my-4  md:mt-20 grid grid-cols-6  md:font-semibold">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr />
          {food_list.map((items, index) => {
            if (cartItems[items._id] > 0) {
              return (
                <>
                  <div className="grid grid-cols-6 space-y-3 border-b-2 ">
                    <img src={items.image} className="md:w-16 w-10 my-2" alt="" />
                    <p>{items.name}</p>
                    <p>${items.price}</p>
                    <p>{cartItems[items._id]}</p>
                    <p>${items.price * cartItems[items._id]}</p>
                    <p
                      onClick={() => {
                        removeFromCart(items._id);
                      }}
                      className="cursor-pointer"
                    >
                      X
                    </p>
                  </div>
                </>
              );
            }
          })}
        </div>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-0 mt-5 md:mt-20">
          <div>
            <div className="">
              <h3 className="font-bold text-2xl mb-3">Cart Totals</h3>
              <div className="flex justify-between border-b-2  py-3">
                <p>SubTotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <div className="flex justify-between border-b-2  py-3">
                <p>Delivery Fee</p>
                <p>{getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <div className="flex justify-between  py-3">
                <p className="font-bold">Total</p>
                <p>
                  ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
                </p>
              </div>
              <div>
                <button
                  onClick={() => {
                    navigate("/PlaceOrder");
                  }}
                  className="bg-orange-600 rounded-md text-base text-white py-2 px-7"
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
          <div className="lg:place-items-end">
            <div>
              <p className="my-3">If You Have a promo cde, Enter it here</p>
              <div className="border-2 flex justify-between  rounded-md bg-[#eaeaea]">
                <input
                  type="text"
                  placeholder="Promo Code"
                  className="py-2 px-2 focus:border-0 bg-transparent focus:outline-none"
                />
                <button className="bg-black py-3 px-14 text-white rounded-md">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
