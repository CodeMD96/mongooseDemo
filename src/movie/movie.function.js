const Movie = require("./movie.model");
const mongoose = require("mongoose");

exports.addMovie = async (movieObj) => {
    try {
        const newMovie = new Movie(movieObj);
        await newMovie.save();
        mongoose.disconnect();
    } catch (error) {
        console.log(error);
        mongoose.disconnect();
    }
}

exports.readMovies = async () => {
    try {
        const movie = await Movie.find( {} );
        console.log(movie);
        mongoose.disconnect();
    } catch (error) {
        console.log(error);
        mongoose.disconnect();
    }
}

exports.readMovie = async (movieObj) => {
    try {
        const movie = await Movie.find( {[movieObj.readKey]: movieObj.readValue} );
        console.log(movie);
        mongoose.disconnect();
    } catch (error) {
        console.log(error);
        mongoose.disconnect();
    }
}

exports.updateMovie = async (updateObj) => {
    try {
        let doc = await Movie.find({title: updateObj.title});
        doc= doc[0];
        doc[updateObj.updateKey] = await updateObj.updateValue;
        await doc.save();
        mongoose.disconnect();
        console.log("Successfully updated")
    } catch (error) {
        console.log(error);
        mongoose.disconnect();
    }
}