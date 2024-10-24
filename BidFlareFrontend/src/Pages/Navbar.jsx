import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated }) => {
  return (
    <nav className="flex justify-between items-center bg-orange-600 p-4">
      <div className="flex items-center">
        <span className="text-2xl font-bold text-white">BidFlare</span>
      </div>
      <ul className="flex gap-5 list-none">
        <li className="text-white cursor-pointer">Vehicles</li>
        <li className="text-white cursor-pointer">Electronics</li>
        <li className="text-white cursor-pointer">Fashion</li>
        <li className="text-white cursor-pointer">Home & Garden</li>
        <li className="text-white cursor-pointer">Jewellery & Watches</li>
        <li className="text-white cursor-pointer">Office & School</li>
        <li className="text-white cursor-pointer">Outdoor Sports</li>
        <li className="text-white cursor-pointer">Toys & Games</li>
        <li className="text-white cursor-pointer">Tech</li>
      </ul>
      <div className="flex gap-3">
        {isAuthenticated ? (
          <Link to="/profile">
            <button className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer">Profile</button>
          </Link>
        ) : (
          <>
            <Link to="/login">
              <button className="bg-green-500 text-white py-2 px-4 rounded cursor-pointer">Login</button>
            </Link>
            <Link to="/signup">
              <button className="bg-green-600 text-white py-2 px-4 rounded cursor-pointer">Sign Up</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;