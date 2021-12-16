const mongoose = require("mongoose");

// standarrd naming convention of mogoose schemas
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    actor: {
        type: String,
        default: "Not specified",
    },
    rating: {
        type: Number,
        min: 1,
        max: 10,
        default: 5,
    }
})

// mongoose/mongodb will automatically pluralise the collection name
const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;