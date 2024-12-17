import React, { useState } from "react";
import Header from "../components/Header";
import ExploreMenu from "../components/ExploreMenu";

const Home = () => {
  const [category, setCategory] = useState("All");
  console.log(category);
  return (
    <div className="w-full ">
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
    </div>
  );
};

export default Home;
