const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/user");
const cors = require("cors");
const Complaint = require("./models/Complaints");
require("dotenv").config();
const app = express();

app.use(express.json());

app.use(cors());
const port = process.env.PORT || 3001;

mongoose
  .connect(
    "mongodb+srv://tudrishu:w47BCOglMC0wKdEq@cluster0.vn8pr.mongodb.net/sample_mflix"
  )
  .then(() => console.log("DataBase Connected succesfully!"));

app.use("/user", route);
app.use("/suggestion", require("./routes/suggestion"));

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.post("/complaint/register", async (req, res) => {
  try {
    const { title, content } = req.body;
    const complaint = await Complaint.create({
      title: title,
      content: content,
    });
    res.status(200).json(complaint);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});