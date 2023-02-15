const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    imdbID: { type: String, require: true },
    Title: { type: String, require: true },
    Year: { type: String, require: true },
    Type: { type: String, require: true },
    Poster: { type: String, require: true },

});
const movieModel = mongoose.model('movie', movieSchema);
module.exports = {
    movieModel,
}