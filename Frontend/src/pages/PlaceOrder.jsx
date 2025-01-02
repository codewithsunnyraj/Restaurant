import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className="container mx-auto lg:mx-auto ">
      <form className="grid grid-cols-2 gap-4 md:gap-20 mt-4 md:mt-14">
        <div>
          <div>
            <h3 className="font-semibold mb-4 md:mb-10 font-text-outfit text-xl md:text-3xl ">
              Delivery Information
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="py-1.5 w-full px-2 border-[1px] border-slate-300 rounded-sm"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                className="py-1.5 w-full px-2 border-[1px] border-slate-300 rounded-sm"
              />
            </div>
          </div>
          <div className="">
            <div>
              <input
                type="email"
                placeholder="Email address"
                className="py-1.5 px-2 my-4 w-full border-[1px] border-slate-300 rounded-sm"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Street address"
                className="py-1.5 px-2  w-full border-[1px] border-slate-300 rounded-sm"
              />
            </div>
            <div className="grid grid-cols-2 gap-3 my-3">
              <div>
                <input
                  type="text"
                  placeholder="City"
                  className="py-1.5 w-full px-2 border-[1px] border-slate-300 rounded-sm"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="State"
                  className="py-1.5 w-full px-2 border-[1px] border-slate-300 rounded-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 my-3">
              <div>
                <input
                  type="text"
                  placeholder="Zip Code"
                  className="py-1.5 w-full px-2 border-[1px] border-slate-300 rounded-sm"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Country"
                  className="py-1.5 w-full px-2 border-[1px] border-slate-300 rounded-sm"
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Phone Number"
                className="py-1.5 px-2 my-4 w-full border-[1px] border-slate-300 rounded-sm"
              />
            </div>
          </div>
        </div>
        <div className="">
          <div>
            <div className="">
              <h3 className="font-bold text-2xl mb-3">Cart Totals</h3>
              <div className="flex justify-between border-b-2  py-3">
                <p>SubTotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <div className="flex justify-between border-b-2  py-3">
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount()===0?0:2}</p>
              </div>
              <div className="flex justify-between  py-3">
                <p className="font-bold">Total</p>
                <p>${ getTotalCartAmount()===0?0: getTotalCartAmount() + 2}</p>
              </div>
              <div>
                <button className="bg-orange-600 rounded-md text-base text-white py-2 px-7">
                  PROCEED TO Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
