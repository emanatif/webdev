const jwt = require('jsonwebtoken');
const User = require('../models/users');

// Checks user is logged in based on the passed token and sets the user in request
exports.isLoggedIn = async (req, res, next) => {
    // Token could be found in cookies or the Authorization header
    const token = req.cookies.token || (req.header('Authorization') && req.header('Authorization').replace('Bearer ', ''));

    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Login first to access this page',
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: 'User not found',
            });
        }
        next();
    } catch (error) {
        console.error('JWT verification error:', error);
        return res.status(401).json({
            success: false,
            message: 'Invalid token',
        });
    }
};
