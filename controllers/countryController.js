const travelDb = require ('../models/destModels');

function indexCountries(req, res, next) {
  travelDb.findAllCountries()
    .then((data) => {
      console.log('this is data from Controller: ', data)
      // res.locals.countries = data;
      // next();
      res.json(data)
    })
    .catch( err => {
      next(err)
    });
}

function getOneCountry(req, res, next) {
  travelDb.findCountryById(req.params.id)
  .then((data) => {
    // res.locals.country = data;
    // next();
    res.json(data)
  })
  .catch( err => {
    next(err)
  });
}

module.exports = {
  indexCountries,
  getOneCountry,
};
