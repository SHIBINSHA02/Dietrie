import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Bell } from 'lucide-react';

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
    <header className="fixed top-0 left-0 w-full z-20 bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <div className="w-6 h-6">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <h2 className="text-lg font-bold text-gray-800 tracking-tight">DietGen</h2>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="sm:hidden text-gray-800 focus:outline-none"
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
        } sm:flex flex-col sm:flex-row sm:items-center sm:gap-6 absolute sm:static top-full left-0 right-0 bg-white sm:bg-transparent p-4 sm:p-0 border-b sm:border-none border-gray-200 z-10`}
      >
        {isAuthenticated ? (
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            {/* Notification Icon */}
            <Link
              to="/notifications"
              onClick={handleLinkClick}
              className="relative flex items-center gap-2 text-gray-800 hover:text-green-600 transition-colors"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
              <span className="hidden sm:inline font-medium">Notifications</span>
            </Link>

            {/* Profile Icon */}
            <Link
              to="/profile"
              onClick={handleLinkClick}
              className="flex items-center gap-2 text-gray-800 hover:text-green-600 transition-colors"
            >
              <User className="w-5 h-5" />
              <span className="hidden sm:inline font-medium">Profile</span>
            </Link>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <Link
              to="/signup"
              onClick={handleLinkClick}
              className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              onClick={handleLinkClick}
              className="flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-800 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Log In
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;