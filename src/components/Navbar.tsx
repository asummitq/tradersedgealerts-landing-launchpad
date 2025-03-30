
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-simon-dark/80 backdrop-blur-md sticky top-0 z-50 border-b border-simon-blue/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold flex flex-row items-center">
              <span className="text-simon-red">S</span>
              <span className="text-simon-blue">I</span>
              <span className="text-simon-green">M</span>
              <span className="text-simon-yellow">O</span>
              <span className="text-white">N</span>
              <div className="mx-1"></div>
              <span className="text-simon-red">S</span>
              <span className="text-simon-blue">A</span>
              <span className="text-simon-green">Y</span>
              <span className="text-simon-yellow">S</span>
            </div>
          </div>
          
          {!isMobile && (
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#charts" className="text-gray-300 hover:text-white transition-colors">Charts</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
          )}
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              Login
            </Button>
            <Button className="bg-simon-blue hover:bg-simon-blue/80">
              Sign Up
            </Button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-simon-dark-blue border-t border-simon-blue/10">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a
              href="#features"
              className="block py-3 text-gray-300 hover:text-white border-b border-simon-blue/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#charts"
              className="block py-3 text-gray-300 hover:text-white border-b border-simon-blue/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Charts
            </a>
            <a
              href="#testimonials"
              className="block py-3 text-gray-300 hover:text-white border-b border-simon-blue/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="block py-3 text-gray-300 hover:text-white border-b border-simon-blue/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="block py-3 text-gray-300 hover:text-white border-b border-simon-blue/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="flex space-x-4 pt-4 pb-2">
              <Button variant="ghost" className="text-gray-300 hover:text-white w-1/2">
                Login
              </Button>
              <Button className="bg-simon-blue hover:bg-simon-blue/80 w-1/2">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
