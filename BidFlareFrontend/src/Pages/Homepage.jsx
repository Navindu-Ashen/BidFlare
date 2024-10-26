import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Auction from './Auction'; // Import Auction component

function Homepage() {
  const [isAuctionOpen, setIsAuctionOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const navigate = useNavigate();
  const cars = [
    { id: 1, img: "/car3.jpg", name: "2021 McLaren 720s coupe", price: "$260,000", year: 2021, brand: "McLaren", model: "720s coupe", features: "Feature 1, Feature 2", description: "Description of the car" },
    { id: 2, img: "/images/car4.jpg", name: "2020 Rolls Royce Ghost", price: "$299,000", year: 2020, brand: "Rolls Royce", model: "Ghost", features: "Feature 1, Feature 2", description: "Description of the car" },
    { id: 3, img: "/images/car2.jpg", name: "Bugatti Veyron Vision GT", price: "$2,555,000", year: 2019, brand: "Bugatti", model: "Veyron Vision GT", features: "Feature 1, Feature 2", description: "Description of the car" },
    { id: 4, img: "/images/bmw.png", name: "BMW M5 Coupe", price: "$319,000", year: 2018, brand: "BMW", model: "M5 Coupe", features: "Feature 1, Feature 2", description: "Description of the car" },
    { id: 5, img: "/images/car1.jpg", name: "2019 Bentley Flying spur grand", price: "$260,000", year: 2019, brand: "Bentley", model: "Flying spur grand", features: "Feature 1, Feature 2", description: "Description of the car" },
    { id: 6, img: "/images/bmw2.png", name: "2015 BMW M3 Grand coupe", price: "$299,000", year: 2015, brand: "BMW", model: "M3 Grand coupe", features: "Feature 1, Feature 2", description: "Description of the car" },
    { id: 7, img: "/images/benz3.png", name: "Mercedes benz S400 LWB", price: "$2,555,000", year: 2020, brand: "Mercedes", model: "S400 LWB", features: "Feature 1, Feature 2", description: "Description of the car" },
    { id: 8, img: "/images/benz2.png", name: "Mercedes benz CLA", price: "$319,000", year: 2019, brand: "Mercedes", model: "CLA", features: "Feature 1, Feature 2", description: "Description of the car" },
    { id: 9, img: "/images/jeep.png", name: "Jeep Grand Cherokee", price: "$260,000", year: 2018, brand: "Jeep", model: "Grand Cherokee", features: "Feature 1, Feature 2", description: "Description of the car" },
    { id: 10, img: "/images/toyota.png", name: "TOYOTA Land Cruiser", price: "$299,000", year: 2020, brand: "Toyota", model: "Land Cruiser", features: "Feature 1, Feature 2", description: "Description of the car" },
    { id: 11, img: "/images/car5.png", name: "2018 Chevrollet camerro SS", price: "$2,555,000", year: 2018, brand: "Chevrolet", model: "Camerro SS", features: "Feature 1, Feature 2", description: "Description of the car" },
    { id: 12, img: "/images/car5.png", name: "2018 Chevrollet camerro SS", price: "$2,555,000", year: 2018, brand: "Chevrolet", model: "Camerro SS", features: "Feature 1, Feature 2", description: "Description of the car" },
    { id: 13, img: "/images/car5.png", name: "2018 Chevrollet camerro SS", price: "$2,555,000", year: 2018, brand: "Chevrolet", model: "Camerro SS", features: "Feature 1, Feature 2", description: "Description of the car" },
    { id: 14, img: "/images/car5.png", name: "2018 Chevrollet camerro SS", price: "$2,555,000", year: 2018, brand: "Chevrolet", model: "Camerro SS", features: "Feature 1, Feature 2", description: "Description of the car" },
    { id: 15, img: "/images/car5.png", name: "2018 Chevrollet camerro SS", price: "$2,555,000", year: 2018, brand: "Chevrolet", model: "Camerro SS", features: "Feature 1, Feature 2", description: "Description of the car" }
  ];

  const handlePlaceBid = (car) => {
    setSelectedCar(car);
    setIsAuctionOpen(true);
  };

  const closeAuction = () => {
    setIsAuctionOpen(false);
    setSelectedCar(null);
  };

  const handleViewDetails = (car) => {
    navigate(`/car-details/${car.id}`, { state: { car } });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 max-w-7xl mx-auto py-5">
      {cars.map((car) => (
        <div key={car.id} className="bg-white border border-gray-300 rounded-lg text-center shadow-md p-5 transition-transform duration-300 hover:-translate-y-2 w-full max-w-[400px] mx-auto">
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
            onClick={() => handleViewDetails(car)}
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