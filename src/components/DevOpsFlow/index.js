// Update src/components/DevOpsFlow/index.js
import React from 'react';
import DeveloperWorkspace from './DeveloperWorkspace';
import CICD from './CICD';
import BuildPackage from './BuildPackage';
import Infrastructure from './Infrastructure';
import CloudPlatform from './CloudPlatform';
import GKEArchitecture from './GKEArchitecture';
import ApplicationNamespaces from './ApplicationNamespaces';
import ObservabilityStack from './ObservabilityStack';
import { VerticalArrow } from './shared/Arrow';

const DevOpsFlow = () => {
  return (
    <div className="p-8 bg-[#0B1222] min-h-screen">
      <div className="flex justify-center mb-12">
        <h1 className="text-3xl font-bold bg-white text-[#4169E1] py-2 px-8 rounded-lg shadow-lg">
          DevOps Architecture Overview
        </h1>
      </div>

      <div className="max-w-6xl mx-auto relative flex flex-col items-center">
        <DeveloperWorkspace />
        <div className="-mt-4 mb-4"><VerticalArrow color="#3b82f6" /></div>
        <CICD />
        <div className="-mt-4 mb-4"><VerticalArrow color="white" /></div>
        <BuildPackage />
        <div className="-mt-4 mb-4"><VerticalArrow color="white" /></div>
        <Infrastructure />
        <div className="-mt-4 mb-4"><VerticalArrow color="white" /></div>
        <CloudPlatform />
        <div className="-mt-4 mb-4"><VerticalArrow color="white" /></div>
        <GKEArchitecture />
        <div className="-mt-4 mb-4"><VerticalArrow color="white" /></div>
        <ApplicationNamespaces />
        <div className="-mt-4 mb-4"><VerticalArrow color="white" /></div>
        <ObservabilityStack />
      </div>
    </div>
  );
};

export default DevOpsFlow;