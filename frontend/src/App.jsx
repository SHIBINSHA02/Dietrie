// frontend/src/App.jsx
import React from 'react';
import './App.css'; // Assuming you use App.css for global styles
import './index.css'; // Assuming this imports Tailwind CSS

// Import the Home component from its correct path
import Home from './Components/Home/Home.jsx'; // Corrected import path

function App() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#f8fcf8] group/design-root overflow-x-hidden" style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}>
      {/* Render the Home component */}
      <Home />
    </div>
  );
}

export default App;