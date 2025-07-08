
import React from 'react';

const GlobalPresence = () => {
  const regions = [
    { name: 'North America', countries: 8, color: 'bg-blue-500' },
    { name: 'South America', countries: 6, color: 'bg-green-500' },
    { name: 'Europe', countries: 15, color: 'bg-purple-500' },
    { name: 'Middle East & Africa', countries: 12, color: 'bg-orange-500' },
    { name: 'Asia Pacific', countries: 18, color: 'bg-red-500' },
    { name: 'Australia & Oceania', countries: 4, color: 'bg-teal-500' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Global Presence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From our headquarters in Turkey, we connect businesses across all continents with our worldwide network
          </p>
        </div>

        {/* World Map Visualization */}
        <div className="relative bg-gradient-to-b from-blue-50 to-blue-100 rounded-2xl p-12 mb-12 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-gradient-to-r from-blue-200 via-transparent to-blue-200"></div>
          </div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Connecting 60+ Countries Worldwide
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regions.map((region, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className={`w-4 h-4 ${region.color} rounded-full mx-auto mb-4`}></div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{region.name}</h4>
                  <p className="text-2xl font-bold text-blue-600">{region.countries}</p>
                  <p className="text-sm text-gray-600">Countries</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Markets */}
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-red-600">TR</span>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Headquarters</h4>
            <p className="text-gray-600">Istanbul, Turkey - Global Operations Center</p>
          </div>
          
          <div className="text-center">
            <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-orange-600">MEA</span>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Middle East & Africa</h4>
            <p className="text-gray-600">Key export markets and strategic partnerships</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">AME</span>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Americas</h4>
            <p className="text-gray-600">Growing presence in North & South America</p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-green-600">APAC</span>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Asia Pacific</h4>
            <p className="text-gray-600">Major sourcing and manufacturing hub</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
