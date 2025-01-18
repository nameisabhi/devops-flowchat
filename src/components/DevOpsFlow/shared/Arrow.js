//src/components/DevOpsFlow/shared/Arrow.js
import React from 'react';

export const HorizontalArrow = () => {
  return (
    <div className="flex-1 flex items-center justify-center relative">
      {/* Base white line */}
      <div className="h-[2px] bg-white w-full">
        {/* Blue arrow head */}
        <div className="absolute right-0 transform translate-x-full -translate-y-[5px]">
          <svg width="12" height="12" viewBox="0 0 12 12">
            <path 
              d="M 0 6 L 8 0 L 8 12 Z" 
              fill="#3b82f6"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export const VerticalArrow = ({ color = "white" }) => {
  return (
    <div className="w-2 h-16 relative">
      {/* Base white line */}
      <div className="w-[2px] h-full bg-white absolute left-1/2 transform -translate-x-1/2">
        {/* Colored arrow head */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
          <svg width="12" height="12" viewBox="0 0 12 12">
            <path 
              d="M 6 12 L 0 4 L 12 4 Z" 
              fill={color}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};