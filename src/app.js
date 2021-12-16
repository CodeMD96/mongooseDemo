require("./db/connection");
const yargs = require("yargs");
const { addMovie, readMovies, readMovie, updateMovie, deleteMovie } = require("./movie/movie.function");
const mongoose = require("mongoose");

const app = async (args) => {
    try {
        if (args.add) {
            const movieObj = {title:args.title, actor: args.actor, rating: args.rating};
            await addMovie(movieObj);
            // run add movie functionality, passing a movieObj
        } else if (args.readMovies) {
            await readMovies();
            // run read movies logging all movies to the console
        }else if (args.readMovie) {
            const movieObj = {readKey: args.readKey, readValue: args.readValue};
            await readMovie(movieObj);
            // run read movie, passing a movieObj
        } else if (args.update) {
            const updateObj = {title: args.title, updateKey: args.updateKey, updateValue: args.updateValue};
            await updateMovie(updateObj);
            //run update movie, passing an updateObj
        } else if (args.delete) {
            const movieObj = {title: args.title};
            await deleteMovie(movieObj);
            //run delete functionality, passing a movieObj
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