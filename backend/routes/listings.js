const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware/user');
const {
  addPlace,
  getPlaces,
  updatePlace,
  singlePlace,
  userPlaces,
  searchPlaces,} = require('../controllers/listingscontrol');

// @route    GET /api/listings
//Fetch all listings
// @access   Public
router.get('/', getPlaces);

// @route    POST /api/listings/add-places
// Add a new place
// @access   Private
router.post('/add-places', isLoggedIn, addPlace);

// @route    GET /api/listings/user-places
// Get listings of the logged-in user
// @access   Private
router.get('/user-places', isLoggedIn, userPlaces);

// @route    PUT /api/listings/update-place
// Update a specific place
// @access   Private
router.put('/update-place', isLoggedIn, updatePlace);

// @route    GET /api/listings/:id
// Get details of a single place by ID
// @access   Public
router.get('/:id', singlePlace);

// @route    GET /api/listings/search/:key
// Search listings by keyword
// @access   Public
router.get('/search/:key', searchPlaces);

module.exports = router;
