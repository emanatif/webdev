import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import './loginsignup.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [redirect, setRedirect] = useState(false);

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
      
    // Log the form data to check if it's being captured correctly
    console.log('Form Data:', formData);
      
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email: formData.email,
        password: formData.password,
      });

      if (response.data.success) {
        toast.success('Login successful!');
        setRedirect(true);
        // Optionally, store the token or user data in localStorage/session
        localStorage.setItem('token', response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('Error during login. Please try again later.');
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className="form-container">
      <div className="form-box">
        <h1>Login</h1>
        <form onSubmit={handleFormSubmit}>
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
          <button type="submit" className="form-button">Login</button>
        </form>
        <p className="link">
          Don't have an account?{' '}
          <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
