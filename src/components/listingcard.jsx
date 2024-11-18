<<<<<<< HEAD
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
=======
// src/components/ListingCard.jsx
import React from 'react';
import './styles/listingcard.css';

const ListingCard = ({ listing }) => {
    return (
        <div className="listing-card">
            <img 
                src={listing.image || 'https://via.placeholder.com/300'} 
                alt={listing.title} 
                className="listing-image" 
            />
            <h3>{listing.title}</h3>
            <p>{listing.type}</p>
            <p>{listing.guests} guests · {listing.bedrooms} bedrooms · {listing.bathrooms} bathrooms</p>
            <p>${listing.price} / night</p>
            <p>Rating: {listing.rating}</p>
        </div>
    );
};

export default ListingCard;
>>>>>>> 5f8cba447a5ed74e35e95002789bf2629f8a4403
