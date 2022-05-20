const Movies = require('../models/movieSchema')


async function getMovieData (req, res){
    
    
    const movies = await Movies.find({});
    console.log(movies);
    

    if(movies) {
        return res.status(200).json(movies)
    } else {
        return res.json({status: 'error', movies: false})
    }
}

module.exports = {getMovieData}