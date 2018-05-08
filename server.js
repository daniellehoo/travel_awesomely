require('dotenv').config();
const express    = require('express');
const logger     = require('morgan');
const path       = require('path');

// start express
const app = express();
const PORT = process.env.PORT || 3000;

//require routes
const destinationRouter = require('./routes/router');

// some logging
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'dist')));

// ROUTE HANDLER
app.use('/', destinationRouter);

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
