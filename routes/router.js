const destinationRouter = require('express').Router();

const authController = require('../controllers/authController');
const cityController = require('../controllers/cityController');
const countryController = require('../controllers/countryController');
const userController = require('../controllers/userController');
const commentController = require('../controllers/commentController');

destinationRouter.route('/cities/:id')
    .get(cityController.getOneCity);

destinationRouter.route('/countries/:id')
    .get(countryController.getOneCountry)

destinationRouter.route('/comments/:id')
    .get(commentController.getAllCommentsByCity)
    .delete(commentController.deleteComment)
    .post(commentController.makeOneComment)
    .put(commentController.updateOneComment)

destinationRouter.route('/countries')
    .get(countryController.indexCountries)

destinationRouter.route('/cities')
    .get(cityController.indexCities)

destinationRouter.route('/users/:id')
   .get(userController.getOne)

destinationRouter.route('/login')
   .get(userController.getOne)
//    .post(userController.update)

module.exports = destinationRouter;
