
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-simon-blue/20 to-simon-green/20 opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-simon-dark-blue/80 rounded-2xl p-8 md:p-12 shadow-xl backdrop-blur-sm border border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-3/5">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your <span className="neon-text">Trading</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Join TradersEdgeAlerts today and take advantage of our 14-day free trial. No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-simon-green text-black hover:bg-simon-green/80 font-semibold px-8 py-6 rounded-md text-lg">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 font-semibold px-8 py-6 rounded-md text-lg">
                  24/7 AI Chat Bot Support
                  <MessageSquare className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="md:w-2/5 flex justify-center">
              <div className="relative bg-gradient-to-r from-simon-blue to-simon-green p-8 rounded-xl opacity-70">
                <h3 className="text-2xl font-bold text-white">Premium Features</h3>
                <ul className="mt-4 space-y-2 text-white">
                  <li>• Advanced Trade Signals</li>
                  <li>• Real-time Market Data</li>
                  <li>• Trading Strategy Library</li>
                  <li>• 24/7 Expert Support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
