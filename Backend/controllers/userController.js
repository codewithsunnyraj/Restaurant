import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//Login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email) {
      res.status(404).json({ message: "Enter Email", success: false });
    }

    if (!password) {
      res.status(404).json({ message: "Enter Password", success: false });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      res.status(404).json({ message: "User Not Registered", success: false });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res
        .status(404)
        .json({ message: "Enter Correct Password", success: false });
    }

    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res
      .status(404)
      .json({ message: "Error occur while login", success: false });
  }
};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

//Register User
const registerUser = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res
        .status(404)
        .json({ success: false, message: "User Already Exist" });
    }

    //Valdating email format and strong password
    if (!validator.isEmail(email)) {
      return res
        .status(404)
        .json({ message: "Please Enter Valid Email", success: false });
    }

    if (password.length < 8) {
      return res
        .status(404)
        .json({ message: "Please Enter Strong Password", success: false });
    }

    //bcrypt password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res
      .status(404)
      .json({ message: "Error While registering User", success: false });
  }
};

export { loginUser, registerUser };
