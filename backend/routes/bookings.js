const express = require('express');
const router = express.Router();

// POST /api/bookings: Mock route for booking a listing
router.post('/', (req, res) => {
  const { listingId, checkInDate, checkOutDate, guests } = req.body;


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