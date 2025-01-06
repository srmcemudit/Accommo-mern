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