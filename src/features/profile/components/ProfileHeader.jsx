import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Menu, User, ShoppingBag, Heart, Award, Settings } from 'lucide-react';

const ProfileHeader = ({
  title,
  onBack,
  activeTab,
  onTabChange,
  onCartClick,
  onFavoritesClick
}) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const menuRef = useRef(null);

  const handleCloseMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowMobileMenu(false);
      setIsClosing(false);
    }, 300);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        handleCloseMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'orders', label: 'Orders', icon: ShoppingBag },
    { id: 'favorites', label: 'Favorites', icon: Heart },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const handleMenuItemClick = (tabId) => {
    onTabChange(tabId);
    handleCloseMenu();
  };

  const getCurrentTabLabel = () => {
    const currentTab = menuItems.find(item => item.id === activeTab);
    return currentTab ? currentTab.label : 'Overview';
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
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
          
          {/* Mobile Menu Button */}
          <div className="relative" ref={menuRef}>
            <button 
              onClick={() => setShowMobileMenu(true)}
              className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110"
            >
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Full Screen Mobile Menu Overlay */}
      {showMobileMenu && (
        <div 
          className="fixed inset-0 bg-white/20 backdrop-blur-md transition-all duration-300 z-[9999]"
          onClick={handleCloseMenu}
        >
          <div 
            className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-all duration-500 ease-out"
            style={{
              animation: isClosing ? 'slideOutToRight 0.3s ease-in forwards' : 'slideInFromRight 0.5s ease-out forwards'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-800">Menu</h3>
              <button
                onClick={handleCloseMenu}
                className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <div className="py-4">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleMenuItemClick(item.id)}
                    className={`w-full flex items-center space-x-4 px-6 py-4 text-left transition-all duration-200 transform ${
                      isActive
                        ? 'bg-gradient-to-r from-orange-100 to-pink-100 text-orange-600 shadow-md mx-3 rounded-2xl border border-orange-200'
                        : 'hover:bg-gray-50 text-gray-700 hover:text-gray-900 hover:translate-x-2'
                    } animate-slide-in-${index}`}
                    style={{
                      animationDelay: `${index * 100 + 200}ms`
                    }}
                  >
                    <div className={`p-2 rounded-xl ${
                      isActive 
                        ? 'bg-orange-200 bg-opacity-50' 
                        : 'bg-gray-100'
                    }`}>
                      <Icon className={`w-5 h-5 ${
                        isActive ? 'text-orange-600' : 'text-gray-600'
                      }`} />
                    </div>
                    <span className="font-semibold text-lg">{item.label}</span>
                    {isActive && (
                      <div className="ml-auto">
                        <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Current Section Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-r from-orange-50 to-pink-50 border-t border-orange-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-200 to-pink-200 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-700">Current Section</p>
                  <p className="text-sm text-orange-600 font-semibold">{getCurrentTabLabel()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Header */}
      <div className="hidden lg:block sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
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
              <button 
                onClick={onFavoritesClick}
                className="p-3 bg-white border border-gray-200 rounded-full hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Heart className="w-5 h-5 text-gray-600 hover:text-pink-500" />
              </button>
              
              <button 
                onClick={onCartClick}
                className="p-3 bg-white border border-gray-200 rounded-full hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <ShoppingBag className="w-5 h-5 text-gray-600 hover:text-orange-500" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes slideInFromRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slideOutToRight {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }
        
        @keyframes slide-in-0 {
          from {
            opacity: 0;
            transform: translateX(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        
        @keyframes slide-in-1 {
          from {
            opacity: 0;
            transform: translateX(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        
        @keyframes slide-in-2 {
          from {
            opacity: 0;
            transform: translateX(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        
        @keyframes slide-in-3 {
          from {
            opacity: 0;
            transform: translateX(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        
        @keyframes slide-in-4 {
          from {
            opacity: 0;
            transform: translateX(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        
        .animate-slide-in-0 {
          animation: slide-in-0 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-slide-in-1 {
          animation: slide-in-1 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-slide-in-2 {
          animation: slide-in-2 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-slide-in-3 {
          animation: slide-in-3 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-slide-in-4 {
          animation: slide-in-4 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </>
  );
};

export default ProfileHeader;