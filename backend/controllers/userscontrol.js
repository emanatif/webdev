const User = require('../models/users');
const cookieToken = require('../utils/cookieToken');
const bcrypt = require('bcryptjs');

// Register/SignUp user
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: 'Name, email, and password are required',
      });
    }

    // Check if user is already registered
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        message: 'User already registered!',
      });
    }

    user = await User.create({
      name,
      email,
      password,
    });

    // After creating new user in DB, send the token
    cookieToken(user, res);
  } catch (err) {
    res.status(500).json({
      message: 'Internal server error',
      error: err,
    });
  }
};

// Login/SignIn user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: 'Email and password are required!',
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: 'User does not exist!',
      });
    }

    const isPasswordCorrect = await user.isValidatedPassword(password);

    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: 'Email or password is incorrect!',
      });
    }

    // If everything is fine, send the token
    cookieToken(user, res);
  } catch (err) {
    res.status(500).json({
      message: 'Internal server error',
      error: err,
    });
  }
};

// Google Login
exports.googleLogin = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        message: 'Name and email are required',
      });
    }

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        name,
        email,
        password: await bcrypt.hash(Math.random().toString(36).slice(-8), 10),
      });
    }

    cookieToken(user, res);
  } catch (err) {
    res.status(500).json({
      message: 'Internal server error',
      error: err,
    });
  }
};

// Update user details
exports.updateUserDetails = async (req, res) => {
  try {
    const { name, password, email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    user.name = name;
    if (password) {
      user.password = password;
    }

    const updatedUser = await user.save();
    cookieToken(updatedUser, res);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};

// Logout
exports.logout = async (req, res) => {
  res.cookie('token', null, {
    expires: new Date(Date.now()),
    httpOnly: true,
    secure: true, // Only send over HTTPS
    sameSite: 'none', // Allow cross-origin requests
  });

  res.status(200).json({
    success: true,
    message: 'Logged out',
  });
};
