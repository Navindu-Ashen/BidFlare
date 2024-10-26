import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Auction from './Auction'; // Import Auction component

export default function AuctionDetails() {
  const location = useLocation();
  const { car } = location.state;

  const [isAuctionOpen, setIsAuctionOpen] = useState(false);

  const handlePlaceBid = () => {
    setIsAuctionOpen(true);
  };

  const closeAuction = () => {
    setIsAuctionOpen(false);
  };

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
      <div className="mt-4 flex space-x-4">
        <button
          className="bg-orange-500 text-white font-bold py-2 px-4 rounded transition-opacity duration-300 hover:opacity-90"
          onClick={handlePlaceBid}
        >
          Place Bid
        </button>
      </div>

      {isAuctionOpen && <Auction car={car} onClose={closeAuction} />}
    </div>
  );
}