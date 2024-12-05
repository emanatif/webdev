const Booking = require('../models/bookings');

// Books a place
exports.createBookings = async (req, res) => {
    try {
        const userData = req.user;
        const { place, checkIn, checkOut, numOfGuests, name, phone, price } = req.body;

        // Validate required fields
        if (!place || !checkIn || !checkOut || !price) {
            return res.status(400).json({
                success: false,
                message: 'Missing required fields.',
            });
        }

        // Create booking
        const booking = await Booking.create({
            user: userData.id,
            place,
            checkIn,
            checkOut,
            numOfGuests,
            name,
            phone,
            price,
        });

        res.status(200).json({
            success: true,
            message: 'Booking created successfully.',
            data: booking,
        });
    } catch (err) {
        console.error('Error creating booking:', err);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: err.message,
        });
    }
};

// Returns user-specific bookings
exports.getBookings = async (req, res) => {
    try {
        const userData = req.user;

        if (!userData) {
            return res.status(401).json({
                success: false,
                message: 'You are not authorized to access this page!',
            });
        }

        // Fetch bookings
        const bookings = await Booking.find({ user: userData.id }).populate('place');

        res.status(200).json({
            success: true,
            message: 'Bookings fetched successfully.',
            data: bookings,
        });
    } catch (err) {
        console.error('Error fetching bookings:', err);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: err.message,
        });
    }
};
