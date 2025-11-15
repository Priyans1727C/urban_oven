import React from 'react';
import { ArrowLeft, ShoppingCart, Heart, User, Menu, Bell } from 'lucide-react';

const Header = ({
  title,
  onBack,
  onCartClick,
  onFavoritesClick,
  onProfileClick,
  showCartBadge = true,
  hideCartIcon = false,
  hideFavoritesIcon = false
}) => {

  const cartItemCount = 0;

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-3 min-h-[60px]">
          <div className="flex items-center">
            <button
              onClick={onBack || (() => window.history.back())}
              className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110 mr-2"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent text-center flex-1">
            {title}
          </h1>

          <div className="flex items-center space-x-1 min-w-[80px] justify-end">
            {!hideFavoritesIcon && (
              <button
                onClick={onFavoritesClick || (() => console.log('Navigate to favorites'))}
                className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110 flex-shrink-0"
              >
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
            )}

            {!hideCartIcon && (
              <button
                onClick={onCartClick}
                className="relative p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110 flex-shrink-0"
              >
                <ShoppingCart className="w-5 h-5 text-gray-600" />
                {showCartBadge && cartItemCount > 0 && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
                    {cartItemCount}
                  </div>
                )}
              </button>
            )}

            <button className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110 flex-shrink-0">
              <Menu className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:block sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 min-h-[80px]">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center space-x-4 flex-1">
              <button
                onClick={onBack || (() => window.history.back())}
                className="group p-3 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110 flex-shrink-0"
              >
                <ArrowLeft className="w-6 h-6 text-gray-600 group-hover:text-orange-500" />
              </button>

              <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                {title}
              </h1>
            </div>

            <div className="flex items-center space-x-3 flex-shrink-0">
              {!hideFavoritesIcon && (
                <button
                  onClick={onFavoritesClick || (() => console.log('Navigate to favorites'))}
                  className="p-3 bg-white border border-gray-200 rounded-full hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Heart className="w-5 h-5 text-gray-600 hover:text-pink-500" />
                </button>
              )}

              {!hideCartIcon && (
                <button
                  onClick={onCartClick}
                  className="relative p-3 bg-white border border-gray-200 rounded-full hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <ShoppingCart className="w-5 h-5 text-gray-600 hover:text-orange-500" />
                  {showCartBadge && cartItemCount > 0 && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-sm font-bold rounded-full flex items-center justify-center animate-pulse">
                      {cartItemCount}
                    </div>
                  )}
                </button>
              )}

              <button className="p-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full hover:scale-110 transition-all duration-200 shadow-lg">
                <Bell className="w-5 h-5" />
              </button>

              {onProfileClick && (
                <button
                  onClick={onProfileClick}
                  className="p-3 bg-white border border-gray-200 rounded-full hover:scale-110 transition-all duration-200 shadow-lg"
                >
                  <User className="w-5 h-5 text-gray-600" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;