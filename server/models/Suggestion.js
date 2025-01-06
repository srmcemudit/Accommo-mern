const mongoose = require('mongoose');

const SuggestionSchema = new mongoose.Schema (
    {
        Title: {
        type: String,
        required: true
        },
        Description: {
            type: String,
            required: true
        }
    },
    {
        timestamp: true
    }
)
const Suggestion = mongoose.model('Suggestions',SuggestionSchema);
module.exports = Suggestion;