const express = require("express");
const { getSuggestion, RegisterSuggestion } = require("../controllers/suggestion");

const surouter = express.Router();

surouter.post("/suggestionRegister", RegisterSuggestion);

surouter.get("/getAllSuggestion", getSuggestion);

module.exports = surouter;
