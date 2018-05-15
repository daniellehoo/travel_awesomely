const travelDb = require('../models/destModels');

function getAllCommentsByCity(req, res, next) {
  travelDb.findCommentsByCityId(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      next(err);
    });
}

function makeOneComment(req, res, next) {
  console.log('make comment controlller!!', req.body);
  travelDb.saveComment(req.body)
    .then((data) => {
      console.log('I am data:', data);
      res.json(data);
    })
    .catch(next);
}

function updateOneComment(req, res, next) {
  travelDb.updateOneComment(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch(next);
}

function deleteComment(req, res, next) {
  travelDb.destroyComment(req.params.id)
    .then(() => {
      res.json({ delete: 'ok' });
    })
    .catch(next);
}

module.exports = {
  getAllCommentsByCity,
  makeOneComment,
  updateOneComment,
  deleteComment,
};
