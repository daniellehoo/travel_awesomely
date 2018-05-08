const travelDb = require ('../models/destModels');

function indexCountries(req, res, next) {
console.log('indexCountries');
  travelDb.findAllCountries()
    .then((data) => {
      console.log('this is all: ', data)
      res.locals.countries = data;
      next();
    })
    .catch( err => {
      next(err)
    });
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
};
