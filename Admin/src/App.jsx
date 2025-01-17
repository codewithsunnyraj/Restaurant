import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Order from "./pages/Order";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div className="w-full">
      <ToastContainer/>
      <Navbar />
      <hr className="border-[] border-black" />
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/orders" element={<Order />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
