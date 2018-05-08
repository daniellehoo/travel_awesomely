const travelDb = require ('../models/destModels');

function indexCountries(req, res, next) {
  travelDb.findAllCountries()
    .then((data) => {
      res.locals.countries = data;
      next();
    })
    .catch(next);
}

function getOneCountry(req, res, next) {
  travelDb.findCountryById(req.params.id)
  .then((data) => {
    res.locals.country = data;
    next();
  })
  .catch(next);
}

module.exports = {
  indexCountries,
  getOneCountry,
}
