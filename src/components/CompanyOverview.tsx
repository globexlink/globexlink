
import React from 'react';

const CompanyOverview = () => {
  const stats = [
    { number: '10+', label: 'Years of Experience' },
    { number: '50+', label: 'Countries Connected' },
    { number: '1000+', label: 'Successful Shipments' },
    { number: '25+', label: 'Global Partners' }
  ];

  return (
    <section id="company-overview" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Trusted Global Trade Partner
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At GlobalXLink, we specialize in seamless global trade, offering reliable import-export solutions across multiple industries. Our international reach ensures your business thrives in the global market.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium text-lg">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
