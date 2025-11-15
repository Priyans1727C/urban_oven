import React from 'react';
import { Star } from 'lucide-react';

const Rating = ({
  rating = 0,
  maxRating = 5,
  size = 'md',
  interactive = false,
  onChange,
  showValue = true,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8',
  };

  const handleStarClick = (value) => {
    if (interactive && onChange) {
      onChange(value);
    }
  };

  const renderStars = () => {
    return Array.from({ length: maxRating }, (_, index) => {
      const starValue = index + 1;
      const isFilled = starValue <= rating;
      const isHalfFilled = starValue - 0.5 <= rating && starValue > rating;

      return (
        <button
          key={index}
          type="button"
          onClick={() => handleStarClick(starValue)}
          disabled={!interactive}
          className={`
            ${interactive ? 'cursor-pointer hover:scale-110' : 'cursor-default'}
            transition-all duration-200 transform
            ${interactive ? 'hover:text-yellow-400' : ''}
          `}
        >
          <Star
            className={`
              ${sizeClasses[size]}
              transition-all duration-200
              ${isFilled || isHalfFilled
                ? 'fill-yellow-300 text-yellow-300'
                : 'text-gray-300'
              }
            `}
          />
        </button>
      );
    });
  };

  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      <div className="flex items-center">
        {renderStars()}
      </div>
      {showValue && (
        <span className="ml-2 text-sm font-bold text-gray-600">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};

export default Rating;