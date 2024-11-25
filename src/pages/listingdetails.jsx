import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './listingdetails.css';

const ListingDetails = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/listings/${id}`)
      .then((response) => response.json())
      .then((data) => setListing(data))
      .catch(() => alert('Failed to fetch listing details.'));
  }, [id]);

  if (!listing) {
    return <p>Loading...</p>;
  }

  return (
    <div className="listing-details">
      <img src={listing.image} alt={listing.title} />
      <h1>{listing.title}</h1>
      <p>Type: {listing.type}</p>
      <p>Price: ${listing.price} per night</p>
      <p>Guests: {listing.guests}</p>
      <p>Bedrooms: {listing.bedrooms}</p>
      <p>Bathrooms: {listing.bathrooms}</p>
      <ul>
        {listing.amenities?.map((amenity, index) => (
          <li key={index}>{amenity}</li>
        )) || <p>No amenities listed.</p>}
      </ul>
      <Link to="/" className="back-button">
        Back to Listings
      </Link>
      <Link to={`/book/${id}`} className="book-now-button">
        Book Now
      </Link>
    </div>
  );
};

export default ListingDetails;
