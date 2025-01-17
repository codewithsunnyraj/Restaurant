import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const List = () => {
  const [list, setList] = useState([]);
  const url = "http://localhost:3000";

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      console.log(response.data);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {}
  };

  const handleRemoveFood = async (foodId) => {
    console.log(foodId);
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="md:w-[70%] mx-5 mt-3 md:mt-14 md:mx-28">
      <div className="">
        <div>
          <p className="font-semibold my-2">All Food List</p>
        </div>
        <div className="grid lg:grid-cols-5 border border-black p-3">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        <div>
          {list.map((items, index) => {
            return (
              <div className="" key={index}>
                <div className="grid lg:grid-cols-5 border gap-8 border-black p-4">
                  <img
                    src={`${url}/images/` + items.image}
                    className="w-24"
                    alt=""
                  />
                  <p>{items.name}</p>
                  <p>{items.category}</p>
                  <p>{items.price}</p>
                  <p
                    onClick={() => {
                      handleRemoveFood(items._id);
                    }}
                    className="cursor-pointer"
                  >
                    X
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default List;
