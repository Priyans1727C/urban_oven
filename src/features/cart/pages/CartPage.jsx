import React, { useState } from 'react';
import { ShoppingCart, CreditCard, Truck, Clock, Gift, Trash2, ArrowRight, CheckCircle, Sparkles, Tag, MapPin } from 'lucide-react';
import Header from '../../../shared/components/ui/Header';
import CartItemCard from '../components/CartItemCard';
import Button from '../../../shared/components/ui/Button';

const CartPage = ({ onBack, onFavoritesClick }) => {
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);
  
  // Mock cart data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Grilled Salmon",
      description: "Fresh Atlantic salmon with herbs",
      price: 24.99,
      image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
      rating: 4.8,
      category: "Seafood",
      isVegetarian: false,
      isSpicy: false,
      prepTime: "20 min",
      servings: 1,
      quantity: 2,
      addedAt: new Date().toISOString()
    },
    {
      id: 2,
      name: "Margherita Pizza",
      description: "Classic pizza with fresh mozzarella",
      price: 18.50,
      image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
      rating: 4.6,
      category: "Italian",
      isVegetarian: true,
      isSpicy: false,
      prepTime: "15 min",
      servings: 1,
      quantity: 1,
      addedAt: new Date().toISOString()
    },
    {
      id: 3,
      name: "Grilled Salmon",
      description: "Fresh Atlantic salmon with herbs",
      price: 24.99,
      image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
      rating: 4.8,
      category: "Seafood",
      isVegetarian: false,
      isSpicy: false,
      prepTime: "20 min",
      servings: 1,
      quantity: 2,
      addedAt: new Date().toISOString()
    },
    {
      id: 4,
      name: "Margherita Pizza",
      description: "Classic pizza with fresh mozzarella",
      price: 18.50,
      image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
      rating: 4.6,
      category: "Italian",
      isVegetarian: true,
      isSpicy: false,
      prepTime: "15 min",
      servings: 1,
      quantity: 1,
      addedAt: new Date().toISOString()
    },
    {
      id: 5,
      name: "Grilled Salmon",
      description: "Fresh Atlantic salmon with herbs",
      price: 24.99,
      image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
      rating: 4.8,
      category: "Seafood",
      isVegetarian: false,
      isSpicy: false,
      prepTime: "20 min",
      servings: 1,
      quantity: 2,
      addedAt: new Date().toISOString()
    },
    {
      id: 6,
      name: "Margherita Pizza",
      description: "Classic pizza with fresh mozzarella",
      price: 18.50,
      image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
      rating: 4.6,
      category: "Italian",
      isVegetarian: true,
      isSpicy: false,
      prepTime: "15 min",
      servings: 1,
      quantity: 1,
      addedAt: new Date().toISOString()
    }
  ]);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    setCartItems(items => 
      items.map(item => 
        item.id === itemId 
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems(items => items.filter(item => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };



  if (showOrderSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 max-w-md w-full text-center shadow-2xl animate-scale-in">
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Order Confirmed!</h2>
          <p className="text-gray-600 mb-6">
            Your delicious meal is being prepared and will be delivered soon.
          </p>
          <div className="space-y-3">
            <Button onClick={onBack} className="w-full">
              Continue Shopping
            </Button>
            <Button 
              onClick={() => setShowOrderSuccess(false)} 
              variant="outline" 
              className="w-full"
            >
              View Order Details
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-pink-50 relative overflow-hidden flex flex-col">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-orange-300 to-pink-300 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <Header 
        title="Shopping Cart"
        onBack={onBack}
        onFavoritesClick={onFavoritesClick}
        showCartBadge={false}
        hideCartIcon={true}
      />

      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10 overflow-hidden">
        {cartItems.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <ShoppingCart className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Your cart is empty</h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Looks like you haven't added any delicious items to your cart yet. 
                Start exploring our menu to find your favorites!
              </p>
              <Button onClick={onBack} icon={ArrowRight}>
                Start Shopping
              </Button>
            </div>
          </div>
        ) : (
          <>
            {/* Desktop Layout */}
            <div className="hidden lg:flex h-full gap-8">
              {/* Cart Items - Scrollable */}
              <div className="flex-1 flex flex-col h-full">
                {/* Cart Header - Fixed */}
                <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-lg mb-6 flex-shrink-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">Cart Items</h2>
                      <p className="text-gray-600">{getTotalItems()} items in your cart</p>
                    </div>
                    <Button
                      onClick={clearCart}
                      variant="ghost"
                      icon={Trash2}
                      className="text-red-500 hover:text-red-600 hover:bg-red-50"
                    >
                      Clear All
                    </Button>
                  </div>
                </div>

                {/* Cart Items List - Simple Scrollable */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden pr-2 space-y-4 relative scroll-smooth">
                  <div className="space-y-4 pb-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="relative">
                        <CartItemCard 
                          {...item} 
                          viewMode="list"
                          onQuantityChange={handleQuantityChange}
                          onRemove={handleRemoveItem}
                        />
                      </div>
                    ))}
                  </div>
                  
                  {/* Custom Scrollbar Styling */}
                  <style jsx>{`
                    div::-webkit-scrollbar {
                      width: 6px;
                    }
                    div::-webkit-scrollbar-track {
                      background: rgba(0, 0, 0, 0.1);
                      border-radius: 10px;
                    }
                    div::-webkit-scrollbar-thumb {
                      background: linear-gradient(45deg, #f97316, #ec4899);
                      border-radius: 10px;
                    }
                    div::-webkit-scrollbar-thumb:hover {
                      background: linear-gradient(45deg, #ea580c, #db2777);
                    }
                  `}</style>
                </div>
              </div>

              {/* Order Summary - Fixed Sidebar */}
              <div className="w-80 flex-shrink-0 h-full">
                <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-lg h-full flex flex-col">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h3>
                  
                  {/* Order Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal ({getTotalItems()} items)</span>
                      <span>${getTotalPrice().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Delivery Fee</span>
                      <span>$2.99</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Service Fee</span>
                      <span>$1.50</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between text-lg font-bold text-gray-800">
                        <span>Total</span>
                        <span>${(getTotalPrice() + 2.99 + 1.50).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Delivery Info */}
                  <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl p-4 mb-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center">
                        <Truck className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Delivery</p>
                        <p className="text-sm text-gray-600">25-35 min</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>123 Main Street, City</span>
                    </div>
                  </div>

                  {/* Promo Code */}
                  <div className="mb-6">
                    <div className="flex space-x-2">
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          placeholder="Enter promo code"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                        />
                        <Tag className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      </div>
                      <Button variant="outline" className="px-6">
                        Apply
                      </Button>
                    </div>
                  </div>

                  {/* Spacer to push checkout to bottom */}
                  <div className="flex-1"></div>

                  {/* Checkout Button - Fixed at bottom */}
                  <Button 
                    onClick={() => setShowOrderSuccess(true)}
                    className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    icon={CreditCard}
                  >
                    Proceed to Checkout
                  </Button>
                </div>
              </div>
            </div>

            {/* Mobile Layout with Responsive Order Summary */}
            <div className="lg:hidden h-full flex flex-col relative">
              {/* Cart Header - Fixed at top */}
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-4 shadow-lg mb-4 flex-shrink-0">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">Cart Items</h2>
                    <p className="text-gray-600 text-sm">{getTotalItems()} items</p>
                  </div>
                  <Button
                    onClick={clearCart}
                    variant="ghost"
                    icon={Trash2}
                    className="text-red-500 hover:text-red-600 hover:bg-red-50 p-2"
                  >
                    Clear
                  </Button>
                </div>
              </div>

              {/* Item List Container - Scrollable with scroll-stack trigger */}
              <div 
                className="flex-1 overflow-y-auto overflow-x-hidden relative z-10"
                onScroll={(e) => {
                  const container = e.target;
                  const scrollTop = container.scrollTop;
                  const scrollHeight = container.scrollHeight;
                  const clientHeight = container.clientHeight;
                  const maxScroll = scrollHeight - clientHeight;
                  
                  // Calculate how close we are to the bottom (trigger point at 80% scroll)
                  const triggerPoint = maxScroll * 0.8;
                  const scrollProgress = scrollTop >= triggerPoint 
                    ? Math.min((scrollTop - triggerPoint) / (maxScroll - triggerPoint), 1) 
                    : 0;
                  
                  // Apply scroll-stack effect to Order Summary
                  const orderSummary = document.getElementById('order-summary-mobile');
                  if (orderSummary) {
                    if (scrollProgress > 0) {
                      // Start animation when trigger point is reached
                      const translateY = (1 - scrollProgress) * 100; // Full slide from bottom
                      const scale = 0.95 + (scrollProgress * 0.05);
                      const opacity = scrollProgress;
                      orderSummary.style.transform = `translateY(${translateY}%) scale(${scale})`;
                      orderSummary.style.opacity = opacity;
                      orderSummary.style.pointerEvents = scrollProgress > 0.3 ? 'auto' : 'none';
                    } else {
                      // Keep completely hidden before trigger
                      orderSummary.style.transform = 'translateY(100%) scale(0.95)';
                      orderSummary.style.opacity = '0';
                      orderSummary.style.pointerEvents = 'none';
                    }
                  }
                }}
              >
                {/* Cart Items List with extra scroll space */}
                <div className="space-y-3 px-1">
                  {cartItems.map((item) => (
                    <div key={item.id} className="relative">
                      <CartItemCard 
                        {...item} 
                        viewMode="list"
                        onQuantityChange={handleQuantityChange}
                        onRemove={handleRemoveItem}
                      />
                    </div>
                  ))}
                  
                 
                  <div className="h-70"></div> {/* Additional scroll space */}
                </div>
              </div>

              {/* Order Summary - Hidden initially, appears with scroll-stack */}
              <div 
                id="order-summary-mobile"
                className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl rounded-t-3xl shadow-2xl border-t border-gray-200/50 z-30 transition-all duration-500 ease-out max-h-[70vh] overflow-y-auto"
                style={{
                  transform: 'translateY(100%) scale(0.95)',
                  opacity: 0,
                  transformOrigin: 'center bottom',
                  pointerEvents: 'none'
                }}
              >
                {/* Handle bar for visual feedback */}
                <div className="flex justify-center pt-3 pb-2">
                  <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
                </div>
                
                <div className="p-4 pb-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Order Summary</h3>
                  
                  {/* Compact Order Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Subtotal ({getTotalItems()} items)</span>
                      <span>${getTotalPrice().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Delivery & Service</span>
                      <span>$4.49</span>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between text-base font-bold text-gray-800">
                        <span>Total</span>
                        <span>${(getTotalPrice() + 4.49).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Compact Delivery Info */}
                  <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center">
                        <Truck className="w-3 h-3 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-800">25-35 min delivery</p>
                        <p className="text-xs text-gray-600">123 Main Street</p>
                      </div>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <Button 
                    onClick={() => setShowOrderSuccess(true)}
                    className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    icon={CreditCard}
                  >
                    Proceed to Checkout
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button className="group w-14 h-14 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-110 animate-pulse-glow flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-white group-hover:animate-spin" />
        </button>
      </div>
    </div>
  );
};

export default CartPage;