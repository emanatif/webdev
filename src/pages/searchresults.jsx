import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // To read query parameters
import ListingCard from '../components/listingcard';

const SearchResultsPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query'); // Get the search query from the URL
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/api/listings/search/${query}`);
        const data = await response.json();
        setListings(data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchListings();
    }
  }, [query]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Search Results for: {query}</h1>
      <div className="listing-cards-container">
        {listings.length > 0 ? (
          listings.map((listing) => (
            <ListingCard key={listing.id} {...listing} />
          ))
        ) : (
          <p>No listings found for "{query}".</p>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;
