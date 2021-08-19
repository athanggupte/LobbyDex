'use strict';

// Imports
const express = require('express');

// Application
const router = express.Router();

router.get('/', (req, res) => {
    res.send('User API');
});

module.exports = router;