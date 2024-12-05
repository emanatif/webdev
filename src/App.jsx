import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchBar from './components/searchbar';
import Categories from './components/Categories';
import ListingCard from './components/listingcard';
import Footer from './components/Footer';
import BookingPage from './pages/bookings';
import ListingDetails from './pages/listingdetails';
import SearchResultsPage from './pages/searchresults';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const App = () => {
  const [listings, setListings] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/listings')
      .then((response) => {
        setListings(response.data.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the listings:', error);
        setListings([]);
      });
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          {/* Main Listings Page */}
          <Route
            path="/"
            element={
              <div className="main-content">
                <SearchBar />
                <Categories
                  activeCategory={activeCategory}
                  setActiveCategory={setActiveCategory}
                />
                <div className="listing-cards-container">
                  {listings
                    .filter(
                      (listing) =>
                        activeCategory === 'All' ||
                        listing.category.toLowerCase() === activeCategory.toLowerCase()
                    )
                    .map((listing) => (
                      <ListingCard key={listing._id} {...listing} /> // Use _id or unique identifier
                    ))}
                </div>
              </div>
            }
          />
          {/* Search Results Page */}
          <Route path="/search-results" element={<SearchResultsPage />} />
          {/* Listing Details Page */}
          <Route path="/listings/:id" element={<ListingDetails />} />
          {/* Booking Form Route */}
          <Route path="/book/:id" element={<BookingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
