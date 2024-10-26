import React from 'react';
import { useLocation } from 'react-router-dom';

export default function AuctionDetails() {
  const location = useLocation();
  const { car } = location.state;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{car.name}</h1>
      <img src={car.img} alt={car.name} className="w-full rounded-md mb-4" />
      <div className="bg-white p-4 rounded-lg shadow-md">
        <p className="text-lg"><strong>Manufactured Year:</strong> {car.year}</p>
        <p className="text-lg"><strong>Brand:</strong> {car.brand}</p>
        <p className="text-lg"><strong>Model:</strong> {car.model}</p>
        <p className="text-lg"><strong>Features:</strong> {car.features}</p>
        <p className="text-lg"><strong>Description:</strong> {car.description}</p>
        <p className="text-lg"><strong>Current Bid:</strong> {car.price}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
}