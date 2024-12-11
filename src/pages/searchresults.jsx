import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation to get the query from URL
import axios from 'axios';
import ListingCard from '../components/listingcard';

const SearchResultsPage = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation(); 

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('query');
    console.log('Query extracted from URL:', query); // Log the extracted query
  
    if (query) {
      axios
        .get(`http://localhost:5000/api/listings/search/${encodeURIComponent(query)}`)
        .then((response) => {
          setListings(response.data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching search results:', error);
          setLoading(false);
        });
    } else {
      console.log('No query found in URL');
    }
  }, [location.search]);
  

  return (
    <div className="search-results">
      <h2>Search Results</h2>
      {loading ? (
        <p>Loading...</p>
      ) : listings.length > 0 ? (
        <div className="listing-cards-container">
          {listings.map((listing) => (
            <ListingCard
              key={listing._id}
              id={listing._id}
              title={listing.name}
              images={listing.images}
              property_type={listing.property_type}
              bedrooms={listing.bedrooms}
              bathrooms={listing.bathrooms}
              price={listing.price}
            />
          ))}
        </div>
      ) : (
        <p>No listings found</p>
      )}
    </div>
  );
};

export default SearchResultsPage;
