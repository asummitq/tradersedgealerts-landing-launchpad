
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Basic",
    price: "$29",
    period: "per month",
    description: "Perfect for beginners and casual traders",
    features: [
      "Basic charting tools",
      "Daily market analysis",
      "Email alerts",
      "5 custom watchlists",
      "Trading journal"
    ],
    isPopular: false,
    buttonVariant: "outline" as const,
    color: "blue"
  },
  {
    name: "Pro",
    price: "$79",
    period: "per month",
    description: "For serious traders who want an edge",
    features: [
      "Advanced technical indicators",
      "Real-time trading signals",
      "SMS & email alerts",
      "Unlimited watchlists",
      "Performance analytics",
      "Risk management tools",
      "Premium support"
    ],
    isPopular: true,
    buttonVariant: "default" as const,
    color: "green"
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "per month",
    description: "Complete solution for professional traders",
    features: [
      "All Pro features",
      "API access",
      "Algorithmic trading",
      "Custom indicators",
      "Historical backtesting",
      "Priority support",
      "Team collaboration",
      "White-label options"
    ],
    isPopular: false,
    buttonVariant: "outline" as const,
    color: "red"
  }
];

const PricingCard = ({ 
  plan: { name, price, period, description, features, isPopular, buttonVariant, color } 
}: { 
  plan: typeof plans[0] 
}) => (
  <Card className={`bg-simon-dark-blue border-simon-${color}/20 p-8 rounded-lg relative flex flex-col h-full ${isPopular ? 'shadow-lg shadow-simon-green/10' : ''}`}>
    {isPopular && (
      <div className="absolute -top-4 left-0 right-0 flex justify-center">
        <div className="bg-simon-green text-black text-sm font-semibold py-1 px-4 rounded-full">
          Most Popular
        </div>
      </div>
    )}
    
    <div className="text-center mb-6">
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex items-end justify-center">
        <span className={`text-4xl font-bold text-simon-${color}`}>{price}</span>
        <span className="text-gray-400 ml-1">{period}</span>
      </div>
    </div>
    
    <div className="flex-grow">
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className={`h-5 w-5 mr-2 text-simon-${color} flex-shrink-0 mt-0.5`} />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    
    <Button 
      variant={buttonVariant} 
      className={`w-full py-6 ${buttonVariant === 'outline' ? 
        `border-simon-${color} text-simon-${color} hover:bg-simon-${color}/10` : 
        `bg-simon-${color} hover:bg-simon-${color}/80 text-black`}`}
    >
      Get Started
    </Button>
  </Card>
);

const PricingSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent <span className="neon-text">Pricing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the plan that fits your trading style and goals
          </p>
          <div className="neon-line max-w-xs mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Need a custom solution for your organization?
          </p>
          <Button variant="link" className="text-simon-blue hover:text-simon-blue/80">
            Contact us for custom pricing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
