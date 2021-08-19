'use strict';

// Imports
const express = require('express');

// Application
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Server API');
});

// Sub routes

module.exports = router;