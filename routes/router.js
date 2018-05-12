const destinationRouter = require('express').Router();

const authController = require('../controllers/authController');
const cityController = require('../controllers/cityController');
const countryController = require('../controllers/countryController');
const userController = require('../controllers/userController');
const commentController = require('../controllers/commentController');

// destinationRouter.route('/')
//   .get(countryController.indexCountries);

destinationRouter.route('/countries/:id')
    .get(countryController.getOneCountry)

destinationRouter.route('/countries')
    .get(countryController.indexCountries)

destinationRouter.route('/cities/:id')
    .get(cityController.getOneCity)
    // .get(commentController.getOneComment)
    // .post(commentController.makeOneComment)
    // .delete(commentController.deleteComment)

destinationRouter.route('/cities')
    .get(cityController.indexCities)

destinationRouter.route('/users/:id')
   .get(userController.getOne)

destinationRouter.route('/login')
   .get(userController.getOne)
//    .post(userController.update)

destinationRouter.route('/comments')
    .get(commentController.getAllCommentCity)

destinationRouter.route('/comments/:id')
    .delete(commentController.deleteComment)
    .post(commentController.makeOneComment)
    .put(commentController.updateOneComment)


module.exports = destinationRouter;
