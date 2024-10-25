import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auction from './Auction'; 

function Homepage() {
  const [isAuctionOpen, setIsAuctionOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const cars = [
    { id: 1, img: "src/image/car3.jpg", name: "2021 McLaren 720s", price: "$260,000" },
    { id: 2, img: "src/image/car4.jpg", name: "2020 Rolls Royce Ghost", price: "$299,000" },
    { id: 3, img: "src/image/car2.jpg", name: "Bugatti Veyron Vision GT", price: "$2,555,000" },
    { id: 4, img: "src/image/bmw.png", name: "Bentley Flying Spur", price: "$319,000" },
    { id: 5, img: "src/image/car2.jpg", name: "Bugatti Veyron Vision GT", price: "$2,555,000" },
    { id: 6, img: "src/image/bmw.png", name: "Bentley Flying Spur", price: "$319,000" },
    { id: 7, img: "src/image/bmw2.png", name: "Bentley Flying Spur", price: "$319,000" },
    { id: 8, img: "src/image/car5.png", name: "Bentley Flying Spur", price: "$319,000" },
    { id: 9, img: "src/image/toyota.png", name: "Bentley Flying Spur", price: "$319,000" },
    { id: 10, img: "src/image/benz2.png", name: "Bentley Flying Spur", price: "$319,000" },
    { id: 11, img: "src/image/benz.png", name: "Bentley Flying Spur", price: "$319,000" },
    { id: 12, img: "src/image/benz4.png", name: "Bentley Flying Spur", price: "$319,000" },
    // Add more cars as needed
  ];

  const handlePlaceBid = (car) => {
    setSelectedCar(car);
    setIsAuctionOpen(true);
  };

  const closeAuction = () => {
    setIsAuctionOpen(false);
    setSelectedCar(null);
  };

  return (
    <div className="flex justify-between gap-5 flex-wrap max-w-5xl mx-auto my-5">
      {cars.map((car) => (
        <div key={car.id} className="bg-white border border-gray-300 rounded-lg w-64 text-center shadow-md p-5 transition-transform duration-300 hover:-translate-y-2">
          <img src={car.img} alt={car.name} className="w-full rounded-md" />
          <h2 className="text-lg my-3">{car.name}</h2>
          <p className="text-2xl font-bold text-gray-800 mb-5">{car.price}</p>
          <button
            className="w-full bg-orange-500 text-white font-bold py-2 rounded mb-2 transition-opacity duration-300 hover:opacity-90"
            onClick={() => handlePlaceBid(car)}
          >
            Place Bid
          </button>
          <button
            className="w-full bg-blue-600 text-white font-bold py-2 rounded transition-opacity duration-300 hover:opacity-90"
          >
            View Details
          </button>
        </div>
      ))}

      {isAuctionOpen && <Auction car={selectedCar} onClose={closeAuction} />}
    </div>
  );
}

export default Homepage;
