//src/components/DevOpsFlow/DeveloperWorkspace/index.js
import React from 'react';
import { Code, GitBranch } from 'lucide-react';

const DevOpsFlow = () => {
  return (
    <div className="p-8 bg-[#0B1222] min-h-screen">
      {/* Main heading with premium styling */}
      <div className="flex justify-center mb-12">
        <h1 className="text-3xl font-bold bg-white text-[#4169E1] py-2 px-8 rounded-lg shadow-lg">
          DevOps Architecture Overview
        </h1>
      </div>

      {/* Container with fixed width */}
      <div className="max-w-5xl mx-auto relative">
        {/* Developer Workspace Section */}
        <div className="border border-[#1E3A8A] rounded-lg p-6 mb-8 bg-[#0F172A] w-full">
          <div className="text-center text-gray-300 mb-6 text-lg">Developer Workspace</div>
          <div className="flex justify-between items-center gap-8 px-12">
            {/* VS Code Box */}
            <div className="flex flex-col items-center bg-black p-4 rounded-lg border border-gray-800 hover:border-blue-500 transition-all duration-300 w-64">
              <Code className="w-6 h-6 text-blue-400 mb-2" />
              <div className="text-sm font-medium text-white">VS Code IDE</div>
              <div className="text-xs text-gray-400">Development Environment</div>
            </div>

            {/* Animated Arrow with proper ending */}
            <div className="flex-1 flex items-center justify-center relative">
              <div className="h-[2px] bg-gray-600 w-full relative">
                <div className="absolute inset-0 bg-blue-400 animate-flow-right"></div>
              </div>
              {/* Arrow head */}
              <div className="absolute right-0 transform translate-x-1/2 -translate-y-[1px]">
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-blue-400"></div>
              </div>
            </div>

            {/* Git Repository Box */}
            <div className="flex flex-col items-center bg-black p-4 rounded-lg border border-gray-800 hover:border-yellow-500 transition-all duration-300 w-64">
              <GitBranch className="w-6 h-6 text-yellow-400 mb-2" />
              <div className="text-sm font-medium text-white">Local Git Repository</div>
              <div className="text-xs text-gray-400">Version Control</div>
            </div>
          </div>
        </div>

        {/* Style for the animated arrow */}
        <style jsx>{`
          @keyframes flowRight {
            0% {
              transform: scaleX(0);
              transform-origin: left;
            }
            50% {
              transform: scaleX(1);
              transform-origin: left;
            }
            50.001% {
              transform: scaleX(1);
              transform-origin: right;
            }
            100% {
              transform: scaleX(0);
              transform-origin: right;
            }
          }
          .animate-flow-right {
            animation: flowRight 2s infinite;
          }
        `}</style>
      </div>
    </div>
  );
};

export default DevOpsFlow;