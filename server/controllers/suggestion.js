const Suggestion = require("../models/Suggestion");

module.exports.getSuggestion = async (req,res) =>{
    try {
        const suggestions = await Suggestion.find();
        res.status(200).json(suggestions);
        module.exports = suggestions;
    } catch (error) {
        console.error(error);
        res.status(500).json({Message:"server error"})
    }
}

module.exports.RegisterSuggestion = async (req, res) => {
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
}