import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } =
    useContext(StoreContext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    console.log(orderItems);
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };
    let response = await axios.post(url + "/api/order/place", orderData, {
      headers: { token },
    });
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      alert("Error");
    }
  }

  return (
    <div className="mx-10 lg:mx-32">
      <div className="container  mx-auto lg:mx-auto ">
        <form
          onSubmit={placeOrder}
          className="grid lg:grid-cols-2 gap-4 md:gap-20 mt-4 md:mt-14"
        >
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
                  required
                  onChange={onChangeHandler}
                  name="firstName"
                  value={data.firstName}
                  placeholder="First Name"
                  className="py-1.5 w-full px-2 border-[1px] border-slate-300 rounded-sm"
                />
              </div>
              <div>
                <input
                  type="text"
                  required
                  onChange={onChangeHandler}
                  name="lastName"
                  value={data.lastName}
                  placeholder="Last Name"
                  className="py-1.5 w-full px-2 border-[1px] border-slate-300 rounded-sm"
                />
              </div>
            </div>
            <div className="">
              <div>
                <input
                  type="email"
                  required
                  onChange={onChangeHandler}
                  value={data.email}
                  name="email"
                  placeholder="Email address"
                  className="py-1.5 px-2 my-4 w-full border-[1px] border-slate-300 rounded-sm"
                />
              </div>
              <div>
                <input
                  type="text"
                  required
                  name="street"
                  onChange={onChangeHandler}
                  value={data.street}
                  placeholder="Street address"
                  className="py-1.5 px-2  w-full border-[1px] border-slate-300 rounded-sm"
                />
              </div>
              <div className="grid grid-cols-2 gap-3 my-3">
                <div>
                  <input
                    type="text"
                    required
                    onChange={onChangeHandler}
                    value={data.city}
                    name="city"
                    placeholder="City"
                    className="py-1.5 w-full px-2 border-[1px] border-slate-300 rounded-sm"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    required
                    onChange={onChangeHandler}
                    name="state"
                    value={data.state}
                    placeholder="State"
                    className="py-1.5 w-full px-2 border-[1px] border-slate-300 rounded-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 my-3">
                <div>
                  <input
                    type="text"
                    required
                    onChange={onChangeHandler}
                    value={data.zipcode}
                    name="zipcode"
                    placeholder="Zip Code"
                    className="py-1.5 w-full px-2 border-[1px] border-slate-300 rounded-sm"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    required
                    onChange={onChangeHandler}
                    value={data.country}
                    name="country"
                    placeholder="Country"
                    className="py-1.5 w-full px-2 border-[1px] border-slate-300 rounded-sm"
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  required
                  name="phone"
                  value={data.phone}
                  onChange={onChangeHandler}
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
                  <p>₹{getTotalCartAmount()}</p>
                </div>
                <div className="flex justify-between border-b-2  py-3">
                  <p>Delivery Fee</p>
                  <p>₹{getTotalCartAmount() === 0 ? 0 : 2}</p>
                </div>
                <div className="flex justify-between  py-3">
                  <p className="font-bold">Total</p>
                  <p>
                    ₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
                  </p>
                </div>
                <div>
                  <button
                    type="submit"
                    name="submit"
                    className="bg-orange-600 rounded-md text-base text-white py-2 px-7"
                  >
                    PROCEED TO Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlaceOrder;
