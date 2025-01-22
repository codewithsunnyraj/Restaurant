import React from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { assets } from "../assets/assets";
const Order = ({ url }) => {
  const [orders, setOrders] = useState([]);
  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(url + "/api/order/status", {
        orderId,
        status: event.target.value,
      });
      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);
  return (
    <div className="md:w-[70%] mx-5 mt-3 md:mt-14 md:mx-28">
      <div>
        <h3 className="text-2xl font-semibold font-Inter my-4">Order Page</h3>
      </div>
      <div className="">
        {orders.map((order, index) => (
          <div key={index} className="">
            <div className="grid lg:grid-cols-5 border-b p-4">
              <div>
                <img src={assets.parcel_icon} alt="" />
              </div>

              <div>
                <p className="font-semibold font-Inter">
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return item.name + " x " + item.quantity;
                    } else {
                      return item.name + " x " + item.quantity + " , ";
                    }
                  })}
                </p>
                <p className="mt-6 font-bold">
                  {order.address.firstName + " " + order.address.lastName}
                </p>
                <div>
                  <p>{order.address.street + " , "}</p>
                  <p>
                    {order.address.city +
                      " , " +
                      order.address.state +
                      ", " +
                      order.address.country +
                      " , " +
                      order.address.zipcode}
                  </p>
                </div>
                <div>
                  <p className="">{order.address.phone}</p>
                </div>
              </div>
              <div>
                <p>Items : {order.items.length}</p>
              </div>
              <div>
                <p>${order.amount}</p>
              </div>
              <div>
                <select
                  onChange={(event) => {
                    statusHandler(event, order._id);
                  }}
                  value={order.status}
                  className="bg-red-300 py-1 px-5 border border-black rounded-sm"
                >
                  <option value="Food Processing">Food Processing</option>
                  <option value="Out For Delivery">Out For Delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
