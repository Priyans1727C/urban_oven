import React, { useState, useRef, useEffect } from 'react';
import { Star, Heart, ShoppingCart, Clock, Users, Sparkles, Award } from 'lucide-react';

const FavoriteCard = ({
  id,
  name,
  price,
  image,
  rating,
  category,
  isVegetarian,
  prepTime,
  servings,
  addedAt,
  lastOrdered,
  viewMode = 'grid',
  onRemoveFavorite
}) => {
  const [isLiked, setIsLiked] = useState(true);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (cardRef.current && isHovered) {
      const rect = cardRef.current.getBoundingClientRect();
      // Only track mouse if it's within the card boundaries
      if (e.clientX >= rect.left && e.clientX <= rect.right && 
          e.clientY >= rect.top && e.clientY <= rect.bottom) {
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    }
  };

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsAddingToCart(false);
    console.log('Added to cart:', name);
  };

  const handleToggleFavorite = () => {
    const newLikedState = !isLiked;
    setIsLiked(newLikedState);
    
    // If unliked, remove from favorites after a short delay for animation
    if (!newLikedState && onRemoveFavorite) {
      setTimeout(() => {
        onRemoveFavorite(id);
      }, 300); // Delay to show animation
    }
    
    console.log('Toggled favorite:', name, newLikedState ? 'liked' : 'unliked');
  };

  const handleCardClick = (e) => {
    // Prevent event bubbling
    e.stopPropagation();
    // Toggle category visibility for mobile devices
    setIsClicked(!isClicked);
  };

  // Handle click outside to hide category on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setIsClicked(false);
      }
    };

    // Only add listener if category is visible
    if (isClicked) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isClicked]);



  return (
    <div className="perspective-1000 group">
      <div
        ref={cardRef}
        className={`relative ${
          viewMode === 'list' 
            ? 'w-full h-32 sm:h-36 flex' 
            : 'w-80 h-[400px]'
        } transform-style-preserve-3d transition-all duration-700 cursor-pointer ${
          isHovered ? (viewMode === 'list' ? 'scale-[1.02]' : 'scale-105 rotate-2') : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setMousePosition({ x: 50, y: 50 }); // Reset to center when leaving
        }}
        onMouseMove={handleMouseMove}
        onClick={handleCardClick}
      >
        <div
          className={`relative w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden ${
            viewMode === 'list' ? 'flex' : ''
          }`}
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(251, 146, 60, 0.1) 0%, transparent 50%)`
          }}
        >
          {/* Animated Background Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-1000 animate-float`}
                style={{
                  left: `${20 + i * 12}%`,
                  top: `${10 + i * 10}%`,
                  animationDelay: `${i * 200}ms`,
                  animationDuration: `${3 + i * 0.5}s`
                }}
              />
            ))}
          </div>

          {/* Image Container */}
          <div className={`relative overflow-hidden ${
            viewMode === 'list' ? 'w-28 sm:w-36 h-full flex-shrink-0 rounded-l-3xl' : 'h-48 rounded-t-3xl'
          }`}>
            <img
              src={image}
              alt={name}
              className={`w-full h-full object-cover transition-all duration-700 ${
                isHovered ? 'scale-125 rotate-3' : 'scale-100 rotate-0'
              } ${
                viewMode === 'list' ? 'rounded-l-3xl' : 'rounded-t-3xl'
              }`}
            />

            {/* Dynamic Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-br from-orange-500/20 via-pink-500/20 to-purple-500/20 transition-all duration-500 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                background: isHovered ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(251, 146, 60, 0.3) 0%, transparent 70%)` : undefined
              }}
            />

            {/* Floating Action Buttons */}
            <div className={`absolute ${
              viewMode === 'list' ? 'top-2 right-2' : 'top-4 right-4'
            }`}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleToggleFavorite();
                }}
                className={`rounded-full backdrop-blur-md transition-all duration-300 transform hover:scale-125 ${
                  viewMode === 'list' ? 'p-2' : 'p-3'
                } ${
                  isLiked ? 'bg-red-500/90 text-white shadow-lg shadow-red-200' : 'bg-white/90 text-gray-600 hover:text-red-500 hover:bg-red-50'
                }`}
                title={isLiked ? 'Remove from favorites' : 'Add to favorites'}
              >
                <Heart className={`transition-all duration-300 ${
                  viewMode === 'list' ? 'w-4 h-4' : 'w-5 h-5'
                } ${isLiked ? 'fill-current animate-pulse' : ''}`} />
              </button>
            </div>

            {/* Category Badge - Hover for Desktop, Click for Mobile - Hidden in List View */}
            {viewMode === 'grid' && (
              <div className={`absolute transform transition-all duration-300 top-4 left-4 ${
                // Desktop: show on hover, Mobile: show on click
                isHovered || isClicked 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-2'
              }`}>
                <div className={`bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold rounded-full backdrop-blur-sm transform transition-all duration-300 ${
                  isHovered || isClicked ? 'scale-110' : 'scale-100'
                } px-4 py-2 text-sm`}>
                  <div className="flex items-center space-x-1">
                    <Award className="w-4 h-4" />
                    <span>{category}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Dietary Indicators */}
            {isVegetarian && (
              <div className={`absolute ${
                viewMode === 'list' ? 'bottom-2 left-2' : 'bottom-4 left-4'
              }`}>
                <div className={`bg-green-500 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 animate-pulse ${
                  viewMode === 'list' ? 'w-6 h-6' : 'w-8 h-8'
                }`}>
                  <span className="text-white text-xs font-bold">V</span>
                </div>
              </div>
            )}

            {/* Sparkle Effects */}
            {viewMode === 'grid' && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <Sparkles
                    key={i}
                    className={`absolute w-6 h-6 text-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-ping`}
                    style={{
                      left: `${30 + i * 25}%`,
                      top: `${20 + i * 20}%`,
                      animationDelay: `${i * 300}ms`
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className={`relative flex flex-col ${
            viewMode === 'list' ? 'flex-1 p-3 sm:p-6 justify-between' : 'p-4 flex-1'
          }`}>
            {/* Interactive Rating */}
            <div className={`flex items-center justify-between ${
              viewMode === 'list' ? 'mb-2' : 'mb-3'
            }`}>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 cursor-pointer transition-all duration-200 transform hover:scale-125 fill-yellow-300 text-yellow-300" />
                <span className="ml-1 text-sm font-bold text-gray-600">{rating}</span>
              </div>

              {viewMode === 'list' && (
                <div className="hidden sm:flex items-center text-gray-500 space-x-3">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span className="text-xs">{prepTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3" />
                    <span className="text-xs">{servings}</span>
                  </div>
                </div>
              )}

              {viewMode === 'grid' && (
                <div className="flex items-center text-gray-500 space-x-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span className="text-xs">{prepTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3" />
                    <span className="text-xs">{servings}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Title with Hover Effect */}
            <h3 title={name} className={`font-bold line-clamp-1 text-gray-800 transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-400 group-hover:bg-clip-text ${
              viewMode === 'list' ? 'text-base sm:text-lg mb-1 sm:mb-2' : 'text-xl mb-2'
            }`}>
              {name}
            </h3>



            {/* Bottom Section */}
            <div className={`mt-auto ${
              viewMode === 'list' ? 'space-y-2' : 'space-y-3'
            }`}>
              {/* Added Date */}
              {viewMode === 'grid' && (
                <div className="text-xs text-gray-400 text-center">
                  <span>Added {new Date(addedAt).toLocaleDateString()}</span>
                </div>
              )}

              {/* Price and Action */}
              <div className={`flex items-center justify-between ${
                viewMode === 'list' ? 'gap-2 sm:gap-3' : 'gap-3'
              }`}>
                <div className={`flex ${
                  viewMode === 'list' ? 'flex-col sm:flex-row sm:items-baseline sm:space-x-2' : 'items-baseline space-x-2'
                }`}>
                  <span className={`font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent ${
                    viewMode === 'list' ? 'text-lg sm:text-xl' : 'text-2xl'
                  }`}>
                    ${typeof price === 'number' ? price.toFixed(2) : price}
                  </span>
                  <span className={`text-gray-400 ${
                    viewMode === 'list' ? 'text-xs sm:text-sm' : 'text-sm'
                  }`}>per serving</span>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart();
                  }}
                  disabled={isAddingToCart}
                  className={`relative overflow-hidden bg-gradient-to-r from-orange-400 to-pink-400 text-white font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-70 group/button ${
                    viewMode === 'list' ? 'py-1.5 px-3 sm:py-2 sm:px-4 rounded-xl text-xs' : 'py-2 px-4 rounded-2xl text-sm'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-orange-300 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300" />
                  <div className="relative flex items-center justify-center space-x-1">
                    {isAddingToCart ? (
                      <>
                        <div className={`border-2 border-white border-t-transparent rounded-full animate-spin ${
                          viewMode === 'list' ? 'w-3 h-3' : 'w-4 h-4'
                        }`} />
                        <span className="hidden sm:inline">Adding...</span>
                        <span className="sm:hidden">...</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart className={viewMode === 'list' ? 'w-3 h-3' : 'w-4 h-4'} />
                        <span className="hidden sm:inline">Add to Cart</span>
                        <span className="sm:hidden">Add</span>
                      </>
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Animated Border */}
          <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-400/30 via-pink-400/30 to-purple-400/30 blur-sm animate-pulse" />
            <div className="absolute inset-[1px] rounded-3xl bg-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCard;