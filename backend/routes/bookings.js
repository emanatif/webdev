const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware/user');

const {createBookings, getBookings} = require('../controllers/bookingcontrol');

// @route    GET /api/bookings
// Fetch all bookings for the logged-in user
// access   Private
router.get('/', isLoggedIn, getBookings);

// @route    POST /api/bookings
// Create a new booking
// Private
router.post('/', isLoggedIn, createBookings);
module.exports = router;