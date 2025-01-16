import multer from "multer";
import foodModel from "../models/foodModel.js";
import fs from "fs";

//Add Food Items
const addFood = async (req, res) => {
  const image_filename = `${req.file.filename}`;
  const food = new foodModel({
    name: req.body.name,
    description: req.body.name,
    price: req.body.price,
    image: image_filename,
    category: req.body.category,
  });
  try {
    await food.save();
    res.status(200).json({ success: true, message: "Food Added Successfully" });
  } catch (error) {
    res
      .status(404)
      .json({ success: false, message: "Error While Adding Food" });
  }
};

//all food list
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res
      .status(200)
      .json({ message: "Fetch all food list", success: true, data: foods });
  } catch (error) {
    res
      .status(404)
      .json({ success: false, message: "Error while fetching all food list" });
  }
};

//Remove food From DB
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, () => {});
    await foodModel.findByIdAndDelete(req.body.id);
    res
      .status(200)
      .json({ message: "Remove food successfully from DB", success: true });
  } catch (error) {
    res
      .status(404)
      .json({ message: "Error Occur While Remove the Food", success: false });
      console.log(error);
  }
};

export { addFood, listFood, removeFood };
