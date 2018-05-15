const db = require('../config/connection');
const bcrypt = require('bcrypt');

const saltRounds = 10;

// Take a username and password; hash the password and try to create a new user
function register(credentials) {
  // First hash the password https://www.npmjs.com/package/bcrypt#with-promises
  return bcrypt.hash(credentials.password, saltRounds)
    .then((hash) => {
      const newUser = {
        username: credentials.username,
        password: hash,
      };
      return db.one(`
        INSERT INTO users (username, password)
        VALUES ($/username/, $/password/)
        RETURNING id, username
      `, newUser);
    });
}

function findByUsername(username) {
  return db.one(`
    SELECT * FROM users
    WHERE username = $1
  `, username);
}

function login(credentials) {
  return findByUsername(credentials.username)
    .then(user => (
      // compare the provided password with the password digest
      bcrypt.compare(credentials.password, user.pw_digest)
        // match is a boolean if hashing the provided password
        // matches the hashed password
        .then((match) => {
          if (!match) throw new Error('Credentials do not match');
          delete user.password;
          return user;
        })
    ));
}

module.exports = {
  register,
  login,
};
