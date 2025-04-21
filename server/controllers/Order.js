const { instance } = require("../routes/Razorpay");

module.exports.Order = async (req, res) => {
  try {
    const order = await instance.orders.create({
      amount: 50000,
      currency: "INR",
      receipt: "receipt#1",
      notes: {
        key1: "value3",
        key2: "value2",
      },
    });
    console.log(order);
    res.status(200).json(order);
  } catch (error) {
    console.log("error in order",error);
    res.status(400).json(error)
  }
};

module.exports.payment = (req,res) => {
    console.log("body",req.body);
    res.status(200).json({"success":"true"})
}