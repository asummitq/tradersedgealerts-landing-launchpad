
import React from 'react';

const LogoSection = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="relative mb-4">
        <div className="text-5xl md:text-7xl font-bold flex flex-col md:flex-row items-center">
          <span className="text-simon-red">S</span>
          <span className="text-simon-blue">I</span>
          <span className="text-simon-green">M</span>
          <span className="text-simon-yellow">O</span>
          <span className="text-white">N</span>
          <div className="mx-2"></div>
          <span className="text-simon-red">S</span>
          <span className="text-simon-blue">A</span>
          <span className="text-simon-green">Y</span>
          <span className="text-simon-yellow">S</span>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-1 mt-2">
          <div className="h-4 w-4 rounded-full bg-simon-red"></div>
          <div className="h-4 w-4 rounded-full bg-simon-blue"></div>
          <div className="h-4 w-4 rounded-full bg-simon-green"></div>
          <div className="h-4 w-4 rounded-full bg-simon-yellow"></div>
        </div>
      </div>
      <div className="mt-8 max-w-2xl text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 neon-text">
          Follow the Leader in Trading
        </h2>
        <p className="text-lg text-gray-300">
          Just like the classic game, we give you the signals - you make the moves
        </p>
      </div>
    </div>
  );
};

export default LogoSection;
