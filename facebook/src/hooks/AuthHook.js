// src/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    // Check if user is logged in by checking for a token or user info in local storage
    const token = localStorage.getItem('access_token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('access_token', token);
    setIsAuthenticated(true);
    history('/main');
  };

  const logout = () => {
    localStorage.removeItem('access_token');
    setIsAuthenticated(false);
    history('/login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
