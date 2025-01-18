// src/components/DevOpsFlow/CloudPlatform/index.js
import React from 'react';
import { Cloud, Network, Split } from 'lucide-react';
import { HorizontalArrow } from '../shared/Arrow';

const CloudPlatform = () => {
  return (
    <div className="border border-yellow-700 rounded-xl p-6 bg-[#2B1810] w-full">
      <div className="text-center text-gray-300 mb-8 text-xl font-medium">
        Google Cloud Platform
      </div>
      <div className="flex flex-col items-center gap-8">
        {/* GCP Project Box */}
        <div className="flex flex-col items-center bg-black p-4 rounded-lg border border-gray-800 max-w-md w-full mx-auto">
          <Cloud className="w-8 h-8 text-blue-400 mb-2" />
          <div className="text-lg font-medium text-white">GCP Project</div>
          <div className="text-sm text-blue-300">Cloud Infrastructure</div>
        </div>

        {/* Vertical Arrow */}
        <div className="w-2 h-16 relative">
          <div className="h-full bg-yellow-500 relative">
            <div className="absolute inset-0 bg-yellow-500 animate-flow-down"></div>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-yellow-500"></div>
          </div>
        </div>

        {/* Network Configuration Section */}
        <div className="border border-gray-700 rounded-lg p-6 bg-black w-full">
          <div className="text-center text-gray-300 mb-6">Network Configuration</div>
          <div className="flex justify-between items-center gap-12 max-w-3xl mx-auto">
            {/* VPC Box */}
            <div className="flex flex-col items-center bg-black p-4 rounded-lg border border-gray-800 flex-1">
              <Network className="w-8 h-8 text-blue-400 mb-2" />
              <div className="text-lg font-medium text-white">VPC</div>
              <div className="text-sm text-blue-300">Network</div>
            </div>

            {/* Horizontal Arrow */}
            <HorizontalArrow />

            {/* Subnets Box */}
            <div className="flex flex-col items-center bg-black p-4 rounded-lg border border-gray-800 flex-1">
              <Split className="w-8 h-8 text-yellow-400 mb-2" />
              <div className="text-lg font-medium text-white">Subnets</div>
              <div className="text-sm text-blue-300">Network Segments</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudPlatform;