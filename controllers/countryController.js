const travelDb = require('../models/destModels');

function indexCountries(req, res, next) {
  travelDb.findAllCountries()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      next(err);
    });
}

function getOneCountry(req, res, next) {
  travelDb.findCountryandCitiesByCountryId(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      next(err);
    });
}


module.exports = {
  indexCountries,
  getOneCountry,
};
