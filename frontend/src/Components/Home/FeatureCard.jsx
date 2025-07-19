import React from 'react';

function FeatureCard({ iconSvg, title, description }) {
  return (
    <div className="flex flex-1 gap-3 rounded-lg border border-[#d0e7d0] bg-[#f8fcf8] p-4 flex-col">
      <div className="text-[#0e1b0e]" dangerouslySetInnerHTML={{ __html: iconSvg }}></div>
      <div className="flex flex-col gap-1">
        <h2 className="text-[#0e1b0e] text-base font-bold leading-tight">{title}</h2>
        <p className="text-[#4e974e] text-sm font-normal leading-normal">{description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;