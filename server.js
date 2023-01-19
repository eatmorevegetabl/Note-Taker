const express = require('express');
const path = require('path');
const htmlRoutes = require('../Note-Taker/routes/htmlRoutes.js');
const api = require('../Note-Taker/routes/index');
const html = require('../Note-Taker/routes/index');

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use('/', html);

app.use(express.static('public'));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);