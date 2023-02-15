const { default: axios } = require("axios");
const { movieModel } = require("../models/movie.model");
const { detailsModel } = require("../models/details.model");
const Redis=require('ioredis');

const redis=new Redis();

const getmovieslist = async (req, res) => {
    try {
        console.log('hello')
      let data=  await movieModel.find({});
       await redis.lpush('movielist',data);
        res.send({data});
    } catch (err) {
        console.log(err);
    }
    
}



const movieController = {
    getmovieslist
};
module.exports = {
    movieController,
};

