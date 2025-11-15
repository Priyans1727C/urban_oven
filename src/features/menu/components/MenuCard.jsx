import React, { useState } from 'react';
import { Star, Heart, Plus, Clock, Users, ShoppingCart } from 'lucide-react';
import { Card, Button, Badge, Rating } from '../../../shared';
import { useCart, useFavorites } from '../../../shared/hooks';
import { formatCurrency } from '../../../shared/utils/helpers';

const MenuCard = ({ item, viewMode = 'grid' }) => {
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    try {
      await addToCart(item);
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      setIsAddingToCart(false);
    }
  };

  const handleToggleFavorite = () => {
    toggleFavorite(item);
  };

  if (viewMode === 'list') {
    return (
      <Card className="flex items-center gap-4 p-4 hover:shadow-lg transition-all duration-300">
        <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.name}</h3>
              <p className="text-gray-600 text-sm mb-2 line-clamp-2">{item.description}</p>
              
              <div className="flex items-center gap-4 mb-2">
                <Rating rating={item.rating} size="sm" />
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {item.prepTime} min
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Users className="w-4 h-4 mr-1" />
                  {item.servings} serving{item.servings > 1 ? 's' : ''}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Badge variant="secondary" size="sm">{item.category}</Badge>
                {item.isVegetarian && <Badge variant="success" size="sm">Vegetarian</Badge>}
                {item.isSpicy && <Badge variant="warning" size="sm">Spicy</Badge>}
              </div>
            </div>

            <div className="text-right">
              <div className="text-2xl font-bold text-orange-600 mb-3">
                {formatCurrency(item.price)}
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  icon={Heart}
                  onClick={handleToggleFavorite}
                  className={isFavorite(item.id) ? 'text-pink-500' : 'text-gray-400'}
                />
                <Button
                  variant="primary"
                  size="sm"
                  icon={isAddingToCart ? null : ShoppingCart}
                  onClick={handleAddToCart}
                  isLoading={isAddingToCart}
                  disabled={isAddingToCart}
                >
                  {isAddingToCart ? 'Adding...' : 'Add to Cart'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* Favorite Button */}
        <button
          onClick={handleToggleFavorite}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
            isFavorite(item.id)
              ? 'bg-pink-500 text-white'
              : 'bg-white/20 text-white hover:bg-pink-500'
          }`}
        >
          <Heart className="w-4 h-4" />
        </button>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {item.isVegetarian && <Badge variant="success" size="sm">Vegetarian</Badge>}
          {item.isSpicy && <Badge variant="warning" size="sm">Spicy</Badge>}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{item.name}</h3>
          <div className="text-xl font-bold text-orange-600">
            {formatCurrency(item.price)}
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>

        <div className="flex items-center justify-between mb-3">
          <Rating rating={item.rating} size="sm" />
          <Badge variant="secondary" size="sm">{item.category}</Badge>
        </div>

        <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {item.prepTime} min
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            {item.servings} serving{item.servings > 1 ? 's' : ''}
          </div>
        </div>

        <Button
          variant="primary"
          fullWidth
          icon={isAddingToCart ? null : ShoppingCart}
          onClick={handleAddToCart}
          isLoading={isAddingToCart}
          disabled={isAddingToCart}
        >
          {isAddingToCart ? 'Adding...' : 'Add to Cart'}
        </Button>
      </div>
    </Card>
  );
};

export default MenuCard;