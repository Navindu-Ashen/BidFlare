import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './Services/AuthContext.jsx';

import Dashboard from './Pages/dashboardpage.jsx';
import AddBidItem from './components/AddBidItem';
import Login from './Pages/Login.jsx';
import Signup from './Pages/SignUp.jsx';
import Navbar from './Pages/Navbar.jsx';
import Footer from './Component/Footer.jsx';
import Auction from './Pages/Auction.jsx';
import Profile from './Pages/profile.jsx';
import Homepage from './Pages/Homepage.jsx';
import AuctionDetails from './Pages/AuctionDetails.jsx';
import AdminDashboard from './Pages/dashboards/admindash.jsx'
import UserDashboard from './Pages/dashboards/userdash.jsx'

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
          <Route path="/car-details/:id" element={<AuctionDetails />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/admin-dashboard' element={<AdminDashboard/>} />
          <Route path='/user-dashboard' element={<UserDashboard/>} />

          
          
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
            path="/bidder-profile" element={
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