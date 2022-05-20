const express = require("express");
const Movies = require("./models/movieSchema");
const cors = require("cors");
const movieRoute = require('./Routes/saveMovie.route');
const getMovieRoute = require('./Routes/getMovies.route');


require('./connections/dbConnection');

const PORT = 5000;
const app = express();

/*Middlewares*/
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send("Welcome to backend homepage of Movies")
})


/*Routes middleware*/
app.use('/savemovie', movieRoute);
app.use('/history', getMovieRoute);


app.listen(PORT, () => {
    console.log(`Server on port${PORT}`);
})