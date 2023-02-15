const { default: axios } = require("axios");
const { movieModel } = require("../models/movie.model");
const { detailsModel } = require("../models/details.model");


// const additem = async (req, res) => {
//     try {
//         let item = await movieModel.insertMany([...arr]);
//         res.send({ msg: "item added successfully", Newitem: item });
//     } catch (err) {
//         res.send({ msg: "Something went wrong while adding item", error: err });
//     }
// };

// .....To get and push moviedetails to mongoDB....

// const getandPush = async (req, res) => {
//     try {
//        arr.forEach(async (movie) => {
//            let result= await axios.get(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=e5a80741`);
//             let data=result.data;
//             await detailsModel.insertMany([data]);
//         });
//         res.send('Done');
//     } catch (err) {
//         console.log(err);
//     }
    
// }
const getmovieslist = async (req, res) => {
    try {
      let data=  await movieModel.find({});
       
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

