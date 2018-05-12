const travelDb = require ('../models/destModels');

function indexCountries(req, res, next) {
  travelDb.findAllCountries()
    .then((data) => {
      console.log('$$$this is data from indexCountries Controller: ', data)
      res.json(data)
    })
    .catch( err => {
      next(err)
    });
}

function getOneCountry(req, res, next) {
  console.log('getOneCountryController', req.params.id)
  travelDb.findCountryandCitiesByCountryId(req.params.id)
  .then((data) => {
    console.log('data from country controller:', data)
    res.json(data)
  })
  .catch( err => {
    next(err)
  });
}



module.exports = {
  indexCountries,
  getOneCountry
};
