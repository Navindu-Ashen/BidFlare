import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css"; 


import Dashboard from './dashboardpage.jsx';
import Login from './Pages/Login.jsx';
import Signup from './Pages/SignUp.jsx';
import AddBidItem from './components/AddBidItem';
import Navbar from './Pages/Navbar.jsx';
import Auction from './Pages/Auction.jsx';


function App() { 
  return(
    <> 
    <BrowserRouter>
    <Routes>
      <Route path= "/" element = {<Dashboard/>} />
      <Route path= "/login" element = {<Login/>} />
      <Route path= "/add-bid" Component = {<AddBidItem/>} />
      <Route path= "/signup" element = {<Signup/>} ></Route>
    </Routes>
    </BrowserRouter>
    <Login/>
    <Signup/>
    <Auction/>
    <AddBidItem/>
    <Navbar/>
    {/* <Login/> page needs to included */}
    <div>
      
      
    </div>
    </>
    
  );
}

export default App
