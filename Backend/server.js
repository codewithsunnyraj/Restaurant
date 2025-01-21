import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import "dotenv/config";
import userRouter from "./routes/userRoute.js";
/* App Config */
const app = express();
const port = 3000;

/* Middleware */
app.use(express.json());
app.use(cors());

//DB Connection
connectDB();

//api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
