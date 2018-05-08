const destModels = require('../models/destModels');
const fetch = require('node-fetch');

module.exports = {

  getOne(req, res, next) {
    destModels.getOneUser(req.params.id)
      .then(data => {
        res.locals.user = data;
          next();
          })
      .catch(err => {
        next(err);
      });
  },

// Produces the form to create a new user and hashes the password
  async new(req, res, next) {
    req.body.hashword = await bcrypt.hash(req.body.password, 5);
    destModels.createUser(req.body)
      .then(() => {
        next();
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
    });
  },

  create(req, res, next) {
    destModels.createUser(userData)
      .then(data => {
        res.locals.user = data;
        next();
      })
      .catch(err => {
        next(err);
      });
  },

  destroy(req, res) {
    destModels.destroyUser(req.params.id)
      .then(() => {
        res.redirect('/');
      })
      .catch(err => {
        res.status(500).json({
          message: err.message,
        });
      });
  },

};
