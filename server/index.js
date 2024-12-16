const express = require('express');
const mongoose = require('mongoose');
const route = require('./routes/user');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3001;


mongoose.connect('mongodb+srv://tudrishu:w47BCOglMC0wKdEq@cluster0.vn8pr.mongodb.net/sample_mflix')
  .then(() => console.log('DataBase Connected succesfully!'));


app.use("/user", route);

app.get('/', (req, res) => {
    res.send("Hello, world!");
});

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});