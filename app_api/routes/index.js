var express = require('express');
var router = express.Router();

// multiple controllers possibly. assign unique names
const tripsController = require('../controllers/trips');

// GET all trips
router
    .route('/trips')
    .get(tripsController.tripsList);

// GET single trip using trip code parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode);

module.exports = router;
