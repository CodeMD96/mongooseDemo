require("./db/connection");
const yargs = require("yargs");
const { addMovie, readMovies, readMovie, updateMovie } = require("./movie/movie.function");
const mongoose = require("mongoose");

const app = async (args) => {
    try {
        if (args.add) {
            const movieObj = {title:args.title, actor: args.actor, rating: args.rating};
            await addMovie(movieObj);
            // run add movie functionality, passing a movieObj
        } else if (args.readMovies) {
            await readMovies();
        }else if (args.readMovie) {
            const movieObj = {readKey: args.readKey, readValue: args.readValue};
            await readMovie(movieObj);
        } else if (args.update) {
            const updateObj = {title: args.title, updateKey: args.updateKey, updateValue: args.updateValue};
            await updateMovie(updateObj);
        } else {
            console.log("incorrect command");
            mongoose.disconnect();
        }
    } catch (error) {
        console.log(error);
        mongoose.disconnect();
    }
}

app(yargs.argv);