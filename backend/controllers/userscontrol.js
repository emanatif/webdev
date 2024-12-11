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
