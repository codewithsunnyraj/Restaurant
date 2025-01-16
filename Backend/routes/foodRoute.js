import express from "express";
import multer from "multer";
import {
  addFood,
  listFood,
  removeFood,
} from "../controllers/foodController.js";

const foodRouter = express.Router();

//Image storage Engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

//add food routes
foodRouter.post("/add", upload.single("image"), addFood);

//list all food routes
foodRouter.get("/list", listFood);

//Remove Food
foodRouter.post("/remove", removeFood);

export default foodRouter;
