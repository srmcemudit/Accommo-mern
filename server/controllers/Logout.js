const express = require("express");
const router = express.Router();
// Logout route
module.exports.logout = router.post("/", (req, res) => {
    try {
      res.clearCookie("token", { path: "/", secure:true, sameSite: "None", httpOnly: true });
    return res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
      return res.status(500).json({message: "logout unsuccess"})
    }
    
  });