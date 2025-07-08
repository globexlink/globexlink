
import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const ClientSuccessStories = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const stories = [
    {
      name: "Ahmed Al-Rashid",
      company: "Desert Pearl Trading LLC",
      country: "UAE",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: "GlobalXLink transformed our import operations from Turkey. Their expertise in Middle Eastern markets and seamless logistics made our expansion possible. We've increased our revenue by 150% in just 18 months.",
      industry: "Electronics & Consumer Goods"
    },
    {
      name: "Maria Santos",
      company: "Santos Import & Export",
      country: "Brazil",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: "Working with GlobalXLink has been a game-changer for our South American operations. Their understanding of both Turkish and Brazilian markets helped us navigate complex regulations effortlessly.",
      industry: "Textiles & Fashion"
    },
    {
      name: "James Mitchell",
      company: "Atlantic Trade Solutions",
      country: "Canada",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: "The team at GlobalXLink provided exceptional service for our North American expansion. Their logistics network and documentation expertise saved us months of delays and thousands in costs.",
      industry: "Industrial Equipment"
    },
    {
      name: "Chen Wei",
      company: "Asia Pacific Imports",
      country: "Singapore",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: "GlobalXLink's strategic location in Turkey and their extensive network across Asia made them the perfect partner for our supply chain. Professional, reliable, and results-driven.",
      industry: "Food & Beverages"
    },
    {
      name: "Amara Okafor",
      company: "West African Trade Hub",
      country: "Nigeria",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: "As a growing business in West Africa, we needed a reliable partner who understood both local and international markets. GlobalXLink exceeded our expectations in every aspect of our partnership.",
      industry: "Agricultural Products"
    },
    {
      name: "Sophie Dubois",
      company: "European Luxury Imports",
      country: "France",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: "The quality assurance and attention to detail provided by GlobalXLink is unmatched. They've helped us maintain our luxury brand standards while expanding our Turkish product line throughout Europe.",
      industry: "Luxury Goods"
    }
  ];

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % stories.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [stories.length]);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const getVisibleStories = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentStory + i) % stories.length;
      visible.push(stories[index]);
    }
    return visible;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how businesses worldwide have achieved remarkable growth through our global trade partnerships
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevStory}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          
          <button
            onClick={nextStory}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Stories Cards */}
          <div className="grid md:grid-cols-3 gap-8 transition-all duration-500 ease-in-out">
            {getVisibleStories().map((story, index) => (
              <div 
                key={`${story.name}-${currentStory}-${index}`}
                className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  index === 1 ? 'scale-105 ring-2 ring-blue-200' : ''
                }`}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{story.name}</h4>
                    <p className="text-sm text-gray-600">{story.company}</p>
                    <p className="text-xs text-blue-600 font-medium">{story.country}</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="relative mb-4">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-200" />
                  <p className="text-gray-700 italic pl-6 leading-relaxed">
                    {story.testimonial}
                  </p>
                </div>

                <div className="border-t pt-4">
                  <p className="text-sm text-gray-500 font-medium">
                    Industry: {story.industry}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStory(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentStory ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSuccessStories;
