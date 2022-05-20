const mongoose = require('mongoose');

const Movies = new mongoose.Schema({
    movieName: String,
    rating: Number,
    releaseDate: Date,
});

const MoviesData = mongoose.model('allmovies', Movies); /*"allmovies" is collection name in mongodb*/

module.exports = MoviesData;


 
