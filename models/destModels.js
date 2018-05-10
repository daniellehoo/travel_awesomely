// const pgp = require('pg-promise')();
const db = require('../config/connection');

function findAllCountries() {
  return db.many(`
    SELECT * FROM countries`);
}

function findCountryById(id) {
  return db.one(`
    SELECT * FROM countries
    WHERE id = $1`, id);
}

function findCountryandCitiesByCountryId(id) {
  console.log('inside the model')
  return db.any(`
    SELECT *
    FROM countries
    JOIN cities
    ON countries.id = cities.country_id
    WHERE countries.id = $1
    `, id)
}

function findAllCities() {
  return db.many(`
    SELECT * FROM cities`);
}

function findCityById(id) {
  return db.one(`
    SELECT * FROM cities
    WHERE id = $1`, id);
}

function findCityByCountryId(country_id) {
  return db.many(`
    SELECT * FROM cities
    WHERE country_id = $1`, country_id)
}

function findCommentById(id) {
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

function saveComment(data) {
  return db.one(`
    INSERT INTO comments
    VALUES ($/comment/, $/city_id
    RETURNING *`, data);
}

function destroyComment(id) {
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
  findCountryandCitiesByCountryId,
  findCountryById,
  findAllCities,
  findCityById,
  findCommentById,
  updateOneComment,
  saveComment,
  destroyComment,
  getOneUser,
  createOneUser,
};
