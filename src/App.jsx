import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import ListingCard from './components/ListingCard';
import Footer from './components/Footer';
import './App.css';
import axios from 'axios';

const App = () => {
  const [listings, setListings] = useState([]); // State to store listings
  const [activeCategory, setActiveCategory] = useState('All');

  // Fetch listings from backend on component mount
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/listings') // Make GET request to your backend
      .then((response) => {
        setListings(response.data); // Update state with data from backend
      })
      .catch((error) => {
        console.error('There was an error fetching the listings:', error);
      });
  }, []); // Empty dependency array means this will run once when the component mounts

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <SearchBar />
        <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <div className="listing-cards-container">
          {listings
            .filter((listing) => activeCategory === 'All' || listing.category === activeCategory)
            .map((listing) => (
              <ListingCard key={listing.id} {...listing} />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
