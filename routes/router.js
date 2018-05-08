const destinationRouter = require('express').Router();

const destinationController = require('../controllers/destinationController');
const responseController = require('../controllers/responseController');

// destinationRouter.route('/')
//   .get(
//     destinationController.getAll,
//     responseController.sendOkResponse,
//     responseController.sendErrorResponse
//   );

destinationRouter.route('/countries/:id')
  .get(
    quotesController.getOne,
    responseController.sendOkResponse,
    responseController.sendErrorResponse
  );

destinationRouter.route('/countries')
    .get(
      destinationController.getAll,
      responseController.sendOkResponse,
      responseController.sendErrorResponse
    );

destinationRouter.route('/cities/:id')
    .get(
      destinationController.getOne,
      responseController.sendOkResponse,
      responseController.sendErrorResponse
    )
    .put(
      destinationController.update,
      responseController.sendOkResponse,
      responseController.sendErrorResponse
    )
    .delete(
      destinationController.destroy,
      responseController.sendOkResponse,
      responseController.sendErrorResponse
    );

destinationRouter.route('/cities')
    .get(
      destinationController.getAll,
      responseController.sendOkResponse,
      responseController.sendErrorResponse
    );

destinationRouter.router('/users/:id')
  .get(
    destinationController.getOne,
    responseController.sendOkResponse,
    responseController.sendErrorResponse
  );

destinationRouter.router('/login')
    .get(
      destinationController.getOne,
      responseController.sendOkResponse,
      responseController.sendErrorResponse
    )
  .post(
    quotesController.update,
    responseController.sendOkResponse,
    responseController.sendErrorResponse
  );

module.exports = destinationRouter;
