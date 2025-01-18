// src/components/DevOpsFlow/BuildPackage/index.js
import React from 'react';
import { Package, Box, Cloud } from 'lucide-react';

const BuildPackage = () => {
  return (
    <div className="border border-gray-700 rounded-xl p-6 bg-black w-full">
      <div className="text-center text-gray-300 mb-6 text-xl font-medium">
        Build & Package
      </div>
      <div className="flex justify-between items-center gap-8 px-12">
        {/* NPM Registry Box */}
        <div className="flex flex-col items-center bg-black p-4 rounded-lg border border-gray-800 hover:border-orange-500 transition-all duration-300 w-64">
          <Package className="w-8 h-8 text-orange-400 mb-2" />
          <div className="text-lg font-medium text-white">NPM Registry</div>
          <div className="text-sm text-gray-400">Dependencies</div>
        </div>

        {/* Horizontal Arrow */}
        <div className="flex-1 flex items-center justify-center relative h-2">
          <div className="h-[2px] bg-white w-full relative">
            <div className="absolute inset-0 bg-blue-400 animate-flow-right"></div>
            <div className="absolute right-0 transform translate-x-1/2 -translate-y-[1px]">
              <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-blue-400"></div>
            </div>
          </div>
        </div>

        {/* Docker Build Box */}
        <div className="flex flex-col items-center bg-black p-4 rounded-lg border border-gray-800 hover:border-blue-500 transition-all duration-300 w-64">
          <Box className="w-8 h-8 text-blue-400 mb-2" />
          <div className="text-lg font-medium text-white">Docker Build</div>
          <div className="text-sm text-gray-400">Containerization</div>
        </div>

        {/* Horizontal Arrow */}
        <div className="flex-1 flex items-center justify-center relative h-2">
          <div className="h-[2px] bg-white w-full relative">
            <div className="absolute inset-0 bg-blue-400 animate-flow-right"></div>
            <div className="absolute right-0 transform translate-x-1/2 -translate-y-[1px]">
              <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-blue-400"></div>
            </div>
          </div>
        </div>

        {/* Docker Hub Box */}
        <div className="flex flex-col items-center bg-black p-4 rounded-lg border border-gray-800 hover:border-yellow-500 transition-all duration-300 w-64">
          <Cloud className="w-8 h-8 text-yellow-400 mb-2" />
          <div className="text-lg font-medium text-white">Docker Hub</div>
          <div className="text-sm text-gray-400">Container Registry</div>
        </div>
      </div>
    </div>
  );
};

export default BuildPackage;