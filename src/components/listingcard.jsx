import { Link } from 'react-router-dom';
import './ListingCard.css';

const ListingCard = ({ id, images, title, property_type, bedrooms, bathrooms, price }) => {

  const pictureUrl = images?.picture_url ;
 
  return (
    <div className="listing-card">
      {/* Image Rendering */}
      <img 
        src={pictureUrl} 
        alt={title || 'Image unavailable'} 
        className="listing-image" 
      />
      <h3>{title}</h3>
      <p>{property_type}</p>
      <p>{bedrooms} bedrooms · {bathrooms} bathrooms</p>
      <p className="price">${price} per night</p>
      <Link to={`/listings/${id}`} className="details-button" aria-label={`View details for ${title}`}>
        Details
      </Link>
    </div>
  );
};



export default ListingCard;
