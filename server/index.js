const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const suggestionRoute = require("./routes/suggestion")
const cors = require("cors");
const complaintRoute = require("./routes/complaint");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors(
  { 
    origin: "http://localhost:5173",
    credentials: true,
  }));
const port = process.env.PORT || 3001;

mongoose.connect(
    "mongodb+srv://tudrishu:w47BCOglMC0wKdEq@cluster0.vn8pr.mongodb.net/sample_mflix"
  )
  .then(() => console.log("DataBase Connected succesfully!"));

app.use("/user", userRoute);
app.use("/suggestion", suggestionRoute);
app.use("/complaint",complaintRoute);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});