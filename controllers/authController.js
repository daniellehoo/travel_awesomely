const bcrypt = require('bcrypt');
// const User   = require('../user/model/User');
const TokenService = require('./TokenService');

const isValidUser = async ({ username, password:textPassword }) => {
  try {
    // find the user by username
    const user = await User.findOne(username);

    // compare the cleartext password and the pwd from the db
    // using bcrypt
    return await bcrypt.compare(textPassword, user.password);
  } catch (err) {
    console.error(err);
    return false;
  }
};

module.exports = {
  authenticate(req, res, next) {
    if (!isValidUser(req.body)) {
      return next({});
    }

    TokenService.makeToken({
      username: req.body.username,
      roles:    ['user'],
    })
      .then((token) => {
        res.locals.token = token;
        next();
      })
      .catch(next);
    return false;
  },

  allow({ roles }) {
    /* todo: check the user's roles */
    return [
      (req, res, next) => {
        TokenService.verify(req.authToken)
          .then((payload) => {
            const isAuthorized = roles.some(n => payload.roles.includes(n));
            return isAuthorized ? next() : Promise.reject('User not authorized');
          })
          .catch(next);
      },
      (err, req, res, next) => {
        console.log(err);
        res.status(403).json({});
      },
    ];
  },
};
