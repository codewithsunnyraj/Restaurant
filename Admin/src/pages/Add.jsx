import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({url}) => {
  
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);
    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="md:w-[70%] mx-5 mt-3 md:mt-14 md:mx-28">
      <form action="" onSubmit={onSubmitHandler}>
        <div>
          <p className="font-semibold my-2">Upload Image</p>
          <label htmlFor="image" className="cursor-pointer">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
              className="w-32"
            />
          </label>
          <input
            type="file"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            id="image"
            hidden
            required
          />
        </div>
        <div className="my-3 md:my-6">
          <p className="font-semibold my-2">Product Name</p>
          <input
            type="text"
            onChange={onChangeHandler}
            value={data.name}
            name="name"
            className="border-[1px] w-full rounded-sm border-black p-2 focus:outline-none"
            placeholder="Type Here"
          />
        </div>
        <div>
          <p className="font-semibold my-2">Product description</p>
          <textarea
            name="description"
            rows="4"
            onChange={onChangeHandler}
            value={data.description}
            className="border-[1px] w-full rounded-sm border-black p-2 focus:outline-none"
            placeholder="Write Content Here"
            id=""
          ></textarea>
        </div>
        <div className="flex items-center gap-8">
          <div className="my-3 ">
            <p className="font-semibold my-2">Product Category</p>
            <select
              name="category"
              id=""
              onChange={onChangeHandler}
              className="border-[1px]  rounded-sm border-black p-2 focus:outline-none"
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="my-3 ">
            <p className="font-semibold my-2">Product Price</p>
            <input
              type="Number"
              name="price"
              onChange={onChangeHandler}
              value={data.price}
              className="border-[1px]  rounded-sm border-black p-2 focus:outline-none"
              placeholder="$20"
            />
          </div>
        </div>
        <div>
          <button
            className="bg-black text-white py-1 px-14 my-3 "
            type="submit"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
