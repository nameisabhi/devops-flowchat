// src/components/DevOpsFlow/shared/Arrow.js
import React from 'react';

export const HorizontalArrow = () => {
  return (
    <div className="flex-1 flex items-center justify-center relative">
      <div className="h-[2px] bg-gray-600 w-full relative">
        <div className="absolute inset-0 bg-[#4169E1] animate-flow-right"></div>
        <div className="absolute right-0 transform translate-x-1/2 -translate-y-[1px]">
          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-[#4169E1]"></div>
        </div>
      </div>
    </div>
  );
};

export const VerticalArrow = () => {
  return (
    <div className="w-2 h-16 relative">
      <div className="w-[2px] h-full bg-gray-600 absolute left-1/2 transform -translate-x-1/2">
        <div className="absolute inset-0 bg-[#4169E1] animate-flow-down"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#4169E1]"></div>
        </div>
      </div>
    </div>
  );
};