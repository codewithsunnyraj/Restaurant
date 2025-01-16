import React from "react";
import { assets } from "../assets/assets";

const Add = () => {
  return (
    <div className="">
      <form action="">
        <div>
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={assets.upload_area} alt="" />
          </label>
          <input type="file" id="image" hidden required />
        </div>
        <div>
          <p>Product Name</p>
          <input type="text" name="name" placeholder="Type Here" />
        </div>
        <div>
          <p>Product description</p>
          <textarea
            name="description"
            rows="6"
            placeholder="Write Content Here"
            id=""
          ></textarea>
        </div>
        <div>
          <p>Product Category</p>
         <select name="category" id="">
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
      </form>
    </div>
  );
};

export default Add;
