const express = require('express');
const cors = require('cors');
const connectDB = require('./db'); // Import the database connection function
const listingsRoute = require('./routes/listings');
const bookingsRoute = require('./routes/bookings');

// Initialize the app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON requests

// Routes
app.use('/api/listings', listingsRoute);
app.use('/api/bookings', bookingsRoute);

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
