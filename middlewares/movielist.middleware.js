const Redis = require("ioredis");


const redis = new Redis();

const cachemovies = async (req, res, next) => {

    try {

        let movies = await redis.lrange('movielist', 0, -1)
            if(movies.length==0){
                next();
            }else{
                res.send({movies});
                
            }
        
    } catch (err) {
        next()
    }
}

module.exports = {
    cachemovies,
}
