const express = require("express");
const router = express.Router();
// Logout route
module.exports.logout = router.post("/", (req, res) => {
    try {
      res.clearCookie("token", { path: "/", sameSite: "None", httpOnly: true });
    console.log("req recieved at logout");
    return res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({message: "logout unsuccess"})
    }
    
  });