'use strict';

// Imports
const express = require('express');

// Application
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Lobby API');
});

module.exports = router;