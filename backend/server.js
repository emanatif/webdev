const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const listingsRoute = require('./routes/listings');
const bookingsRoute = require('./routes/bookings');
const usersRoute = require('./routes/users');
const { isLoggedIn } = require('./middleware/user'); 

// Load environment variables from .env file
dotenv.config();

// Validate environment variables
if (!process.env.DB_URL || !process.env.JWT_SECRET) {
    throw new Error('Missing required environment variables');
}

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
    console.log('DB connection failed:', err.message);
    process.exit(1);
  });

// Middleware
app.use(cors()); 
app.use(cookieParser());
app.use(express.json()); // To parse JSON request bodies


// Routes
// Public Routes (No authentication required)
app.use('/api/listings', listingsRoute);
app.use('/api/bookings', bookingsRoute);

// Protected Routes (Auth middleware applied)
app.use('/api/users', usersRoute);

// Catch-all route for any unmatched routes
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Error details:', err.stack || err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
