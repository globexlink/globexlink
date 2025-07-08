
import React, { useState, useEffect } from 'react';
import { ArrowDown, Phone, Linkedin, MessageCircle, Twitter, Facebook } from 'lucide-react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Trade-related background images
  const backgroundImages = [
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80', // Shipping containers
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80', // Cargo ship
    'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80', // Warehouse logistics
    'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80', // Global trade
    'https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80' // International business
  ];

  const thumbnailLabels = [
    'Shipping Containers',
    'Maritime Transport',
    'Warehouse Solutions',
    'Global Network',
    'International Trade'
  ];

  // Auto-rotate background every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('company-overview');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="hero-section relative h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Logo - Top Left */}
      <div className="absolute top-8 left-8 z-20">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
          <h1 className="text-2xl font-bold text-white">
            <span className="text-blue-400">Global</span>XLink
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="text-blue-400">Global</span>XLink
          </h1>
          <h2 className="text-2xl md:text-3xl mb-4 text-blue-200 font-semibold">
            Your Trusted Global Trade Partner
          </h2>
          <p className="text-lg md:text-xl mb-12 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Connecting markets worldwide through seamless import-export services and comprehensive logistics support
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get a Quote
            </button>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Our Services
            </button>
          </div>
        </div>
      </div>

      {/* Phone Number - Bottom Left with Hover Effect */}
      <div className="absolute bottom-8 left-8 z-20">
        <div className="group cursor-pointer">
          <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105">
            <Phone className="w-5 h-5 text-white" />
            <span className="text-white font-medium">+90 212 123 4567</span>
          </div>
        </div>
      </div>

      {/* Social Media Icons - Right Side Horizontal */}
      <div className="absolute right-8 bottom-8 z-20">
        <div className="flex space-x-4">
          <a 
            href="#" 
            className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-colors duration-300 group"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
          </a>
          <a 
            href="#" 
            className="bg-green-600 hover:bg-green-700 p-3 rounded-lg transition-colors duration-300 group"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
          </a>
          <a 
            href="#" 
            className="bg-blue-500 hover:bg-blue-600 p-3 rounded-lg transition-colors duration-300 group"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
          </a>
          <a 
            href="#" 
            className="bg-blue-800 hover:bg-blue-900 p-3 rounded-lg transition-colors duration-300 group"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>

      {/* Thumbnail Carousel - Bottom */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-4 bg-black/30 backdrop-blur-sm rounded-lg p-4">
          {backgroundImages.map((image, index) => (
            <div 
              key={index}
              className={`relative cursor-pointer transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'ring-2 ring-blue-400 scale-110' 
                  : 'hover:scale-105 opacity-70 hover:opacity-100'
              }`}
              onClick={() => handleThumbnailClick(index)}
            >
              <img 
                src={image} 
                alt={thumbnailLabels[index]}
                className="w-16 h-12 object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-md"></div>
              <div className="absolute bottom-1 left-1 right-1">
                <div className="text-xs text-white font-medium truncate">
                  {thumbnailLabels[index]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer hover:text-blue-300 transition-colors z-20"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
