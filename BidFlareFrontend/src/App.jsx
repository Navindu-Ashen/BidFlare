/*import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';*/


import AddBidItem from './components/AddBidItem';
import React from 'react';
import Dashboard from './dashboardpage.jsx'
import Auction from './Pages/Auction.jsx';
import Login from './Pages/Login.jsx';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



function App() { 
  return(
    <> 
    <Auction/>
    <AddBidItem/>
    {/* <Login/> page needs to included */}
    <div>
      <h1></h1>
    </div>
    </>
    
  );
}

export default App
