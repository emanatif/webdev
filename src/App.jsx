<<<<<<< HEAD
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import ListingCard from './components/ListingCard';
import Footer from './components/Footer';
import './App.css';  
import rooms from './assets/rooms.png';
import trending from './assets/trending.png';
import cabin from './assets/cabin.png';
import surfing from './assets/surfing.png';
import luxe from './assets/luxe.png';
import countryside from './assets/countryside.png';
import island from './assets/island.png';
import farm from './assets/farm.png';
import lakefront from './assets/lakefront.png';

const App = () => {
  const [listings, setListings] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');

  const mockListings = [
    {
      category: "Rooms",
      image : rooms,
      title: "Cozy Room in Downtown",
      type: "Private room",
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      price: 75,
      rating: 4.8,
    },
    {
      category: "Cabins",
      image: trending,
      title: "Mountain Cabin Getaway",
      type: "Entire cabin",
      guests: 4,
      bedrooms: 2,
      bathrooms: 1,
      price: 150,
      rating: 4.9,
    },
    {
      category: "Trending",
      image: cabin,
      title: "Modern Loft in the City",
      type: "Entire loft",
      guests: 3,
      bedrooms: 1,
      bathrooms: 1,
      price: 130,
      rating: 4.7,
    },
    {
      category: "Surfing",
      image:surfing,
      title: "Beachfront Surf House",
      type: "Entire house",
      guests: 6,
      bedrooms: 3,
      bathrooms: 2,
      price: 200,
      rating: 4.9,
    },
    {
      category: "Luxe",
      image: luxe,
      title: "Luxury Villa with Ocean View",
      type: "Entire villa",
      guests: 10,
      bedrooms: 5,
      bathrooms: 4,
      price: 600,
      rating: 5.0,
    },
    {
      category: "Countryside",
      image: countryside,
      title: "Countryside Farmhouse",
      type: "Entire farmhouse",
      guests: 8,
      bedrooms: 4,
      bathrooms: 2,
      price: 180,
      rating: 4.6,
    },
    {
      category: "Islands",
      image: island,
      title: "Private Island Bungalow",
      type: "Entire bungalow",
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      price: 300,
      rating: 4.8,
    },
    {
      category: "Farms",
      image: farm,
      title: "Organic Farm Stay",
      type: "Entire house",
      guests: 4,
      bedrooms: 2,
      bathrooms: 1,
      price: 90,
      rating: 4.7,
    },
    {
      category: "Lakefront",
      image: lakefront,
      title: "Lakefront Cottage",
      type: "Entire cottage",
      guests: 6,
      bedrooms: 3,
      bathrooms: 2,
      price: 220,
      rating: 4.9,
    }
  ];
  


  React.useEffect(() => {
    setListings(mockListings);
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <SearchBar />
        <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <div className="listing-cards-container">
          {listings
            .filter((listing) => activeCategory === 'All' || listing.type === activeCategory)
            .map((listing) => (
              <ListingCard key={listing.id} {...listing} />
            ))}
        </div>
=======
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
>>>>>>> 5f8cba447a5ed74e35e95002789bf2629f8a4403
      </div>
      <Footer />
    </div>
  );
};

<<<<<<< HEAD
export default App;
=======

export default App

>>>>>>> 5f8cba447a5ed74e35e95002789bf2629f8a4403
