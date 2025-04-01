
import React from 'react';
import { Card } from '@/components/ui/card';
import {
  Area,
  AreaChart,
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts';

// Sample data for charts
const lineData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 700 },
  { name: 'Jun', value: 900 },
  { name: 'Jul', value: 1100 },
  { name: 'Aug', value: 1300 },
  { name: 'Sep', value: 1200 },
  { name: 'Oct', value: 1500 },
  { name: 'Nov', value: 1700 },
  { name: 'Dec', value: 2000 },
];

const areaData = [
  { name: 'Jan', value: 2400, value2: 2000 },
  { name: 'Feb', value: 1398, value2: 1800 },
  { name: 'Mar', value: 9800, value2: 8000 },
  { name: 'Apr', value: 3908, value2: 3200 },
  { name: 'May', value: 4800, value2: 4100 },
  { name: 'Jun', value: 3800, value2: 3000 },
  { name: 'Jul', value: 4300, value2: 3500 },
];

const ChartSection = () => {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 chart-grid opacity-20 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Data-Driven <span className="neon-text">Trading Insights</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our advanced analytics help you visualize market trends and make confident decisions.
          </p>
          <div className="neon-line max-w-xs mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-simon-dark-blue/60 border-simon-blue/20 p-6 shadow-lg shadow-simon-blue/5">
            <h3 className="text-xl font-medium mb-4">Market Performance</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2A3747" />
                  <XAxis dataKey="name" stroke="#6C7A89" />
                  <YAxis stroke="#6C7A89" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#0D1B2A', 
                      borderColor: '#1DB9EC',
                      borderRadius: '0.5rem',
                      color: '#fff' 
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#1DB9EC" 
                    strokeWidth={3} 
                    dot={{ fill: '#1DB9EC', strokeWidth: 2 }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="bg-simon-dark-blue/60 border-simon-blue/20 p-6 shadow-lg shadow-simon-blue/5">
            <h3 className="text-xl font-medium mb-4">Trading Volume</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={areaData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2A3747" />
                  <XAxis dataKey="name" stroke="#6C7A89" />
                  <YAxis stroke="#6C7A89" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#0D1B2A', 
                      borderColor: '#2FEF10',
                      borderRadius: '0.5rem',
                      color: '#fff' 
                    }} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stackId="1"
                    stroke="#1DB9EC" 
                    fill="rgba(29, 185, 236, 0.2)" 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value2" 
                    stackId="1"
                    stroke="#2FEF10" 
                    fill="rgba(47, 239, 16, 0.2)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ChartSection;
