const {Router}=require('express');
const { detailsController } = require('../controllers/details.controllers');

const detailsRouter=Router();


detailsRouter.get('/:id',detailsController.getDetails);

module.exports={
    detailsRouter,
}