// src/components/DevOpsFlow/Infrastructure/index.js
import React from 'react';
import { FileCode, Lock, Database } from 'lucide-react';
import { HorizontalArrow } from '../../DevOpsFlow/shared/Arrow';

const Infrastructure = () => {
  return (
    <div className="border border-yellow-800 rounded-xl p-6 bg-[#2B1D0E] w-full">
      <div className="text-center text-gray-300 mb-8 text-xl font-medium">
        Infrastructure Management
      </div>
      <div className="flex flex-col items-center gap-8">
        {/* Terraform Box */}
        <div className="flex flex-col items-center bg-black p-4 rounded-lg border border-orange-800 max-w-md w-full mx-auto">
          <FileCode className="w-8 h-8 text-orange-400 mb-2" />
          <div className="text-lg font-medium text-white">Terraform</div>
          <div className="text-sm text-blue-300">Infrastructure as Code</div>
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

        {/* State & Security Section */}
        <div className="border border-gray-700 rounded-lg p-6 bg-black w-full">
          <div className="text-center text-gray-300 mb-6">State & Security</div>
          <div className="flex justify-between items-center gap-12 max-w-3xl mx-auto">
            {/* GCS Backend Box */}
            <div className="flex flex-col items-center bg-black p-4 rounded-lg border border-gray-800 flex-1">
              <Database className="w-8 h-8 text-blue-400 mb-2" />
              <div className="text-lg font-medium text-white">GCS Backend</div>
              <div className="text-sm text-blue-300">Terraform State</div>
            </div>

            {/* Horizontal Arrow */}
            <HorizontalArrow />

            {/* Cloud KMS Box */}
            <div className="flex flex-col items-center bg-black p-4 rounded-lg border border-gray-800 flex-1">
              <Lock className="w-8 h-8 text-yellow-400 mb-2" />
              <div className="text-lg font-medium text-white">Cloud KMS</div>
              <div className="text-sm text-blue-300">Secrets</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;