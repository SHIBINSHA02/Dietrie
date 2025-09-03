// frontend/src/Components/SideMenu/sidemenu.jsx

import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Home, 
  User, 
  Apple, 
  Users, 
  Calendar, 
  BookOpen, 
  Settings, 
  HelpCircle,
  ChevronRight,
  Utensils,
  Target,
  TrendingUp
} from 'lucide-react';

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home');

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home, href: '#home' },
    { id: 'dashboard', label: 'Dashboard', icon: TrendingUp, href: '#dashboard' },
    { id: 'meal-plans', label: 'Meal Plans', icon: Utensils, href: '#meal-plans', badge: '3' },
    { id: 'nutrition', label: 'Nutrition Tracking', icon: Apple, href: '#nutrition' },
    { id: 'goals', label: 'Health Goals', icon: Target, href: '#goals' },
    { id: 'appointments', label: 'Appointments', icon: Calendar, href: '#appointments', badge: '2' },
    { id: 'nutritionists', label: 'Find Nutritionists', icon: Users, href: '#nutritionists' },
    { id: 'profile', label: 'Profile', icon: User, href: '#profile' },
    { id: 'resources', label: 'Resources', icon: BookOpen, href: '#resources' }
  ];

  const bottomMenuItems = [
    { id: 'settings', label: 'Settings', icon: Settings, href: '#settings' },
    { id: 'help', label: 'Help & Support', icon: HelpCircle, href: '#help' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Side Menu - fixed, own scroll only for menu list; header sticks */}
      <div className={`
        fixed lg:static top-[60px] lg:top-0 left-0 h-[calc(100vh-60px)] lg:h-screen bg-white shadow-xl z-40
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 w-64 flex flex-col
      `}>
        {/* Header */}
        <div className="p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
              <Apple className="text-white" size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">Dietrie</h2>
              <p className="text-sm text-gray-600">Nutrition Connect</p>
            </div>
          </div>
        </div>

        {/* User Profile Section */}
        <div className="p-4 border-b border-gray-100 sticky top-[72px] bg-white z-10">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="text-gray-600" size={20} />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-800">John Doe</p>
              <p className="text-sm text-gray-600">Premium Member</p>
            </div>
            <ChevronRight className="text-gray-400" size={16} />
          </div>
        </div>

        {/* Main Navigation - scrollable area */}
        <nav className="flex-1 py-4 overflow-y-auto">
          <ul className="space-y-1 px-3">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeItem === item.id;
              
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleItemClick(item.id);
                    }}
                    className={`
                      flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200
                      ${isActive 
                        ? 'bg-green-50 text-green-700 border-r-4 border-green-600' 
                        : 'text-gray-700 hover:bg-gray-50 hover:text-green-600'
                      }
                    `}
                  >
                    <IconComponent size={20} className={isActive ? 'text-green-600' : ''} />
                    <span className="font-medium flex-1">{item.label}</span>
                    {item.badge && (
                      <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                        {item.badge}
                      </span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom Menu Items */}
        <div className="border-t border-gray-200 p-3">
          <ul className="space-y-1">
            {bottomMenuItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeItem === item.id;
              
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleItemClick(item.id);
                    }}
                    className={`
                      flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200
                      ${isActive 
                        ? 'bg-green-50 text-green-700' 
                        : 'text-gray-700 hover:bg-gray-50 hover:text-green-600'
                      }
                    `}
                  >
                    <IconComponent size={20} className={isActive ? 'text-green-600' : ''} />
                    <span className="font-medium">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Upgrade Banner */}
        <div className="m-3 p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-lg text-white">
          <div className="flex items-center space-x-2 mb-2">
            <TrendingUp size={20} />
            <span className="font-semibold">Go Pro</span>
          </div>
          <p className="text-sm text-green-100 mb-3">
            Unlock advanced nutrition tracking and personalized meal plans
          </p>
          <button className="w-full bg-white text-green-600 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            Upgrade Now
          </button>
        </div>
      </div>
    </>
  );
};

export default SideMenu;