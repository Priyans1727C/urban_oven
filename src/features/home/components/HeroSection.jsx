import React, { useState, useEffect } from 'react';
import { mockBannerSlides } from '../../../shared/data/mockData';


// import { Percent, Gift, Zap } from 'lucide-react';
//   const bannerSlides = [
//     {
//       id: 1,
//       title: "50% OFF First Order",
//       subtitle: "New customers get 50% discount on their first order",
//       offer: "50% OFF",
//       code: "WELCOME50",
//       image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       gradient: "from-green-600 via-emerald-500 to-teal-500",
//       icon: Percent
//     },
//     {
//       id: 2,
//       title: "Buy 2 Get 1 FREE",
//       subtitle: "Order any 2 pizzas and get the 3rd one absolutely free",
//       offer: "BUY 2 GET 1",
//       code: "PIZZA321",
//       image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       gradient: "from-orange-600 via-red-500 to-pink-500",
//       icon: Gift
//     },
//     {
//       id: 3,
//       title: "Flash Sale - 30% OFF",
//       subtitle: "Limited time offer on all menu items. Hurry up!",
//       offer: "30% OFF",
//       code: "FLASH30",
//       image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       gradient: "from-purple-600 via-pink-500 to-red-500",
//       icon: Zap
//     }
//   ];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerSlides = mockBannerSlides;

     

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-auto overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-20 blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink-200 rounded-full opacity-30 blur-lg animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-purple-200 rounded-full opacity-15 blur-2xl animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10  pb-0">
        <div className="max-w-full mx-auto">
          {/* Sliding Banner */}
          <div className="relative mb-3 max-w-full ">
            <div className="relative h-80 md:h-96  overflow-hidden shadow-2xl">
              {bannerSlides.map((slide, index) => {
                const Icon = slide.icon;
                return (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-105'
                      }`}
                  >
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${slide.image})` }}
                    />

                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} opacity-30`} />

                    {/* Content */}
                    <div className="relative h-full flex items-center justify-center text-center px-8">
                      <div className="text-white max-w-2xl">
                        {/* Restaurant Name */}
                        <div className="mb-6">
                          <h1 className="text-3xl md:text-5xl font-bold mb-2 animate-fade-in">
                            The Urban Oven
                          </h1>
                          <div className="flex items-center justify-center space-x-2 text-orange-200">
                            <div className="w-12 h-0.5 bg-current"></div>
                            <Icon className="w-6 h-6" />
                            <div className="w-12 h-0.5 bg-current"></div>
                          </div>
                        </div>

                        {/* Offer Content */}
                        <div className={`transition-all duration-700 delay-300 ${index === currentSlide
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-4'
                          }`}>


                          <h2 className="text-2xl md:text-4xl font-bold mb-4">
                            {slide.title}
                          </h2>
                          <p className="text-lg md:text-xl text-orange-100 mb-6">
                            {slide.subtitle}
                          </p>

                          {/* Promo Code */}
                          <div className="mb-6">
                            <div className="inline-flex items-center bg-black bg-opacity-30 backdrop-blur-sm border-2 border-white border-dashed rounded-lg px-4 py-2">
                              <span className="text-sm font-medium mr-2">Use Code:</span>
                              <span className="font-bold text-lg tracking-wider">{slide.code}</span>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-6 space-x-3">
              {bannerSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                      ? 'bg-orange-500 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Search Bar */}
          {/* <div className="max-w-2xl mx-auto mb-12">
            <div className="relative bg-white rounded-2xl shadow-2xl p-2 hover:shadow-3xl transition-all duration-300">
              <div className="flex items-center">
                <div className="flex-1 flex items-center px-4">
                  <Search className="w-6 h-6 text-gray-400 mr-3" />
                  <input
                    type="text"
                    placeholder="Search for delicious dishes..."
                    className="w-full py-4 text-gray-700 placeholder-gray-400 bg-transparent border-none outline-none text-lg"
                  />
                </div>
                <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Search
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="fixed top-6 right-6 z-20">
        <button className="bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group">
          <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full group-hover:animate-pulse"></div>
        </button>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;