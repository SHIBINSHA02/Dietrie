"use client";

import React from "react";
import { useRouter } from "next/navigation";

// Define the shape of your props
interface FeatureCardProps {
  iconSvg: string;
  title: string;
  description: string;
  route?: string; // Optional prop
}

function FeatureCard({ iconSvg, title, description, route }: FeatureCardProps) {
  const router = useRouter();

  const handleClick = () => {
    if (route) router.push(route);
  };

  return (
    <button
      onClick={handleClick}
      className="h-full flex flex-col gap-3 rounded-lg border border-[#d0e7d0] bg-[#f8fcf8] p-4 text-left hover:bg-[#e8f4e8] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#4e974e] focus:ring-opacity-50"
    >
      <div
        className="text-[#0e1b0e]"
        // Ensure the SVG strings are coming from a trusted source
        dangerouslySetInnerHTML={{ __html: iconSvg }}
      />

      <div className="flex flex-col gap-1">
        <h2 className="text-[#0e1b0e] text-base font-bold leading-tight">
          {title}
        </h2>
        <p className="text-[#4e974e] text-sm font-normal leading-normal">
          {description}
        </p>
      </div>

      <div className="flex-1" />
    </button>
  );
}

export default FeatureCard;