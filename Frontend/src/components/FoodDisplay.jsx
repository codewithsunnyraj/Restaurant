import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div>
      <div className="py-10 mx-32" id="food-display">
        <h2 className="font-semibold text-3xl">Top dishes Near You</h2>
        <div className="grid grid-cols-4 gap-6 animate-fadeIn">
          {food_list.map((items, index) => {
            if (category === "All" || category === items.category) {
                console.log(category);
              return (
                <FoodItem
                  key={index}
                  id={items._id}
                  name={items.name}
                  description={items.description}
                  price={items.price}
                  image={items.image}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default FoodDisplay;
