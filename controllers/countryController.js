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

function superHacky(req, res) {
  let theID = req.params.id;
  res.json({ countryId: theID})
}

module.exports = {
  indexCountries,
  getOneCountry,
  superHacky
};
