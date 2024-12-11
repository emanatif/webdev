import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './listingdetails.css';

const ListingDetails = () => {
  const { id } = useParams(); // Get the listing ID from the URL parameters
  console.log(id); 
  const [listing, setListing] = useState(null); // State to hold the listing details
  const [loading, setLoading] = useState(true); // Loading state to show a loader until data is fetched
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    console.log("Fetching listing with ID:", id); // Log the ID
  
    fetch(`http://localhost:5000/api/listings/${id}`)
      .then((response) => {
        if (!response.ok) {
          console.error("Error fetching listing details:", response);
          throw new Error('Failed to fetch listing details');
        }
        return response.json();
      })
      .then((data) => {
        console.log("Listing fetched:", data); // Log the fetched data
        setListing(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error during fetch:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);
  

  if (loading) {
    return <p>Loading...</p>; // Show loading message while fetching data
  }

  if (error) {
    return <p>{error}</p>; // Show error message if an error occurs
  }

  const pictureUrl = listing?.images?.picture_url;
  const title = listing?.name; 
  const summary = listing?.summary;

  // Get address fields from the listing
  const address = listing?.address 
    ? `${listing.address.street}, ${listing.address.suburb}, ${listing.address.country}`
    : 'No address listed';

  return (
    <div className="listing-details">
      <img src={pictureUrl} alt={title} />
      <div className="details">
        <h1>{title}</h1>
        
        <p className="address">{address}</p> 
        
        <h3>Type: {listing?.property_type}</h3>
        <p>Price: ${listing?.price} per night</p>
        <p>Guests: {listing?.guests}</p>
        <p>Bedrooms: {listing?.bedrooms}</p>
        <p>Bathrooms: {listing?.bathrooms}</p>

        {/* Rendering amenities */}
        <h3>Amenities: </h3>
        <p>
          {listing?.amenities?.length > 0
            ? listing.amenities.join(', ') 
            : 'No amenities listed.'}
        </p>

        {/* Displaying the summary */}
        <h3>Summary:</h3>
        <p>{summary}</p>

        <div className="buttons-container">
          <Link to="/" className="back-button">Back to Listings</Link>
          <Link to={`/book/${listing._id}`} className="book-now-button">Book Now</Link>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
