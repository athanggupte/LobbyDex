'use strict';

// Imports
const express = require('express');

// Application
const router = express.Router();

router.get('/', (req, res) => {
    res.send('API');
});

const lobbies = require('./lobbies.js');
router.get('/lobbies', (req, res) => {
    res.send(lobbies.getLobbiesByPing());
});

// Sub routes
const user = require('./user');
router.use('/user', user);

const lobby = require('./lobby');
router.use('/lobby', lobby);

module.exports = router;