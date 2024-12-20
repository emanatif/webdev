
import React, { useState } from 'react';
import './Categories.css'; 

const categories = ['House', 'Cabins', 'Trending', 'Apartment', 'Luxe','Countryside','Islands','Farms','Lakefront','Beachfront'];

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
