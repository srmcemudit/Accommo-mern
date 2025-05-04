require('dotenv').config();
const razorpay = require("razorpay");
module.exports.instance = new razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.KEY_SECRET,
});