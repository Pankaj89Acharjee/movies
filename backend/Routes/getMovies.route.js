const express = require("express");
const route = express.Router();
const Movies = require("../models/movieSchema");
const getMovies = require('../controllers/getDataController')

route.get('/', getMovies.getMovieData)

module.exports = route;