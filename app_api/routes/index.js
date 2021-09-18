const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload'
})

const tripsController = require('../controllers/trips');
const authController = requires('../controllers/authentication')

// GET all trips
router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(auth, tripsController.tripsAddTrip);

// GET single trip using trip code parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .post(tripsController.tripsAddTrip)
    .put(auth, tripsController.tripsUpdateTrip);

// login
router
    .route('/login')
    .post(authController.login);

// register
router
   .route('/register')
   .post(authController.register);

module.exports = router;
