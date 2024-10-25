import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css"; 

import Homepage from './Pages/Homepage.jsx';
import Dashboard from './dashboardpage.jsx';
import AddBidItem from './components/AddBidItem';
import Login from './Pages/Login.jsx';
import Signup from './Pages/SignUp.jsx';
import Navbar from './Pages/Navbar.jsx';
import Auction from './Pages/Auction.jsx';
import Profile from './Pages/profile.jsx';
import BidderProfile from './Pages/BidderProfile.jsx';

function App() { 
  return (
    <BrowserRouter>
      <Navbar />


      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/add-bid-item' element={<AddBidItem />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-bid" element={<AddBidItem />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/auction" element={<Auction />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bid" element={<BidderProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;