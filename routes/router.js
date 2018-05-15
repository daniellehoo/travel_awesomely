const destinationRouter = require('express').Router();

const authController = require('../controllers/authController');
const cityController = require('../controllers/cityController');
const countryController = require('../controllers/countryController');
const userController = require('../controllers/userController');
const commentController = require('../controllers/commentController');

destinationRouter.route('/cities/:id')
  .get(cityController.getOneCity);

<<<<<<< HEAD
// destinationRouter.route('/countries/:id')
//   .get(
//     destinationController.getOne,
//     responseController.sendOkResponse,
//     responseController.sendErrorResponse
//   );
//
// destinationRouter.route('/countries')
//     .get(
//       destinationController.getAll,
//       responseController.sendOkResponse,
//       responseController.sendErrorResponse
//     );
//
// destinationRouter.route('/cities/:id')
//     .get(
//       destinationController.getOne,
//       responseController.sendOkResponse,
//       responseController.sendErrorResponse
//     )
//     .put(
//       destinationController.update,
//       responseController.sendOkResponse,
//       responseController.sendErrorResponse
//     )
//     .delete(
//       destinationController.destroy,
//       responseController.sendOkResponse,
//       responseController.sendErrorResponse
//     );
//
// destinationRouter.route('/cities')
//     .get(
//       destinationController.getAll,
//       responseController.sendOkResponse,
//       responseController.sendErrorResponse
//     );
//
// destinationRouter.router('/users/:id')
//   .get(
//     destinationController.getOne,
//     responseController.sendOkResponse,
//     responseController.sendErrorResponse
//   );
//
// destinationRouter.router('/login')
//     .get(
//       destinationController.getOne,
//       responseController.sendOkResponse,
//       responseController.sendErrorResponse
//     )
//   .post(
//     quotesController.update,
//     responseController.sendOkResponse,
//     responseController.sendErrorResponse
//   );
=======
destinationRouter.route('/countries/:id')
  .get(countryController.getOneCountry);

destinationRouter.route('/comments/:id')
  .get(commentController.getAllCommentsByCity)
  .delete(commentController.deleteComment)
  .post(commentController.makeOneComment)
  .put(commentController.updateOneComment);

destinationRouter.route('/countries')
  .get(countryController.indexCountries);

destinationRouter.route('/cities')
  .get(cityController.indexCities);

destinationRouter.route('/users/:id')
  .get(userController.getOne);

destinationRouter.route('/login')
  .get(authController.login);

destinationRouter.route('/register')
  .get(authController.register)
>>>>>>> dev

module.exports = destinationRouter;
