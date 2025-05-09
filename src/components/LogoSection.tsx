
import React from 'react';

const LogoSection = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold flex items-center">
        <span className="text-white">Traders</span>
        <span className="text-simon-green">Edge</span>
        <span className="text-white">Alerts</span>
      </div>
      <div className="mt-8 max-w-2xl text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 neon-text">
          Get the Edge in Your Trading
        </h2>
        <p className="text-base md:text-lg text-gray-300">
          Real-time signals and alerts that give you the decisive trading advantage
        </p>
      </div>
    </div>
  );
};

export default LogoSection;
