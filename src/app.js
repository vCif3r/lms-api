const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();
const cors = require('cors');

// Middlewares
app.use(bodyParser.json());
app.use(cors());
// Rutas
app.use('/api', routes);


module.exports = app;