import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, Button } from '../../../shared';
import { mockMenuItems } from '../../../shared/data/mockData';
import MenuCard from '../components/MenuCard';

const FeaturedMenu = () => {
  // Get featured items (top 4 highest rated items)
  const featuredItems = mockMenuItems
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Featured Dishes
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover our most popular and highly-rated dishes, carefully crafted by our expert chefs
        </p>
      </div>

      {/* Featured Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {featuredItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <Card className="inline-block p-8 bg-gradient-to-r from-orange-50 to-pink-50">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Hungry for More?
          </h3>
          <p className="text-gray-600 mb-6">
            Explore our complete menu with over 50 delicious dishes
          </p>
          <Button 
            variant="primary" 
            size="lg"
            icon={ArrowRight}
            iconPosition="right"
            onClick={() => window.location.href = '/menu'}
          >
            View Full Menu
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default FeaturedMenu;
