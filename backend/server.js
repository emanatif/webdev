const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const listingsRoute = require('./routes/listings');
const bookingsRoute = require('./routes/bookings');
const usersRoute = require('./routes/users');
const { isLoggedIn } = require('./middleware/user'); 

// Load environment variables from .env file
dotenv.config();

// Initialize the app
const app = express();

// MongoDB Connection
mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connected successfully'))
  .catch((err) => {
    console.log('DB connection failed');
    console.log(err);
    process.exit(1); // Exit if connection fails
  });

// Middleware
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // To parse incoming JSON requests

// Routes
// Public Routes (No authentication required)
app.use('/api/listings', listingsRoute);
app.use('/api/bookings', bookingsRoute);

// Protected Routes (Auth middleware applied)
// If you want authentication, uncomment the following line:
app.use('/api/users', usersRoute);

// Catch-all route for any unmatched routes
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Server Error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
  });
});

// Start the server
const PORT = process.env.PORT || 5000; // Use the port from the .env file, or default to 5000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
