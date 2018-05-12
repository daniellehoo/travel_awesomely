const travelDb = require ('../models/destModels');

function indexCountries(req, res, next) {
  travelDb.findAllCountries()
    .then((data) => {
      console.log('$$$this is data from Controller: ', data)
      // res.locals.countries = data;
      // next();
      res.json(data)
    })
    .catch( err => {
      next(err)
    });
}

function getOneCountry(req, res, next) {
  console.log('we are here', req.params.id)
  travelDb.findCountryandCitiesByCountryId(req.params.id)
  .then((data) => {
    // res.locals.country = data;
    // next();
    console.log('this is for sure firing')
    console.log('data from controller:' + data)
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
