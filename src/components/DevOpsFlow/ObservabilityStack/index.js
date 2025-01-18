// src/components/DevOpsFlow/ObservabilityStack/index.js
import React from 'react';
import { FileText, BarChart2, Activity } from 'lucide-react';
import { HorizontalArrow } from '../shared/Arrow';

const ObservabilityStack = () => {
  return (
    <div className="border border-green-700 rounded-xl p-6 bg-[#2B4D20] w-full">
      <div className="text-center text-gray-300 mb-8 text-xl font-medium">
        Observability Stack
      </div>
      
      <div className="flex justify-between items-center gap-8 px-4 max-w-5xl mx-auto">
        {/* Cloud Logging */}
        <div className="flex flex-col items-center bg-black p-4 rounded-lg border border-gray-800 w-64">
          <FileText className="w-8 h-8 text-blue-400 mb-2" />
          <div className="text-lg font-medium text-white">Cloud Logging</div>
          <div className="text-sm text-blue-300">Logs</div>
        </div>

        {/* Animated Arrow 1 */}
        <HorizontalArrow />

        {/* Cloud Monitoring */}
        <div className="flex flex-col items-center bg-black p-4 rounded-lg border border-gray-800 w-64">
          <BarChart2 className="w-8 h-8 text-yellow-400 mb-2" />
          <div className="text-lg font-medium text-white">Cloud Monitoring</div>
          <div className="text-sm text-blue-300">Metrics</div>
        </div>

        {/* Animated Arrow 2 */}
        <HorizontalArrow />

        {/* Cloud Trace */}
        <div className="flex flex-col items-center bg-black p-4 rounded-lg border border-gray-800 w-64">
          <Activity className="w-8 h-8 text-blue-400 mb-2" />
          <div className="text-lg font-medium text-white">Cloud Trace</div>
          <div className="text-sm text-blue-300">Tracing</div>
        </div>
      </div>
    </div>
  );
};

export default ObservabilityStack;