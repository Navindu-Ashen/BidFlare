
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddBidItem from './components/AddBidItem';
import Dashboard from './dashboardpage.jsx';
import Auction from './Pages/Auction.jsx';
import Login from './Pages/Login.jsx';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Signup from './Pages/SignUp.jsx';



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
    {/* <Login/> page needs to included */}
    <div>
      
      
    </div>
    </>
    
  );
}

export default App
