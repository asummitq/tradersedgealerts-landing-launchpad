
import React from 'react';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Day Trader",
    content: "SimmonsSayz has completely transformed my trading strategy. The signals are incredibly accurate, and I've seen a 32% increase in my portfolio since I started using it.",
    rating: 5
  },
  {
    name: "Sarah Williams",
    role: "Swing Trader",
    content: "As someone who doesn't have time to watch the markets all day, SimmonsSayz has been a game-changer. The alerts help me catch opportunities I would have otherwise missed.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Forex Trader",
    content: "The technical analysis tools are exceptional. I can customize my charts exactly how I want them, and the platform is incredibly intuitive to use.",
    rating: 4
  },
  {
    name: "Rebecca Taylor",
    role: "Investment Advisor",
    content: "I recommend SimmonsSayz to all my clients. The educational resources are fantastic for beginners, and the advanced tools satisfy even the most experienced traders.",
    rating: 5
  }
];

const TestimonialCard = ({ name, role, content, rating }: { name: string, role: string, content: string, rating: number }) => (
  <Card className="bg-simon-dark-blue border-simon-blue/20 p-6 shadow-lg h-full flex flex-col justify-between hover:border-simon-blue/40 transition-all">
    <div>
      <div className="flex mb-3">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-simon-yellow text-simon-yellow mr-1" />
        ))}
        {[...Array(5-rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-gray-500 mr-1" />
        ))}
      </div>
      <p className="text-gray-300 mb-4">{content}</p>
    </div>
    <div>
      <p className="font-semibold text-white">{name}</p>
      <p className="text-gray-400 text-sm">{role}</p>
    </div>
  </Card>
);

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-simon-dark to-simon-dark-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Traders <span className="neon-text">Are Saying</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of satisfied traders who are already profiting with SimmonsSayz.
          </p>
          <div className="neon-line max-w-xs mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
