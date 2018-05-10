const travelDb = require ('../models/destModels');
const fetch = require('node-fetch');
const secret = require('../server_secret')

module.exports = {

  indexCities(req, res, next) {
    travelDb.findAllCities()
    .then((data) => {
      console.log('this is all: ', data)
      // res.locals.cities = data;
      // console.log(data);
      res.json(data);
      // next();
    })
    .catch(err => {
        next(err);
      });
  },

  getCityByCountryId(req, res, next) {
    travelDb.findCityByCountryId(req.params.id)
    .then((data) => {
      console.log('this is getCityByCountryId', data)
      res.json(data);
    })
    .catch(err => {
      next(err);
    });
  },

  getOneCity(req, res, next) {
    travelDb.findCityById(req.params.id)
    .then((data) => {
      console.log('this is all: ', data)
      res.locals.city = data;
      next();
    })
    .catch(err => {
        next(err);
    });
  }

// async getOne(req, res, next) {
//   // Get query parameter from req.body from search;
//   // make fetch call to Triposo API with dynamic variable
//   travelDb.getOneCity(req.params.id)
//     .then(async function (city) {
//       res.locals.city = city;
//       let str = city.name;
//       str = str.replace(/\s+/g, '-').toLowerCase();
//       // Begin API query
//       async function search(qry) {
//         const response = await fetch(
//           `https://www.triposo.com/api/20180223/location.json?id=${str}&account=${secret.account}&token=${secret.key}`
//           // {
//           //   headers: {
//           //     'X-Xapp-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsImV4cCI6MTUyNDkyNDM5NiwiaWF0IjoxNTI0MzE5NTk2LCJhdWQiOiI1YWQ2YjcyYzc2MjJkZDMzOWNiMTM4N2QiLCJpc3MiOiJHcmF2aXR5IiwianRpIjoiNWFkYjQ1NmM3NjIyZGQyZTVhZmY0YjY4In0.oEXyM8TzHTvHZmneZdMHD7hNwgZBoF5XdXx5wIx363I',
//           //     'Accept': 'application/vnd.artsy-v2+json',
//           //   },
//           },
//         );
//         const json = await response.json();
//         res.locals.cityData = json;
//         Object.keys(res.locals.cityData).forEach(x => {
//         });
//       }
//       await search(str);
//       // End API query
//       next();
//     })
//     .catch(err => {
//       res.json(err);
//     });
// },


};
