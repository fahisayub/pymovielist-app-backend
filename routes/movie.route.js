const {Router} =require('express');
const { movieController } = require('../controllers/movie.controllers');
const { cachemovies } = require('../middlewares/movielist.middleware');


const movieRouter=Router();

movieRouter.get('/get',cachemovies,movieController.getmovieslist);

module.exports={
    movieRouter
}
