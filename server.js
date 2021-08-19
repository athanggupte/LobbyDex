'use strict';

// Imports
const express = require('express');
const morgan = require('morgan');

// Constants
const VERSION = '0.0.1';
const PORT = 50123;
const HOST = '0.0.0.0';

// Application
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get( '/', ( req, res ) => {
	res.send({ version: VERSION });
});

// Sub routes
var api = require('./api');
app.use('/api', api);

// Start the server
app.listen(PORT, HOST, () => {
	console.log(`Running on https://${HOST}:${PORT}`);
});
