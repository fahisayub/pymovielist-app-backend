const {Router} =require('express');
const { movieController } = require('../controllers/movie.controllers');


const movieRouter=Router();

movieRouter.get('/get',movieController.getmovieslist);

module.exports={
    movieRouter
}
