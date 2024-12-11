const express = require('express');
const router = express.Router();

const {
  register,
  login,
} = require('../controllers/userscontrol');

// Register and Login Routes
router.route('/register').post(register);
router.route('/login').post(login);

module.exports = router;
