
import React from 'react';
import { 
  LineChart, 
  BarChart3, 
  Bell
} from 'lucide-react';

const features = [
  {
    icon: <LineChart className="h-10 w-10" />,
    title: "Advanced Charting",
    description: "Interactive charts with multiple timeframes and technical indicators to analyze market trends."
  },
  {
    icon: <Bell className="h-10 w-10" />,
    title: "Real-time Alerts",
    description: "Instant notifications for trading opportunities based on your custom parameters."
  },
  {
    icon: <BarChart3 className="h-10 w-10" />,
    title: "Market Analytics",
    description: "Comprehensive analytics to monitor various markets and improve strategies."
  }
];

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-simon-dark-blue p-6 rounded-lg transition-all hover:bg-gradient-to-br hover:from-simon-dark-blue hover:to-simon-dark-blue/60 hover:shadow-lg hover:shadow-simon-blue/10 group">
    <div className="text-simon-blue group-hover:text-simon-green transition-colors mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const FeaturesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Trading <span className="neon-text">Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            TradersEdge provides everything you need to analyze markets, execute trades, and manage your portfolio effectively.
          </p>
          <div className="neon-line max-w-xs mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
