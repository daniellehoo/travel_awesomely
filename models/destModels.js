// const pgp = require('pg-promise')();
const db = require('../config/connection');

//Country Models
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
  return db.any(`
    SELECT *
    FROM countries
    JOIN cities
    ON countries.id = cities.country_id
    WHERE countries.id = $1
    `, id)
}

//City Models

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

//Comments Models
function findCommentsByCityId(id) {
  return db.any(`
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
  console.log('I am data from the model', data)
  return db.one(`
  INSERT INTO comments
  (comment, city_id)
  VALUES
  ($/comment/, $/city_id/)
  RETURNING *`, data);
}

// check this model, is there something wrong with this model?
function destroyComment(id) {
  console.log('inside the delete model')
  return db.none(`
    DELETE FROM comments
    WHERE id = $1`, id);
}

//User models
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
  findCommentsByCityId,
  updateOneComment,
  saveComment,
  destroyComment,
  getOneUser,
  createOneUser,
};
