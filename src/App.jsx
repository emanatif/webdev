import { useState } from 'react'
import Navbar from './components/navbar'
import SearchBar from './components/searchbar'
import Categories from './components/categories'
import ListingCard from './components/listingcard'
import Footer from './components/footer'
import './App.css'


// src/App.jsx
const mockListings = [
  {
      id: 1,
      image: 'https://via.placeholder.com/300',
      title: 'Cozy Beachfront Home',
      type: 'Entire home',
      guests: 4,
      bedrooms: 2,
      bathrooms: 2,
      price: 120,
      rating: 4.8,
  },
  {
      id: 2,
      image: 'https://via.placeholder.com/300',
      title: 'Mountain Cabin Retreat',
      type: 'Cabin',
      guests: 6,
      bedrooms: 3,
      bathrooms: 3,
      price: 180,
      rating: 4.9,
  }
];


const App = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Categories />
      <div className="listings">
        {mockListings.map((listing, index) => (
          <ListingCard key={index} {...listing} />
        ))}
      </div>
      <Footer />
    </div>
  );
};


export default App

