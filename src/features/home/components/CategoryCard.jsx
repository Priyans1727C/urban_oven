import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { mockCategories } from '../../../shared/data/mockData';

const categories = mockCategories;

const CategoryCard = () => {
  const [categoryStartIndex, setCategoryStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(7);

  // Responsive visible count
  React.useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) setVisibleCount(3);
      else if (window.innerWidth < 768) setVisibleCount(4);
      else if (window.innerWidth < 1024) setVisibleCount(5);
      else if (window.innerWidth < 1280) setVisibleCount(6);
      else setVisibleCount(7);
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, categories.length - visibleCount);

  const handlePrevious = () => {
    setCategoryStartIndex(Math.max(0, categoryStartIndex - 1));
  };

  const handleNext = () => {
    setCategoryStartIndex(Math.min(maxIndex, categoryStartIndex + 1));
  };

  return (
    <div className="relative py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Decorative Elements - More Subtle */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-slate-200 rounded-full opacity-10 blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-gray-200 rounded-full opacity-15 blur-xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-slate-300 rounded-full opacity-8 blur-3xl animate-pulse"></div>
        
        {/* Floating sparkles - Very Subtle */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-slate-400 rounded-full animate-twinkle opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-center mb-8 sm:mb-12 relative">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-gray-700 rounded-full flex items-center justify-center shadow-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-1">
                What's on your mind?
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">Discover our delicious categories</p>
            </div>
          </div>
          
          {/* Navigation Buttons - Positioned absolutely */}
          <div className="absolute right-0 flex items-center space-x-2">
            <button 
              className={`w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center transition-all duration-300 border border-gray-200 group ${
                categoryStartIndex === 0 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:shadow-xl hover:bg-gray-50 hover:scale-110 hover:border-gray-300'
              }`}
              onClick={handlePrevious}
              disabled={categoryStartIndex === 0}
            >
              <ChevronLeft className={`w-6 h-6 transition-colors duration-300 ${
                categoryStartIndex === 0 
                  ? 'text-gray-400' 
                  : 'text-gray-600 group-hover:text-gray-800'
              }`} />
            </button>
            <button 
              className={`w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center transition-all duration-300 border border-gray-200 group ${
                categoryStartIndex >= maxIndex
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:shadow-xl hover:bg-gray-50 hover:scale-110 hover:border-gray-300'
              }`}
              onClick={handleNext}
              disabled={categoryStartIndex >= maxIndex}
            >
              <ChevronRight className={`w-6 h-6 transition-colors duration-300 ${
                categoryStartIndex >= maxIndex
                  ? 'text-gray-400'
                  : 'text-gray-600 group-hover:text-gray-800'
              }`} />
            </button>
          </div>
        </div>
        
        {/* Category Cards */}
        <div className="flex justify-center gap-4 sm:gap-6 lg:gap-8 overflow-hidden">
          {categories.slice(categoryStartIndex, categoryStartIndex + visibleCount).map((category, index) => (
            <div
              key={category.name}
              className="flex flex-col items-center cursor-pointer group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Category Card */}
              <div className="relative  p-4 sm:p-5 lg:p-6  hover: transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden">
             
                <div className="relative z-10 flex flex-col items-center">
                  {/* Image Container */}
                  <div className="relative mb-3 sm:mb-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-110 relative border-3 border-white">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Subtle overlay only on hover */}
                    </div>
                    
                  </div>
                  
                  {/* Category Name */}
                  <span className="text-gray-700 font-semibold text-xs sm:text-sm lg:text-base text-center group-hover:text-gray-800 transition-colors duration-300 px-1 whitespace-nowrap">
                    {category.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(categories.length / visibleCount) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCategoryStartIndex(index * visibleCount)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                Math.floor(categoryStartIndex / visibleCount) === index
                  ? 'bg-gray-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CategoryCard;