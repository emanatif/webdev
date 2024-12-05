import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import './SearchBar.css'; 

const SearchBar = () => {
  const [location, setLocation] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleSearch = () => {
    if (location) {
      navigate(`/search-results?query=${location}`); // Redirect to search results page with query
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Where are you going?"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
