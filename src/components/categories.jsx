
import React, { useState } from 'react';
import './styles/searchbar.css';

const SearchBar = () => {
    const [location, setLocation] = useState('');

    const handleSearch = () => {
        // Implement search functionality here
        console.log('Searching for:', location);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Where are you going?"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="location-input"
            />
            <button onClick={handleSearch} className="search-button">
                Search
            </button>
        </div>
    );
};

export default SearchBar;
