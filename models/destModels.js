const pgp = require('pg-promise')();
const config = require('../config/connection');

const db = pgp(config);

function findAllCountries() {
  return db.many(`
    SELECT * FROM countries`);
}

function getOneCountry(id) {
  return db.one(`
    SELECT * FROM countries
    WHERE id = $1`, id);
}

function findAllCities() {
  return db.many(`
    SELECT * FROM cities`);
}

function getOneCity(id) {
  return db.one(`
    SELECT * FROM cities
    WHERE id = $1`, id);
}

function getOneComment(id) {
  return db.one(`
    SELECT * FROM comments
    WHERE city_id = $1`, id);
}

function updateOneComment(id, data) {
  return db.one(`
    UPDATE comments
    SET comment = $/comment/, city_id = $/city_id/
    WHERE id = $/id/
    RETURNING *`, id, data);
}

function makeOneComment(data) {
  return db.one(`
    INSERT INTO comments
    VALUES ($/comment/, $/city_id
    RETURNING *`, data);
}

function deleteOneComment(id) {
  return db.none(`
    DELETE FROM comments
    WHERE id = $1`, id);
}

function getOneUser(id) {
  return db.one(`
    SELECT * FROM users
    WHERE id = $1`, id);
}

function createOneUser(data) {
  return db.one(`
    INSERT INTO users
    VALUES ($/username/, $/password/`, data);
}

module.exports = {
  findAllCountries,
  getOneCountry,
  findAllCities,
  getOneCity,
  getOneComment,
  updateOneComment,
  makeOneComment,
  deleteOneComment,
  getOneUser,
  createOneUser,
};
