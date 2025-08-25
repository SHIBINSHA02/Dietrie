// frontend/src/Components/Home/FeatureCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function FeatureCard({iconSvg, title, description, route }) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (route) {
      navigate(route);
    }
  };
  return (
    <button 
      onClick={handleClick}
      className="flex flex-1 gap-3 rounded-lg border border-[#d0e7d0] bg-[#f8fcf8] p-4 flex-col text-left hover:bg-[#e8f4e8] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#4e974e] focus:ring-opacity-50"
    >
      <div className="text-[#0e1b0e]" dangerouslySetInnerHTML={{ __html: iconSvg }}></div>
      <div className="flex flex-col gap-1">
        <h2 className="text-[#0e1b0e] text-base font-bold leading-tight">{title}</h2>
        <p className="text-[#4e974e] text-sm font-normal leading-normal">{description}</p>
      </div>
    </button>
  );
}

export default FeatureCard;