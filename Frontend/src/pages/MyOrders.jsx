import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";
import { assets } from "../assets/frontend_assets/assets";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
    // console.log(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);
  return (
    <div className="py-10  mx-10 lg:mx-32">
      <div>
        <h2 className="font-bold text-2xl py-8">My Orders</h2>
        <div className=" ">
          {data.map((order, index) => {
            return (
              <div className="grid lg:grid-cols-6  border-b-2 border-black my-4" key={index}>
                <img src={assets.parcel_icon} alt="" />
                <p>
                  {order.items.map((items, index) => {
                    if (index === order.items.length - 1) {
                      return items.name + " x " + items.quantity;
                    } else {
                      return items.name + " x " + items.quantity + " , ";
                    }
                  })}
                </p>
                <p>${order.amount}.00</p>
                <p>Items: {order.items.length}</p>
                <p>
                  <span>&#x25cf;</span>
                  <b>{order.status}</b>
                </p>
                <button className="py-1 px-8 mb-3 bg-red-300">Track Order</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
