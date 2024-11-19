const express = require('express');
const router = express.Router();
const listings = require('../data/listings.json');

// GET /api/listings: Fetch all listings
router.get('/', (req, res) => {
  res.json(listings);
});

// GET /api/listings/:id: Fetch a listing by ID
router.get('/:id', (req, res) => {
  const listing = listings.find((l) => l.id === parseInt(req.params.id));
  if (!listing) {
    return res.status(404).json({ message: 'Listing not found' });
  }
  res.json(listing);
});

// GET /api/listings/search: Search listings by query (e.g., location)
router.get('/search', (req, res) => {
  const query = req.query.query.toLowerCase();
  const filteredListings = listings.filter(
    (listing) => listing.title.toLowerCase().includes(query) || listing.category.toLowerCase().includes(query)
  );
  res.json(filteredListings);
});

module.exports = router;
