import React from 'react';
import './ListingCard.css'; 

const ListingCard = ({ image, title, type, guests, bedrooms, bathrooms, price, rating }) => {
  return (
    <div className="listing-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{type}</p>
      <p>{guests} guests · {bedrooms} bedrooms · {bathrooms} bathrooms</p>
      <p className="price">${price} per night</p>
      <p className="rating">Rating: {rating}</p>
    </div>
  );
};

export default ListingCard;
