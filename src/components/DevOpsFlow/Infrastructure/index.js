// src/components/DevOpsFlow/Infrastructure/index.js
import React from 'react';
import { FileCode, Lock, Database } from 'lucide-react';

const Infrastructure = () => {
  return (
    <div className="border border-yellow-800 rounded-xl p-6 bg-[#2B1D0E] w-full">
      <div className="text-center text-gray-300 mb-6 text-xl font-medium">
        Infrastructure Management
      </div>
      <div className="flex flex-col items-center gap-8">
        {/* Terraform Box */}
        <div className="flex flex-col items-center bg-black p-4 rounded-lg border border-gray-800 hover:border-orange-500 transition-all duration-300 w-64">
          <FileCode className="w-8 h-8 text-orange-400 mb-2" />
          <div className="text-lg font-medium text-white">Terraform</div>
          <div className="text-sm text-gray-400">Infrastructure as Code</div>
        </div>

        {/* Vertical Arrow Inside Infrastructure */}
        <div className="w-2 h-16 relative">
          <div className="absolute inset-0 bg-yellow-400">
            <div className="absolute inset-0 bg-yellow-400 animate-flow-down"></div>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-yellow-400"></div>
          </div>
        </div>

        {/* State & Security Section */}
        <div className="border border-gray-700 rounded-lg p-6 bg-black w-full">
          <div className="text-center text-gray-300 mb-4 text-lg">State & Security</div>
          <div className="flex justify-between items-center gap-8 px-12">
            {/* GCS Backend Box */}
            <div className="flex flex-col items-center bg-black p-4 rounded-lg border border-gray-800 hover:border-blue-500 transition-all duration-300 w-64">
              <Database className="w-8 h-8 text-blue-400 mb-2" />
              <div className="text-lg font-medium text-white">GCS Backend</div>
              <div className="text-sm text-gray-400">Terraform State</div>
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

            {/* Cloud KMS Box */}
            <div className="flex flex-col items-center bg-black p-4 rounded-lg border border-gray-800 hover:border-yellow-500 transition-all duration-300 w-64">
              <Lock className="w-8 h-8 text-yellow-400 mb-2" />
              <div className="text-lg font-medium text-white">Cloud KMS</div>
              <div className="text-sm text-gray-400">Secrets</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;