
import React from 'react';
import { Import, ArrowUpRight, MapPin } from 'lucide-react';

const CoreServices = () => {
  const services = [
    {
      icon: Import,
      title: 'Import Services',
      description: 'Source premium goods worldwide with comprehensive customs handling and quality assurance.',
      features: ['Global Sourcing', 'Quality Control', 'Customs Clearance', 'Documentation']
    },
    {
      icon: ArrowUpRight,
      title: 'Export Services',
      description: 'Expand your reach globally with efficient outbound logistics and market entry support.',
      features: ['Market Analysis', 'Export Documentation', 'Shipping Solutions', 'Compliance Management']
    },
    {
      icon: MapPin,
      title: 'Logistics & Documentation',
      description: 'End-to-end shipping, clearance, and trade compliance solutions for seamless operations.',
      features: ['Supply Chain Management', 'Trade Finance', 'Risk Management', 'Digital Tracking']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive trade solutions designed to streamline your global business operations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group h-full">
              <div className="bg-gray-50 rounded-xl p-8 hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl h-full flex flex-col">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-lg mb-6 group-hover:bg-blue-700 transition-colors">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-900">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>

                <ul className="space-y-2 mt-auto">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
