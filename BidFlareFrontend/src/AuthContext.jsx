
import React, { createContext, useState, useContext, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUserRole(decoded.role);
        setUserInfo({
          email: decoded.email,
          name: decoded.given_name,
          id: decoded.nameid
        });
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error decoding token:', error);
        logout();
      }
    } else {
      setIsAuthenticated(false);
      setUserRole(null);
      setUserInfo(null);
    }
  }, []);

  const login = (token) => {
    try {
      const decoded = jwtDecode(token);
      localStorage.setItem('token', token);
      setUserRole(decoded.role);
      setUserInfo({
        email: decoded.email,
        name: decoded.given_name,
        id: decoded.nameid
      });
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUserRole(null);
    setUserInfo(null);
  };

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      login, 
      logout, 
      userRole,
      userInfo 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);