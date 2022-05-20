const Movies = require('../models/movieSchema')


async function saveMovieData(req, res) {
    console.log(req.body)

    try {
        const movie = await new Movies(
            { movieName, rating, releaseDate } = req.body
        );
        await movie.save();
        //console.log(movie);
        res.status(200).json({ movie })
    } catch (err) {
        console.log(`Error: ${err.message}`)
    }

}


module.exports = { saveMovieData };