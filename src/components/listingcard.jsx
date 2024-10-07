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
