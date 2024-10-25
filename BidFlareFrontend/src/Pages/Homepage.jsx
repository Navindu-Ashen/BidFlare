import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auction from './Auction'; // Import Auction component
import "../Pages/styles.css";

function Homepage() {
  const [isAuctionOpen, setIsAuctionOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const cars = [
    { id: 1, img: "src/image/car3.jpg", name: "2021 McLaren 720s", price: "$260,000" },
    { id: 2, img: "src/image/car4.jpg", name: "2020 Rolls Royce Ghost", price: "$299,000" },
    { id: 3, img: "src/image/car2.jpg", name: "Bugatti Veyron Vision GT", price: "$2,555,000" },
    { id: 4, img: "src/image/car1.jpg", name: "Bentley Flying Spur", price: "$319,000" },
    { id: 4, img: "src/image/car1.jpg", name: "Bentley Flying Spur", price: "$319,000" },
    { id: 4, img: "src/image/car1.jpg", name: "Bentley Flying Spur", price: "$319,000" },
    { id: 4, img: "src/image/car1.jpg", name: "Bentley Flying Spur", price: "$319,000" },
    { id: 4, img: "src/image/car1.jpg", name: "Bentley Flying Spur", price: "$319,000" },
    { id: 4, img: "src/image/car1.jpg", name: "Bentley Flying Spur", price: "$319,000" },
    { id: 4, img: "src/image/car1.jpg", name: "Bentley Flying Spur", price: "$319,000" },
    { id: 4, img: "src/image/car1.jpg", name: "Bentley Flying Spur", price: "$319,000" },
    { id: 4, img: "src/image/car1.jpg", name: "Bentley Flying Spur", price: "$319,000" },
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
    <div className="container">
      {cars.map((car) => (
        <div className="card" key={car.id}>
          <img src={car.img} alt={car.name} className="car-image" />
          <h2>{car.name}</h2>
          <p className="price">{car.price}</p>
          <button className="btn bid" onClick={() => handlePlaceBid(car)}>Place Bid</button>
          <button className="btn details">View Details</button>
        </div>
      ))}

      {isAuctionOpen && (
        <Auction car={selectedCar} onClose={closeAuction} />
      )}
    </div>
  );
}

export default Homepage;