<<<<<<< HEAD
import React, { useState } from 'react';
import './SearchBar.css'; 

const SearchBar = () => {
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    console.log(`Searching for properties in ${location}`);
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
=======
import React, { useState } from 'react';
import './styles/searchbar.css';

const SearchBar = () => {
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    console.log(`Searching for: ${location}`);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Where are you going?"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
>>>>>>> 5f8cba447a5ed74e35e95002789bf2629f8a4403
