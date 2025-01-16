import express from "express";
import cors from "cors";

/* App Config */
const app = express();
const port = 3000;

/* Middleware */
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
