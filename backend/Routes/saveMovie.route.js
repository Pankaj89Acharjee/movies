const express = require('express');
const router = express.Router();
const movieDataController = require('../controllers/saveData.controller.js')


router.post('/', movieDataController.saveMovieData)


module.exports = router;