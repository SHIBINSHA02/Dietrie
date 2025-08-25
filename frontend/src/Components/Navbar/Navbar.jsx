// frontend/src/Components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User } from 'lucide-react'; // profile icon

function Navbar({ isAuthenticated, setIsAuthenticated }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = () => {
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/login');
    handleLinkClick();
  };

  return (
    <header className="flex items-center stretch fixed w-full z-20 justify-between whitespace-nowrap border-b border-solid border-b-[#e7f3e7] px-4 sm:px-6 lg:px-10 py-3 bg-white">
  
      <div className="flex items-center gap-3 sm:gap-4 text-[#0e1b0e]">
        <div className="size-5">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <h2 className="text-[#0e1b0e] text-lg lg:text-xl font-bold tracking-tight">DietGen</h2>
      </div>

      <button
        className="sm:hidden text-[#0e1b0e] focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>

      {/* Menu Items */}
      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } sm:flex flex-col sm:flex-row sm:flex-1 sm:items-center sm:justify-end gap-4 sm:gap-6 lg:gap-8 absolute sm:static top-full left-0 right-0 bg-white sm:bg-transparent p-4 sm:p-0 border-b sm:border-none border-[#e7f3e7] z-20`}
      >
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8">
          <Link to="/home" onClick={handleLinkClick} className="nav-link">
            Home
          </Link>
          <a onClick={handleLinkClick} className="nav-link" href="#for-users-section">
            For Users
          </a>
          <a onClick={handleLinkClick} className="nav-link" href="#for-nutritionists-section">
            For Nutritionists
          </a>
          <a onClick={handleLinkClick} className="nav-link" href="#resources">
            Resources
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-center">
          <Link to="/signup" className="btn-primary">
            Get Started
          </Link>
          {isAuthenticated ? (
            <>
              {/* Profile Icon */}
              <Link
                to="/profile"
                onClick={handleLinkClick}
                className="flex items-center gap-2 text-[#0e1b0e] hover:text-green-600 transition"
              >
                <User className="w-5 h-5" />
                <span className="hidden sm:inline">Profile</span>
              </Link>

              <button onClick={handleLogout} className="btn-secondary">
                Log Out
              </button>
            </>
          ) : (
            <Link to="/login" className="btn-secondary">
              Log In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
