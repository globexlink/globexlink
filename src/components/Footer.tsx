
import React from 'react';
import { Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#product-catalogue' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Import Services',
    'Export Services',
    'Logistics Solutions',
    'Trade Documentation',
    'Customs Clearance'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-blue-400">Global</span>XLink
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Your trusted partner in global trade, connecting businesses worldwide through reliable import-export solutions and comprehensive logistics support.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-green-600 hover:bg-green-700 p-3 rounded-lg transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 GlobalXLink. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm mt-4">
            info@globalxlink.com | +971 4 123 4567
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
