require('dotenv').config();
const express    = require('express');
const logger     = require('morgan');
const path       = require('path');
const bodyParser = require('body-parser');


// start express
const app = express();
const PORT = process.env.PORT || 5000;

//require body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//require routes
const destinationRouter = require('./routes/router');

// some logging
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'dist')));

// ROUTE HANDLER
app.use('/', destinationRouter);

// app.get('/api/hello', (req, res) => {
//   res.send({ express: 'Hello From Express' });
// });

// app.use('/', (req, res) => {
//   res.json({ message: 'hello from /' });
// });

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  res.status(500).send('Something broke!');
});


// START SERVER
app.listen(PORT, () => {
  console.log(`Server up and listening on port ${PORT}, in ${app.get('env')} mode.`);
}).on('error', console.error);

module.exports = app;
