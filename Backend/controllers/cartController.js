import userModel from "../models/userModel.js";

const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.status(200).json({ message: "Added To Cart", success: true });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error while Adding To Cart", success: false });
  }
};

//remove items from user cart

const removeFromCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.status(200).json({ message: "Removed From Cart", success: true });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error while Removing To Cart", success: false });
  }
};

//fetch user cart data
const getCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    res.json({ success: true, cartData });
  } catch (error) {
    res
    .status(400)
    .json({ message: "Error while Geting Data From Cart", success: false });
  }
};

export { addToCart, removeFromCart, getCart };
