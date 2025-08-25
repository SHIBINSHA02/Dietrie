// frontend/src/App.jsx

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import './App.css'; // Global styles
import './index.css'; // Tailwind CSS
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Auth/Login.jsx';
import Signup from './Components/Auth/Signup.jsx';
// Import the missing components
import {Meals} from './Components/Meals/Meals.jsx';
import {Track} from './Components/Track/Track.jsx';
import {Nutritionists} from './Components/Nutritionists/Nutritionists.jsx';


// Protected Route component to restrict access to authenticated users
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
        <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <Routes>
   
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
      
          <Route element={<ProtectedRoute><Outlet /></ProtectedRoute>}>
            <Route path="home" element={<Home />} />
            <Route path="meals" element={<Meals />} />
            <Route path="track" element={<Track />} />
            <Route path="nutritionists" element={<Nutritionists />} />
          </Route>

          {/* Fallback route to redirect the root path */}
          <Route path="/" element={<Navigate to={isAuthenticated ? "/home" : "/login"} />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;