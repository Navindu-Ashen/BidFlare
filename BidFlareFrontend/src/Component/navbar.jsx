import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
   
        <span>BidFlare</span>
      </div>
      <ul className="nav-links">
        <li>Vehicles</li>
        <li>Electronics</li>
        <li>Fashion</li>
        <li>Home & Garden</li>
        <li>Jewellery & Watches</li>
        <li>Office & School</li>
        <li>Outdoor Sports</li>
        <li>Toys & Games</li>
        <li>Tech</li>
      </ul>
      <div className="auth-buttons">
        <button className="login">Login</button>
        <button className="signup">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;

