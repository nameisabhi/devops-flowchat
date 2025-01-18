// src/components/DevOpsFlow/DeveloperWorkspace/index.js
import React from 'react';
import { Code, GitBranch } from 'lucide-react';

const DeveloperWorkspace = () => {
  return (
    <div className="border border-blue-800 rounded-xl p-6 bg-[#0F172A] w-full">
      <div className="text-center text-gray-300 mb-6 text-xl font-medium">
        Developer Workspace
      </div>
      <div className="flex justify-between items-center gap-8 px-12">
        {/* VS Code Box */}
        <div className="flex flex-col items-center bg-black p-4 rounded-lg border border-gray-800 hover:border-blue-500 transition-all duration-300 w-64">
          <Code className="w-8 h-8 text-blue-400 mb-2" />
          <div className="text-lg font-medium text-white">VS Code IDE</div>
          <div className="text-sm text-gray-400">Development Environment</div>
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

        {/* Git Repository Box */}
        <div className="flex flex-col items-center bg-black p-4 rounded-lg border border-gray-800 hover:border-yellow-500 transition-all duration-300 w-64">
          <GitBranch className="w-8 h-8 text-yellow-400 mb-2" />
          <div className="text-lg font-medium text-white">Local Git Repository</div>
          <div className="text-sm text-gray-400">Version Control</div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperWorkspace;