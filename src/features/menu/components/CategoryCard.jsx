import React from 'react';
import { Card, Badge } from '../../../shared';

const CategoryCard = ({ category, isSelected = false, onClick }) => {
  return (
    <Card
      className={`
        min-w-32 cursor-pointer transition-all duration-300 transform hover:scale-105
        ${isSelected 
          ? 'ring-2 ring-orange-500 bg-orange-50 shadow-lg' 
          : 'hover:shadow-md'
        }
      `}
      padding="sm"
      onClick={() => onClick(category.id)}
    >
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-2 rounded-full overflow-hidden">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        <h3 className={`
          text-sm font-semibold transition-colors duration-300
          ${isSelected ? 'text-orange-600' : 'text-gray-700'}
        `}>
          {category.name}
        </h3>
        
        <Badge 
          variant={isSelected ? 'primary' : 'default'} 
          size="sm"
          className="mt-1"
        >
          {category.count}
        </Badge>
      </div>
    </Card>
  );
};

export default CategoryCard;