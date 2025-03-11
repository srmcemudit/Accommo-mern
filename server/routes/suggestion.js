const express = require("express");
const Suggestion = require("../models/Suggestion");
const { getSuggestion } = require("../controllers/suggestion");

const surouter = express.Router();

surouter.post("/suggestionRegister", async (req, res) => {
  try {
    const { Title, Description, UserId } = req.body;
    const suggestion = await Suggestion.create({
      Title: Title,
      Description: Description,
      UserId: UserId,
    });
    res.status(200).json(suggestion);
  } catch (error) {
    res.status(500).json({ message: error });
    console.log(error);
  }
});

surouter.get("/getAllSuggestion", getSuggestion);

module.exports = surouter;
