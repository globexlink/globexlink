
import React from 'react';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import CompanyOverview from '../components/CompanyOverview';
import CoreServices from '../components/CoreServices';
import ProductCatalogue from '../components/ProductCatalogue';
import GlobalPresence from '../components/GlobalPresence';
import ClientSuccessStories from '../components/ClientSuccessStories';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Navigation />
      <div id="company-overview">
        <CompanyOverview />
      </div>
      <div id="services">
        <CoreServices />
      </div>
      <div id="product-catalogue">
        <ProductCatalogue />
      </div>
      <GlobalPresence />
      <ClientSuccessStories />
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
