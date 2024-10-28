import React from 'react';
import './styles.css'; 
const CarCard = ({ title, price, imageUrl }) => {
  return (
    <div className="card">
      <img
        src={imageUrl}
        alt={title}
        className="car-image"
      />
      <h2>{title}</h2>
      <p className="price">{price}</p>
      <button className="btn bid">BID NOW</button>
      <button className="btn details">View Details</button>
    </div>
  );
};

export default CarCard;
