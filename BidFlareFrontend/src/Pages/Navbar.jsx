// Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext.jsx';

const Navbar = () => {
  const { isAuthenticated, logout, userRole, userInfo } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getProfileLink = () => {
    switch (userRole) {
      case 'Admin':
        return '/admin-dashboard';
      case 'Bidder':
        return '/bidder-profile';
      case 'User':
        return '/user-profile';
      default:
        return '/';
    }
  };

  const getProfileButtonText = () => {
    if (userInfo?.name) {
      return `${userRole}: ${userInfo.name}`;
    }
    return `${userRole} Profile`;
  };

  return (
    <nav className="flex justify-between items-center bg-orange-600 p-4">
      <div className="flex items-center">
        <Link to ="/" >
        <span className="text-2xl font-bold text-white">BidFlare</span>
        </Link>
      </div>
      <ul className="flex gap-5 list-none justify-center align-bottom">
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
          <div className="flex gap-3">
            <Link to={getProfileLink()}>
              <button className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-600">
                {getProfileButtonText()}
              </button>
            </Link>
            <button 
              onClick={handleLogout}
              className="bg-red-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link to="/login">
              <button className="bg-green-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-green-600">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-green-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-green-600">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;