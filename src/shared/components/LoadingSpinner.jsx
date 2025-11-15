import React from 'react';

const LoadingSpinner = ({ 
  size = 'large', 
  message = 'Loading...', 
  fullScreen = true 
}) => {
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-10 h-10',
    large: 'w-16 h-16',
  };

  const containerClasses = fullScreen
    ? 'fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50'
    : 'flex items-center justify-center py-8';

  return (
    <div className={containerClasses}>
      <div className="text-center">
        {/* Animated Spinner */}
        <div className="relative mb-4">
          <div className={`
            ${sizeClasses[size]} 
            border-4 border-gray-200 border-t-orange-500 rounded-full animate-spin mx-auto
          `} />
          
          {/* Pulsing Background Circle */}
          <div className={`
            absolute inset-0 ${sizeClasses[size]} 
            border-4 border-orange-200 rounded-full animate-pulse mx-auto opacity-30
          `} />
        </div>

        {/* Loading Message */}
        <p className="text-gray-600 font-medium animate-pulse">
          {message}
        </p>

        {/* Loading Dots Animation */}
        <div className="flex justify-center space-x-1 mt-3">
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;