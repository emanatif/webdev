<<<<<<< HEAD
import React, { useState } from 'react';
import './Categories.css'; 

const categories = ['Rooms', 'Cabins', 'Trending', 'Surfing', 'Luxe','Countryside','Islands','Farms','Lakefront','Beachfront'];

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState('');

  return (
    <div className="categories">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={activeCategory === category ? 'active' : ''}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
=======

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
>>>>>>> 5f8cba447a5ed74e35e95002789bf2629f8a4403
