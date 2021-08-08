var express = require('express');
var router = express.Router();

// multiple controllers possibly. assign unique names
const tripsMain = require('../controllers/main');

/* GET home page. */
router
    .route('/trips')
    .get(tripsController.tripList);

    module.exports = router;
