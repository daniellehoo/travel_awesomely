const travelDb = require ('../models/destModels');

function getAllCommentsByCity(req, res, next) {
  travelDb.findCommentsByCityId(req.params.id)
  .then((data) => {
    res.json(data)
    console.log('datafromcommentController', data)
  })
  .catch(err => {
    next(err);
  });
}

function makeOneComment(req, res, next) {
  console.log('make comment controlller!!', req.body)
  travelDb.saveComment(req.body)
  .then((data) => {
    console.log('I am data:', data)
    res.json(data);
  })
  .catch(next);
}

function updateOneComment(req, res, next) {
  travelDb.updateOneComment(req.body)
  .then((data) => {
  })
  .catch(next);
}

function deleteComment(req, res, next) {
  console.log('deleteComment controller!!!!!')
  travelDb.destroyComment(req.params.id)
  .then(() => {
    next();
  })
  .catch(next);
}

module.exports = {
  getAllCommentsByCity,
  makeOneComment,
  updateOneComment,
  deleteComment,
}
