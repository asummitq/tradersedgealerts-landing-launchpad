
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="bg-simon-dark-blue py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-4">
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
            <p className="text-gray-400 mb-4">
              Advanced trading signals and analytics for modern traders.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-simon-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-simon-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-simon-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-simon-blue transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-simon-blue transition-colors">Trading Signals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-simon-blue transition-colors">Chart Analysis</a></li>
              <li><a href="#" className="text-gray-400 hover:text-simon-blue transition-colors">Risk Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-simon-blue transition-colors">Mobile App</a></li>
              <li><a href="#" className="text-gray-400 hover:text-simon-blue transition-colors">API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-simon-blue transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-simon-blue transition-colors">Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-simon-blue transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-simon-blue transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-simon-blue transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="text-simon-blue mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">support@simmonssayz.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="text-simon-blue mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">+1 (888) 555-1234</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-simon-blue mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Trading St, Financial District<br />New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SimmonsSayz. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
