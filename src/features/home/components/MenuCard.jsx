import { useState, useRef } from 'react';
import { Star, Heart, Plus, ChefHat, Clock, Users, Award, Sparkles, Eye, ShoppingCart } from 'lucide-react';
import './menuCard.css'
// Content Section Component
const ContentSection = ({
  name,
  description,
  price,
  rating,
  prepTime,
  servings,
  handleAddToCart,
  setIsFlipped,
  isAddingToCart,
  isFlipped
}) => {
  return (
    <div className="p-5 pt-3 relative">
      {/* Interactive Rating */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-1">
          {
            <Star
              className="w-5 h-5 cursor-pointer transition-all duration-200 transform hover:scale-125 fill-yellow-300 text-yellow-300"
            />
          }
          <span className="ml-2 text-sm font-bold text-gray-600">{rating}</span>
        </div>

        <div className="flex items-center space-x-1 text-gray-500">
          <Clock className="w-4 h-4" />
          <span className="text-sm">{prepTime}</span>
        </div>
        <div className="flex items-center space-x-1 text-gray-500">
          <Users className="w-4 h-4" />
          <span className="text-sm">{servings}</span>
        </div>
      </div>

      {/* Title with Hover Effect */}
      <h3 title={name} className="text-2xl font-bold line-clamp-1 text-gray-800 mb-2 transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-400 group-hover:bg-clip-text">
        {name}
      </h3>

      {/* Description */}
      {/* <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed transition-all duration-300 group-hover:text-gray-600">
        {description+"djfkng kj eefewjfne fejfnesn fej fekjf ejfne fef e fefem ffefne fejfem mffej e m j"}
      </p> */}

      {/* Price*/}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-baseline space-x-2">
          <span className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
            ${price}
          </span>
          <span className="text-sm text-gray-400">per serving</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-3">
        <button
          onClick={handleAddToCart}
          disabled={isAddingToCart}
          className="flex-1 relative overflow-hidden bg-gradient-to-r from-orange-400 to-pink-400 text-white py-3 px-6 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-70 group/button"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-orange-300 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300" />
          <div className="relative flex items-center justify-center space-x-2">
            {isAddingToCart ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Adding...</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </>
            )}
          </div>
        </button>

        <button
          onClick={() => setIsFlipped(!isFlipped)}
          className="px-4 py-3 bg-orange-50 text-orange-600 rounded-2xl font-bold transition-all duration-300 hover:bg-orange-100 hover:scale-105 border border-orange-200 group/chef"
        >
          <ChefHat className="w-5 h-5 group-hover/chef:scale-110 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};


const MenuCard = ({
  id,
  name,
  description,
  price,
  image,
  rating,
  category,
  isVegetarian = false,
  isSpicy = false,
  prepTime = "15-20 min",
  servings = 1,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showDetails, setShowDetails] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    }
  };

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsAddingToCart(false);
  };

  const handleQuickView = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="perspective-1000 group">
      <div
        ref={cardRef}
        className={`relative w-80 h-[430px] transform-style-preserve-3d transition-all duration-700 cursor-pointer ${isFlipped ? 'rotate-y-180' : ''
          }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        {/* Front Side */}
        <div className={`absolute inset-0 w-full h-full backface-hidden transform transition-all duration-500 ${isHovered ? 'scale-105 rotate-2' : ''
          }`}>
          <div
            className="relative w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(251, 146, 60, 0.1) 0%, transparent 50%)`
            }}
          >
            {/* Animated Background Particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-1000 animate-float`}
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${10 + i * 10}%`,
                    animationDelay: `${i * 200}ms`,
                    animationDuration: `${3 + i * 0.5}s`
                  }}
                />
              ))}
            </div>

            {/* Interactive Image Container */}
            <div className="relative h-56 overflow-hidden group/image">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-3"
              />

              {/* Dynamic Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{
                  background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(251, 146, 60, 0.3) 0%, transparent 70%)`
                }}
              />

              {/* Floating Action Buttons */}
              <div className="absolute top-4 right-4 flex flex-col space-y-2">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`p-3 rounded-full backdrop-blur-md transition-all duration-300 transform hover:scale-125 ${isLiked ? 'bg-red-500/90 text-white shadow-lg shadow-red-200' : 'bg-white/90 text-gray-600 hover:text-red-500 hover:bg-red-50'
                    }`}
                  title={isLiked ? 'Remove from favorites' : 'Add to favorites'}
                >
                  <Heart className={`w-5 h-5 transition-all duration-300 ${isLiked ? 'fill-current animate-pulse' : ''}`} />
                </button>

                <button
                  onClick={handleQuickView}
                  className="p-3 bg-white/90 rounded-full backdrop-blur-md transition-all duration-300 transform hover:scale-125 hover:bg-blue-500 hover:text-white"                >
                  <Eye className="w-5 h-5" />
                </button>
              </div>

              {/* Category Badge with Animation */}
              <div className="absolute top-4 left-4">
                <div className="px-4 py-2 bg-black/80 text-white text-sm font-bold rounded-full backdrop-blur-sm transform transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500">
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4" />
                    <span>{category}</span>
                  </div>
                </div>
              </div>

              {/* Dietary Indicators */}
              <div className="absolute bottom-4 left-4 flex space-x-2">
                {isVegetarian && (
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 animate-pulse">
                    <span className="text-white text-xs font-bold">V</span>
                  </div>
                )}
                {isSpicy && (
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 animate-bounce">
                    <span className="text-white text-xs">🌶️</span>
                  </div>
                )}
              </div>

              {/* Sparkle Effects */}
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
            </div>

            {/* Content Section */}
            <ContentSection
              name={name}
              description={description}
              price={price}
              rating={rating}
              prepTime={prepTime}
              servings={servings}
              quantity={quantity}
              setQuantity={setQuantity}
              handleAddToCart={handleAddToCart}
              setIsFlipped={setIsFlipped}
              isAddingToCart={isAddingToCart}
              isFlipped={isFlipped}
            />

            {/* Animated Border */}
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-orange-200 via-pink-200 to-orange-200 opacity-0 group-hover:opacity-30 transition-all duration-500 -z-10" />
          </div>
        </div>

        {/* Back Side - Recipe Details */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 rounded-3xl shadow-2xl overflow-hidden relative">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 animate-pulse"></div>
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}
                />
              ))}
            </div>

            {/* Header with Close Button */}
            <div className="relative z-10 flex items-center justify-between p-6 border-b border-white/20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center animate-pulse">
                  <ChefHat className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Recipe Secrets</h3>
                  <p className="text-sm text-gray-300">Chef's exclusive details</p>
                </div>
              </div>
              <button
                onClick={() => setIsFlipped(false)}
                className="group p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-180"
              >
                <div className="w-6 h-6 text-white group-hover:text-orange-300 transition-colors duration-300">✕</div>
              </button>
            </div>

            {/* Content Sections */}
            <div className="relative z-10 p-6 space-y-4 h-full overflow-y-auto">
            

              {/* Interactive Rating & Reviews */}
              <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full flex items-center justify-center group-hover:animate-spin">
                    <Star className="w-4 h-4 text-white fill-current" />
                  </div>
                  <h4 className="font-bold text-white text-lg group-hover:text-yellow-300 transition-colors duration-300">Customer Reviews</h4>
                </div>
                <div className="space-y-3">
                  {[
                    { name: "Sarah M.", rating: 5, comment: "Absolutely divine! The flavors are incredible." },
                    { name: "James K.", rating: 5, comment: "Best dish I've ever had at this restaurant." }
                  ].map((review, i) => (
                    <div key={i} className="bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-all duration-200 cursor-pointer">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium text-sm">{review.name}</span>
                        <div className="flex space-x-1">
                          {[...Array(review.rating)].map((_, j) => (
                            <Star key={j} className="w-3 h-3 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-300 text-xs italic">"{review.comment}"</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Action Button */}
            <div className="absolute bottom-6 right-6 z-20">
              <button
                onClick={handleAddToCart}
                className="group bg-gradient-to-r from-orange-500 to-pink-500 text-white p-4 rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-110 animate-pulse-glow"
              >
                <Plus className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Details Modal */}
      {showDetails && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 max-w-md mx-4 transform animate-scale-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
              <button
                onClick={() => setShowDetails(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                ✕
              </button>
            </div>
            <img src={image} alt={name} className="w-full h-48 object-cover rounded-2xl mb-4" />
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-orange-600">${price}</span>
              <button
                onClick={handleAddToCart}
                className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform duration-200"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuCard;