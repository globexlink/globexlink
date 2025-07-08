
import React from 'react';

const About = () => {
  const values = [
    {
      title: 'Trust & Reliability',
      description: 'Building long-term partnerships through consistent, dependable service delivery.'
    },
    {
      title: 'Global Expertise',
      description: 'Deep understanding of international markets and trade regulations.'
    },
    {
      title: 'Innovation',
      description: 'Leveraging cutting-edge technology to streamline trade processes.'
    },
    {
      title: 'Compliance Excellence',
      description: 'Maintaining the highest standards of regulatory compliance worldwide.'
    }
  ];

  const testimonials = [
    {
      quote: "GlobalXLink helped us expand into 12 new countries in under 6 months. Their expertise in international trade is unmatched.",
      author: "Sarah Johnson",
      company: "TechCorp Industries"
    },
    {
      quote: "The seamless logistics and documentation support from GlobalXLink made our first international expansion effortless.",
      author: "Mohamed Al-Hassan",
      company: "Desert Innovations LLC"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About GlobalXLink
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Founded with a vision to simplify global trade, GlobalXLink has grown into a trusted partner for businesses seeking to expand their international presence. Our commitment to excellence and deep industry expertise sets us apart in the competitive world of international commerce.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To empower businesses with seamless, reliable, and efficient global trade solutions that bridge markets and create opportunities for sustainable growth across borders.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the world's most trusted global trade partner, known for our innovation, integrity, and unwavering commitment to client success in international markets.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">What Sets Us Apart</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h4 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Client Success Stories</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-4xl text-blue-600 mb-4">"</div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
