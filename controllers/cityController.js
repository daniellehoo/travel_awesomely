const travelDb = require ('../models/destModels');
const fetch = require('node-fetch');

function indexCities(req, res, next) {
  travelDb.findAllCities()
  .then((data) => {
    res.locals.cities = data;
    next();
  })
  .catch(next);
}

function getOneCity(req, res, next) {
  travelDb.findCountryById(req.params.id)
  .then((data) => {
    res.locals.country = data;
    next();
  })
  .catch(next);
}

module.exports = {
  indexCities,
  getOneCity,
}
