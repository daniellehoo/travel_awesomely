// Setting up connection, requiring pg promises and dbConfig
const pg = require('pg-promise')({
  query: q => console.log(q.query),
});

const config = {
  host:     'localhost',
  port:     5432,
  database: 'travel_db',
};
const db = pg(process.env.DATABASE_URL || config);

module.exports = db;
// for heroku deployment: uncomment first line and comment line 9
