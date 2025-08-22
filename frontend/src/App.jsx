
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'; // Global styles
import './index.css'; // Tailwind CSS
import Navbar from './Components/Navbar/Navbar.jsx'; // Add Navbar
import Home from './Components/Home/Home.jsx'; // Dashboard component
import Login from './Components/Auth/Login.jsx';
import Signup from './Components/Auth/Signup.jsx';

// Protected Route component to restrict access to authenticated users
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  // Check authentication status on mount and when token changes
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  return (
    <Router>
      <div
        className="relative flex size-full min-h-screen flex-col bg-[#f8fcf8] group/design-root overflow-x-hidden"
        style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}
      >
        <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;