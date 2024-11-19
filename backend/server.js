const express = require('express');
const cors = require('cors');
const listingsRoute = require('./routes/listings');
const bookingsRoute = require('./routes/bookings');

const app = express();

app.use(cors());
app.use(express.json()); // To parse JSON requests

// Use the routes for listings and bookings
app.use('/api/listings', listingsRoute);
app.use('/api/bookings', bookingsRoute);

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
