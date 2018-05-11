const travelDb = require ('../models/destModels');

function getOneComment(req, res, next) {
  travelDb.findCommentById(req.params.id)
  .then((data) => {
    // res.locals.comment = data;
    // next();
  })
  .catch(next);
}

function updateOneComment(req, res, next) {
  travelDb.updateOneComment(req.body)
  .then((data) => {
    // res.locals.comment = data;
    // next();
  })
  .catch(next);
}

function makeOneComment(req, res, next) {
  travelDb.saveComment(req.body)
  .then((data) => {
    // res.locals.comment = data;
  })
  .catch(next);
}

function deleteComment(req, res, next) {
  travelDb.destroyComment(req.params.id)
  .then(() => {
    // next();
  })
  .catch(next);
}

module.exports = {
  getOneComment,
  updateOneComment,
  makeOneComment,
  deleteComment,
}
