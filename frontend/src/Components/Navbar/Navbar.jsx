import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { User, Bell } from 'lucide-react';

function Navbar({ isAuthenticated, setIsAuthenticated }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  console.log('Navbar: isAuthenticated=', isAuthenticated, 'location.pathname=', location.pathname);

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

  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <header className="fixed top-0 left-0 w-full z-20 bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-end">
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
        {isAuthPage || !isAuthenticated ? (
          <div className="flex flex-col smევ

sm:flex-row items-center gap-4 sm:gap-6">
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
        ) : (
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
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
            <Link
              to="/profile"
              onClick={handleLinkClick}
              className="flex items-center gap-2 text-gray-800 hover:text-green-600 transition-colors"
            >
              <User className="w-5 h-5" />
              <span className="hidden sm:inline font-medium">Profile</span>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
            >
              Log Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;