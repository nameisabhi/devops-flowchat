// src/components/DevOpsFlow/ApplicationNamespaces/index.js
import React from 'react';
import { Monitor, Server, Database } from 'lucide-react';
import { HorizontalArrow } from '../shared/Arrow';

const ApplicationNamespaces = () => {
  return (
    <div className="border border-purple-800 rounded-xl p-6 bg-[#2D2438] w-full">
      <div className="text-center text-gray-300 mb-8 text-xl font-medium">
        Application Namespaces
      </div>

      <div className="flex flex-col gap-8">
        {/* Microservices Section */}
        <div className="border border-gray-700 rounded-lg p-6 bg-black w-full">
          <div className="text-center text-gray-300 mb-6">Microservices</div>
          <div className="flex justify-between items-center gap-8 px-4 max-w-5xl mx-auto">
            {/* Frontend Service */}
            <div className="flex flex-col items-center bg-black p-4 rounded-lg border border-gray-800 w-64">
              <Monitor className="w-8 h-8 text-blue-400 mb-2" />
              <div className="text-lg font-medium text-white">Frontend Service</div>
              <div className="text-sm text-blue-300">React/Vue App</div>
            </div>

            {/* Animated Arrow 1 */}
            <HorizontalArrow />

            {/* Backend Service */}
            <div className="flex flex-col items-center bg-black p-4 rounded-lg border border-gray-800 w-64">
              <Server className="w-8 h-8 text-blue-400 mb-2" />
              <div className="text-lg font-medium text-white">Backend Service</div>
              <div className="text-sm text-blue-300">API Server</div>
            </div>

            {/* Animated Arrow 2 */}
            <HorizontalArrow />

            {/* Database */}
            <div className="flex flex-col items-center bg-black p-4 rounded-lg border border-gray-800 w-64">
              <Database className="w-8 h-8 text-blue-400 mb-2" />
              <div className="text-lg font-medium text-white">Database</div>
              <div className="text-sm text-blue-300">Persistent Storage</div>
            </div>
          </div>
        </div>

        {/* Namespaces Section */}
        <div className="flex justify-between items-center gap-12 px-4 max-w-5xl mx-auto">
          {/* Frontend Namespace */}
          <div className="flex flex-col items-center bg-black p-4 rounded-lg border border-gray-800 flex-1">
            <div className="text-lg font-medium text-white">Frontend Namespace</div>
          </div>

          {/* Backend Namespace */}
          <div className="flex flex-col items-center bg-black p-4 rounded-lg border border-gray-800 flex-1">
            <div className="text-lg font-medium text-white">Backend Namespace</div>
          </div>

          {/* Database Namespace */}
          <div className="flex flex-col items-center bg-black p-4 rounded-lg border border-gray-800 flex-1">
            <div className="text-lg font-medium text-white">Database Namespace</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationNamespaces;