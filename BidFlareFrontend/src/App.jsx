// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css"; 

import { AuthProvider, useAuth } from './AuthContext.jsx';
import Dashboard from './dashboardpage.jsx';
import AddBidItem from './components/AddBidItem';
import Login from './Pages/Login.jsx';
import Signup from './Pages/SignUp.jsx';
import Navbar from './Pages/Navbar.jsx';
import Footer from './Component/Footer.jsx';
import Auction from './Pages/Auction.jsx';
import Profile from './Pages/profile.jsx';
import Homepage from './Pages/Homepage.jsx';

// Protected Route Component
const ProtectedRoute = ({ children, allowedRoles }) => {
  const { isAuthenticated, userRole } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/" />;
  }

  return children;
};

function App() { 
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/auction" element={<Auction />} />
          
          {/* Protected Routes */}
          <Route 
            path="/admin-dashboard" 
            element={
              <ProtectedRoute allowedRoles={['Admin']}>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/bidder-profile" 
            element={
              <ProtectedRoute allowedRoles={['Bidder']}>
                <Profile />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/user-profile" 
            element={
              <ProtectedRoute allowedRoles={['User']}>
                <Profile />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/add-bid-item" 
            element={
              <ProtectedRoute allowedRoles={['Admin', 'User']}>
                <AddBidItem />
              </ProtectedRoute>
            } 
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;