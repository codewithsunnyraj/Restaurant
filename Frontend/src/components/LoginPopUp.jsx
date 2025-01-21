import React, { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";
const LoginPopUp = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Sign Up");

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
    // console.log(data);
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }
    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="absolute z-10 flex justify-center items-center px-4 md:px-0 w-full h-full bg-[#00000090]">
      <div className="bg-white  w-[450px] p-10 rounded-lg shadow-md ">
        <form className="" onSubmit={onLogin}>
          <div className=" flex justify-between">
            <h2 className="font-bold text-xl">{currState}</h2>
            <div>
              <img
                src={assets.cross_icon}
                className="cursor-pointer"
                onClick={() => {
                  setShowLogin(false);
                }}
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col space-y-4 mt-4 md:mt-8 ">
            {currState === "Login" ? (
              <></>
            ) : (
              <input
                type="text"
                name="name"
                onChange={onChangeHandler}
                value={data.name}
                className="p-2 border-2 border-gray-200 rounded-sm"
                placeholder="Your Name"
                required
              />
            )}

            <input
              type="email"
              name="email"
              onChange={onChangeHandler}
              value={data.email}
              className="p-2 border-2 border-gray-200 rounded-sm"
              placeholder="Your Email"
              required
            />
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={onChangeHandler}
              className="p-2 border-2 border-gray-200 rounded-sm"
              placeholder="Your Password"
              required
            />
          </div>
          <div>
            <button
              name="submit"
              type="submit"
              className="bg-orange-500 text-white w-full p-2 font-bold rounded-md my-3 md:my-5 cursor-pointer"
            >
              {currState === "Sign Up" ? "Create Account" : "Login"}
            </button>
          </div>
          <div className="flex items-baseline gap-2 my-3">
            <input type="checkbox" required />
            <p>I agree to the term of use & privacy policy</p>
          </div>
          {currState === "Sign Up" ? (
            <div className="flex justify-between">
              <p>Already Have an Account?</p>
              <span
                className="cursor-pointer text-orange-500 font-bold"
                onClick={() => {
                  setCurrState("Login");
                }}
              >
                Login Here
              </span>
            </div>
          ) : (
            <div className="flex justify-between">
              <p>Create a Account</p>
              <span
                className="cursor-pointer text-orange-500 font-bold"
                onClick={() => {
                  setCurrState("Sign Up");
                }}
              >
                Click Here
              </span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPopUp;
