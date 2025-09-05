// frontend/src/App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import './App.css';
import './index.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import Layout from './Components/Layout/Layout.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Auth/Login.jsx';
import Signup from './Components/Auth/Signup.jsx';
import DietPage from './Components/Dashboard/DietPage.jsx';
import { Meals } from './Components/Meals/Meals.jsx';
import { Track } from './Components/Track/Track.jsx';
import { Nutritionists } from './Components/Nutritionists/Nutritionists.jsx';
import ErrorBoundary from './Components/ErrorBoundary';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

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
        <ErrorBoundary>
          <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        </ErrorBoundary>
        <Routes>
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<DietPage />} />
            <Route path="/meals" element={<Meals />} />
            <Route path="/track" element={<Track />} />
            <Route path="/nutritionists" element={<Nutritionists />} />
            <Route path="/goals" element={<div>Goals Page (Placeholder)</div>} />
            <Route path="/appointments" element={<div>Appointments Page (Placeholder)</div>} />
            <Route path="/profile" element={<div>Profile Page (Placeholder)</div>} />
            <Route path="/resources" element={<div>Resources Page (Placeholder)</div>} />
            <Route path="/settings" element={<div>Settings Page (Placeholder)</div>} />
            <Route path="/help" element={<div>Help & Support Page (Placeholder)</div>} />
            <Route path="/notifications" element={<div>Notifications Page (Placeholder)</div>} />
          </Route>
          <Route path="/" element={<Navigate to={isAuthenticated ? "/home" : "/login"} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;