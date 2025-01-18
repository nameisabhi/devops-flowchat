// src/components/DevOpsFlow/CICD/index.js
import React from 'react';
import { GitFork, Zap } from 'lucide-react';

const CICD = () => {
  return (
    <div className="border border-green-800 rounded-xl p-6 bg-[#1A2F1A] w-full">
      <div className="text-center text-gray-300 mb-8 text-xl">
        CI/CD Platform
      </div>
      <div className="flex flex-col items-center gap-8 max-w-md mx-auto">
        {/* GitHub Repository Box */}
        <div className="flex flex-col items-center bg-black p-4 rounded-lg border border-gray-800 w-full">
          <GitFork className="w-8 h-8 text-blue-400 mb-2" />
          <div className="text-lg font-medium text-white">GitHub Repository</div>
          <div className="text-sm text-blue-300">Source Control</div>
        </div>

        {/* Vertical Arrow Inside CI/CD */}
        <div className="w-2 h-16 relative">
          <div className="h-full bg-green-500 relative">
            <div className="absolute inset-0 bg-green-500 animate-flow-down"></div>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-green-500"></div>
          </div>
        </div>

        {/* GitHub Actions Box */}
        <div className="flex flex-col items-center bg-black p-4 rounded-lg border border-gray-800 w-full">
          <Zap className="w-8 h-8 text-yellow-400 mb-2" />
          <div className="text-lg font-medium text-white">GitHub Actions</div>
          <div className="text-sm text-blue-300">CI/CD Pipeline</div>
        </div>
      </div>
    </div>
  );
};

export default CICD;