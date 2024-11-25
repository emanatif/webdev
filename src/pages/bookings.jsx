import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './bookings.css';

const BookingPage = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(''); // State for feedback message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for form validation before submitting
    if (!formData.name || !formData.email || !formData.checkIn || !formData.checkOut || formData.guests < 1) {
      setMessage('Please fill in all required fields.');
      return;
    }

    if (new Date(formData.checkIn) >= new Date(formData.checkOut)) {
      setMessage('Check-out date must be later than check-in date.');
      return;
    }

    setIsSubmitting(true);
    setMessage(''); // Clear any previous messages

    fetch('http://localhost:5000/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, listingId: id }),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
        setIsSubmitting(false);
      })
      .catch((error) => {
        setMessage('Something went wrong. Please try again.');
        setIsSubmitting(false);
      });
  };

  return (
    <div className="booking-page">
      <h2>Booking for Listing #{id}</h2>
      <div className="booking-page-container">
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          {/* Email Field */}
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          {/* Check-In Field */}
          <label>
            Check-In:
            <input
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              required
            />
          </label>

          {/* Check-Out Field */}
          <label>
            Check-Out:
            <input
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              required
            />
          </label>

          {/* Guests Field */}
          <label>
            Guests:
            <input
              type="number"
              name="guests"
              value={formData.guests}
              min="1"
              onChange={handleChange}
              required
            />
          </label>

          {/* Submit Button */}
          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? 'Processing...' : 'Confirm Booking'}
          </button>
        </form>

        {/* Feedback Message */}
        {message && (
          <div className={`message ${message.includes('successful') ? 'success' : 'error'}`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingPage;
