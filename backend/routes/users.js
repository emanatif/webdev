const express = require('express');
const router = express.Router();

const {
  register,
  login,
  googleLogin,
  updateUserDetails,
  logout,
} = require('../controllers/userscontrol');

// Register and Login Routes
router.route('/register').post(register);
router.route('/login').post(login);

// Google Login Route
router.route('/google/login').post(googleLogin);

// User profile update and logout routes
router.route('/update-user').put(updateUserDetails);
router.route('/logout').get(logout);

module.exports = router;
