import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import './loginsignup.css';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [redirect, setRedirect] = useState(false);

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return toast.error('Passwords do not match');
    }

    try {
      const response = await axios.post('http://localhost:5000/api/users/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      if (response.data.success) {
        toast.success('Account created successfully!');
        // Clear form data
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
        setRedirect(true); // Trigger redirect to login page
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('Error during signup. Please try again later.');
    }
  };

  if (redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="form-container">
      <div className="form-box">
        <h1>Signup</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={handleFormData}
            className="form-input"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleFormData}
            className="form-input"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleFormData}
            className="form-input"
          />
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleFormData}
            className="form-input"
          />
          <button type="submit" className="form-button">Signup</button>
        </form>
        <p className="link">
          Already have an account?{' '}
          <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
