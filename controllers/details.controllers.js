const { detailsModel } = require("../models/details.model");




const getDetails = async (req, res) => {
    const { id } = req.params;

    try {
        let data = await detailsModel.findOne({ imdbID: id })
        res.send(data);
    } catch (e) {
        console.log(e);
    }
}

const detailsController = {
    getDetails,
}
module.exports = {
    detailsController
}