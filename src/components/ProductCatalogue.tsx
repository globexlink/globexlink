
import React from 'react';

const ProductCatalogue = () => {
  const productCategories = [
    {
      name: 'Agricultural Products',
      category: 'Agriculture',
      description: 'Premium grains, spices, and organic produce from certified global suppliers.',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=300&fit=crop'
    },
    {
      name: 'Electronics & Technology',
      category: 'Electronics',
      description: 'Cutting-edge electronic components and consumer technology products.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop'
    },
    {
      name: 'Textiles & Apparel',
      category: 'Textiles',
      description: 'High-quality fabrics, garments, and textile accessories for global markets.',
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=300&fit=crop'
    },
    {
      name: 'Industrial Equipment',
      category: 'Industrial',
      description: 'Heavy machinery, tools, and industrial components for manufacturing.',
      image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=400&h=300&fit=crop'
    },
    {
      name: 'Medical Supplies',
      category: 'Healthcare',
      description: 'Medical devices, pharmaceuticals, and healthcare equipment solutions.',
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=300&fit=crop'
    },
    {
      name: 'Energy Solutions',
      category: 'Energy',
      description: 'Renewable energy equipment and sustainable power generation systems.',
      image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=400&h=300&fit=crop'
    }
  ];

  return (
    <section id="product-catalogue" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Product Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our diverse range of products across multiple industries and global markets
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((product, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View Full Catalogue
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalogue;
