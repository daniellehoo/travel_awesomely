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
    .post(commentController.makeOneComment)
    

destinationRouter.route('/cities')
    .get(cityController.indexCities)

destinationRouter.route('/users/:id')
   .get(userController.getOne)

destinationRouter.route('/login')
   .get(userController.getOne)
//    .post(userController.update)


module.exports = destinationRouter;
