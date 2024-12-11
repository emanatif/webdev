const Listing = require('../models/listings');
const mongoose = require('mongoose');

// Adds a place in the DB
exports.addPlace = async (req, res) => {
  try {
    const userData = req.user;
    const {
      title,
      address,
      addedPhotos,
      description,
      perks,
      extraInfo,
      maxGuests,
      price,
    } = req.body;

    // Validate required fields
    if (!title || !address || !maxGuests || !price) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields',
      });
    }

    const place = await Listing.create({
      owner: userData.id,
      title,
      address,
      photos: addedPhotos,
      description,
      perks,
      extraInfo,
      maxGuests,
      price,
    });

    res.status(200).json({
      success: true,
      message: 'Place added successfully',
      data: place,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: err.message || err,
    });
  }
};

// Returns user-specific places
exports.userPlaces = async (req, res) => {
  try {
    const userData = req.user;
    const places = await Listing.find({ owner: userData.id });

    res.status(200).json({
      success: true,
      message: 'User places fetched successfully',
      data: places,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: err.message || err,
    });
  }
};

// Updates a place
exports.updatePlace = async (req, res) => {
  try {
    const userData = req.user;
    const userId = userData.id;
    const {
      id,
      title,
      address,
      addedPhotos,
      description,
      perks,
      extraInfo,
      maxGuests,
      price,
    } = req.body;

    const place = await Listing.findById(id);
    if (!place) {
      return res.status(404).json({
        success: false,
        message: 'Place not found',
      });
    }

    if (userId !== place.owner.toString()) {
      return res.status(403).json({
        success: false,
        message: 'You are not authorized to update this place',
      });
    }

    place.set({
      title,
      address,
      photos: addedPhotos,
      description,
      perks,
      extraInfo,
      maxGuests,
      price,
    });

    await place.save();
    res.status(200).json({
      success: true,
      message: 'Place updated successfully',
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: err.message || err,
    });
  }
};

// Returns all the places in DB with pagination
exports.getPlaces = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit)|| 20;
    const page = parseInt(req.query.page) || 1;
    const places = await Listing.find()
      .limit(limit)
      .skip((page - 1) * limit);

    res.status(200).json({
      success: true,
      message: 'Places fetched successfully',
      data: places,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: err.message || err,
    });
  }
};

exports.singlePlace = async (req, res) => {
  try {
    const { id } = req.params;
    const place = await Listing.findById(id);

    if (!place) {
      return res.status(404).json({
        success: false,
        message: 'Place not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Place fetched successfully',
      data: place,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: err.message || err,
    });
  }
};

// Search places in the DB
exports.searchPlaces = async (req, res) => {
  try {
    const searchword = req.query.query; 
    console.log('Search Query Received:', searchword);
    if (!searchword) {
      return res.status(400).json({
        success: false,
        message: 'Search query is required',
      });
    }
    console.log('Searching for matches in the database...');
    
    const matches = await Listing.find({
      $or: [
        { address: { $regex: `.*${searchword}.*`, $options: 'i' } },
        { title: { $regex: `.*${searchword}.*`, $options: 'i' } },
        { description: { $regex: `.*${searchword}.*`, $options: 'i' } },
      ],
    });
    console.log('Matches Found:', matches);
    if (!matches.length) {
      console.log(`No listings found for query: "${searchword}"`); 
      return res.status(404).json({
        success: false,
        message: `No listings found for "${searchword}".`,
      });
    }
    res.status(200).json({
      success: true,
      message: 'Search results fetched successfully',
      data: matches,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: err.message || err,
    });
  }
};


