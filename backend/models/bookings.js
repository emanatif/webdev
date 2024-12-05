const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user:{
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  listing: {
    type: mongoose.Schema.ObjectId,
    ref: "Listing",
    required: true,
  },
  checkIn: {
    type: Date,
    required: true,
  },
  checkOut: {
    type: Date,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;