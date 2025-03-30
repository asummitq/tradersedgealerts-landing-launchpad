
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, LineChart, TrendingUp, Shield } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-1/2 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Trade Smarter, <span className="neon-text">Not Harder</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              SimmonsSayz provides clear trading signals with proven results. 
              Our technology helps you make informed decisions in any market condition.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-simon-green/20 p-2 rounded-full">
                  <LineChart className="h-5 w-5 text-simon-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Real-time Analytics</h3>
                  <p className="text-gray-400">Advanced charting with instant market insights</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-simon-blue/20 p-2 rounded-full">
                  <TrendingUp className="h-5 w-5 text-simon-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Precise Signals</h3>
                  <p className="text-gray-400">Clear buy and sell recommendations when it matters</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-simon-red/20 p-2 rounded-full">
                  <Shield className="h-5 w-5 text-simon-red" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Risk Management</h3>
                  <p className="text-gray-400">Smart strategies to protect your investments</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-simon-blue hover:bg-simon-blue/80 text-white font-semibold px-8 py-6 rounded-md text-lg">
                Start Trading Now
              </Button>
              <Button variant="outline" className="border-simon-blue text-simon-blue hover:bg-simon-blue/10 font-semibold px-8 py-6 rounded-md text-lg">
                View Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative w-full">
              <img 
                src="/lovable-uploads/57aa1eaf-bdba-47b8-9576-396a61a16104.png" 
                alt="Trading Dashboard" 
                className="w-full h-auto rounded-lg shadow-2xl animate-float glow"
              />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-simon-blue to-simon-green opacity-50 blur-lg -z-10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-20 right-0 w-96 h-96 bg-simon-blue/10 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-simon-green/10 rounded-full filter blur-3xl -z-10"></div>
    </div>
  );
};

export default HeroSection;
