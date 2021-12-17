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
        let movie = await Movie.find({title: updateObj.title});
        if (movie[0]) {
            movie[0][updateObj.updateKey] = await updateObj.updateValue;
            await movie[0].save();
            mongoose.disconnect();
            console.log("Successfully updated");
        } else {
            mongoose.disconnect();
            console.log("Movie doesn't exist");
        }
    } catch (error) {
        console.log(error);
        mongoose.disconnect();
    }
}

exports.deleteMovie = async (movieObj) => {
    try {
        const movie = await Movie.find( {title: movieObj.title} );
        if (movie[0]) {
            await Movie.deleteOne({title: movieObj.title});
            console.log("Successfully deleted");
        } else {
            console.log("Movie doesn't exist");
        }
        mongoose.disconnect();
    } catch (error) {
        console.log(error);
        mongoose.disconnect();
    }
}