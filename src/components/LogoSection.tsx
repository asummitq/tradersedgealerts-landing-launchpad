
import React from 'react';
import { TrendingUp } from 'lucide-react';

const LogoSection = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="relative mb-4 flex items-center">
        <div className="mr-3">
          <img 
            src="/lovable-uploads/a1c97208-44f3-43d1-9df8-61e76d37eec4.png" 
            alt="TradersEdgeAlerts Logo" 
            className="w-16 h-16 md:w-20 md:h-20"
          />
        </div>
        <div className="text-5xl md:text-7xl font-bold flex items-center">
          <span className="text-white">Traders</span>
          <span className="text-simon-green">Edge</span>
          <span className="text-white">Alerts</span>
        </div>
      </div>
      <div className="mt-8 max-w-2xl text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 neon-text">
          Get the Edge in Your Trading
        </h2>
        <p className="text-lg text-gray-300">
          Real-time signals and alerts that give you the decisive trading advantage
        </p>
      </div>
    </div>
  );
};

export default LogoSection;
