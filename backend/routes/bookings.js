const express = require('express');
const router = express.Router();

// POST /api/bookings: Mock route for booking a listing
router.post('/', (req, res) => {
  // In a real scenario, you would validate the data and save it to a database.
  const { listingId, checkInDate, checkOutDate, guests } = req.body;

  // Example of mocked data validation
  if (!listingId || !checkInDate || !checkOutDate || !guests) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Mock successful booking response
  res.status(201).json({
    message: 'Booking successful!',
    bookingDetails: {
      listingId,
      checkInDate,
      checkOutDate,
      guests,
    },
  });
});

module.exports = router;
