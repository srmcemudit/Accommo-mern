const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const suggestionRoute = require("./routes/suggestion");
const cors = require("cors");
const complaintRoute = require("./routes/complaint");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const MONGO_URI = process.env.MONGO_URI;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
const port = process.env.PORT || 3001;

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("DataBase Connected succesfully!"));

app.use("/user", userRoute);
app.use("/suggestion", suggestionRoute);
app.use("/complaint", complaintRoute);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});