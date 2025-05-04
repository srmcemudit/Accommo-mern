const { instance } = require("../routes/Razorpay");
const crypto = require("crypto");

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
    res.status(200).json(order);
  } catch (error) {
    console.log("error in order", error);
    res.status(400).json(error);
  }
};

module.exports.payment = (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const generated_signature = crypto
    .createHmac("sha256", process.env.key_secret)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest("hex");

  if (generated_signature === razorpay_signature) {

    return res.status(200).json({"success":"true"});
  } else {
    return res.status(400).json({ success: false, message: "Invalid signature" });
  }
};
