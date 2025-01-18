// src/components/DevOpsFlow/GKEArchitecture/index.js
import React from 'react';
import { Anchor, Settings, Shield } from 'lucide-react';
import { HorizontalArrow } from '../shared/Arrow';

const GKEArchitecture = () => {
  return (
    <div className="border border-red-900 rounded-xl p-6 bg-[#3B1F1F] w-full">
      <div className="text-center text-gray-300 mb-8 text-xl font-medium">
        GKE Architecture
      </div>
      <div className="flex flex-col items-center gap-8">
        {/* GKE Cluster Box */}
        <div className="flex flex-col items-center bg-black p-4 rounded-lg border border-gray-800 max-w-md w-full mx-auto">
          <Anchor className="w-8 h-8 text-blue-400 mb-2" />
          <div className="text-lg font-medium text-white">GKE Cluster</div>
          <div className="text-sm text-blue-300">Kubernetes Engine</div>
        </div>

        {/* Vertical Arrow */}
        <div className="w-2 h-16 relative">
          <div className="h-full bg-red-500 relative">
            <div className="absolute inset-0 bg-red-500 animate-flow-down"></div>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-red-500"></div>
          </div>
        </div>

        {/* Kubernetes Components Section */}
        <div className="border border-gray-700 rounded-lg p-6 bg-black w-full">
          <div className="text-center text-gray-300 mb-6">Kubernetes Components</div>
          <div className="flex justify-between items-center gap-8 px-4 max-w-5xl mx-auto">
            {/* Ingress Controller */}
            <div className="flex flex-col items-center bg-black p-4 rounded-lg border border-gray-800 w-64">
              <Settings className="w-8 h-8 text-yellow-400 mb-2" />
              <div className="text-lg font-medium text-white">Ingress Controller</div>
              <div className="text-sm text-blue-300">Load Balancer</div>
            </div>

            {/* Animated Arrow 1 */}
            <HorizontalArrow />

            {/* ConfigMaps & Secrets */}
            <div className="flex flex-col items-center bg-black p-4 rounded-lg border border-gray-800 w-64">
              <Settings className="w-8 h-8 text-blue-400 mb-2" />
              <div className="text-lg font-medium text-white">ConfigMaps & Secrets</div>
              <div className="text-sm text-blue-300">Configuration</div>
            </div>

            {/* Animated Arrow 2 */}
            <HorizontalArrow />

            {/* Policy Controller */}
            <div className="flex flex-col items-center bg-black p-4 rounded-lg border border-gray-800 w-64">
              <Shield className="w-8 h-8 text-yellow-400 mb-2" />
              <div className="text-lg font-medium text-white">Policy Controller</div>
              <div className="text-sm text-blue-300">Security</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GKEArchitecture;