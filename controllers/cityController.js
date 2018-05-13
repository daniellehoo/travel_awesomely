const travelDb = require ('../models/destModels');
const fetch = require('node-fetch');

module.exports = {

  indexCities(req, res, next) {
    travelDb.findAllCities()
    .then((data) => {
      console.log('this is all: ', data)
      res.json(data);
    })
    .catch(err => {
        next(err);
      });
  },

  getCityByCountryId(req, res, next) {
    travelDb.findCityByCountryId(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    });
  },

  getOneCity(req, res, next) {
// Get query parameter from req.body from search;
// make fetch call to Triposo API with dynamic variable
   travelDb.findCityById(req.params.id)
      .then(data => {
      let str = data.city_name;
      str = str.replace(/\s+/g, '_')
      // Begin API query
      fetch(`https://www.triposo.com/api/20180223/location.json?id=${str}&account=${process.env.ACCOUNT}&token=${process.env.SECRET_KEY}`)
        .then(response => response.json())
          .then(data => {
            res.send(data)
          })
          .catch(err => {
          })
      })
    .catch(err => {
      res.json(err);
    });
},

};
