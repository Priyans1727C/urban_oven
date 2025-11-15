import React, { useState } from 'react';
import { Heart, Search, Filter, Grid2x2 as Grid, List, ShoppingCart, Sparkles, Star, TrendingUp } from 'lucide-react';
import Header from '../../../shared/components/ui/Header';
import FavoriteCard from '../components/FavoriteCard';
import Button from '../../../shared/components/ui/Button';
import { mockFavoritesItems } from '../../../shared/data/mockData';
import Card from '../../../shared/components/ui/Card';

const FavoritesPage = ({ onBack, onCartClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('recent');

  // Mock favorites data as state to allow removal
  const [favorites, setFavorites] = useState(mockFavoritesItems);

  // Handler to remove favorite card
  const handleRemoveFavorite = (itemId) => {
    setFavorites(prevFavorites => prevFavorites.filter(item => item.id !== itemId));
  };

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(favorites.map(item => item.category.toLowerCase())))];

  // Filter and sort favorites
  const filteredFavorites = favorites
    .filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' ||
        item.category.toLowerCase() === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return a.price - b.price;
        case 'rating':
          return b.rating - a.rating;
        case 'recent':
        default:
          return new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime();
      }
    });



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-pink-50 relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
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
        title="My Favorites"
        onBack={onBack}
        onCartClick={onCartClick}
        hideFavoritesIcon={true}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 relative z-10">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="group bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center group-hover:animate-bounce">
                <Heart className="w-6 h-6 text-white fill-current" />
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  {favorites.length}
                </div>
                <div className="text-gray-600">Favorite Items</div>
              </div>
            </div>
          </div>

          <div className="group bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center group-hover:animate-bounce">
                <Star className="w-6 h-6 text-white fill-current" />
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                  {favorites.length > 0 ? (favorites.reduce((sum, item) => sum + item.rating, 0) / favorites.length).toFixed(1) : '0.0'}
                </div>
                <div className="text-gray-600">Avg Rating</div>
              </div>
            </div>
          </div>

          <div className="group bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center group-hover:animate-bounce">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  ${favorites.length > 0 ? (favorites.reduce((sum, item) => sum + item.price, 0) / favorites.length).toFixed(0) : '0'}
                </div>
                <div className="text-gray-600">Avg Price</div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls Section */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-lg mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 flex-1">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search favorites..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/60 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/60 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200 capitalize"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-white/60 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200"
              >
                <option value="recent">Most Recent</option>
                <option value="name">Name A-Z</option>
                <option value="price">Price Low-High</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              {/* View Mode Toggle */}
              <div className="flex bg-gray-100 rounded-2xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-xl transition-all duration-200 ${viewMode === 'grid'
                    ? 'bg-white shadow-sm text-orange-500'
                    : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-xl transition-all duration-200 ${viewMode === 'list'
                    ? 'bg-white shadow-sm text-orange-500'
                    : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>


            </div>
          </div>
        </div>

        {/* Content */}
        {filteredFavorites.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <Heart className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {searchQuery || selectedCategory !== 'all' ? 'No matches found' : 'No favorites yet'}
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              {searchQuery || selectedCategory !== 'all'
                ? 'Try adjusting your search or filters to find what you\'re looking for.'
                : 'Start adding items to your favorites to see them here. Look for the heart icon on menu items!'
              }
            </p>
            {(searchQuery || selectedCategory !== 'all') && (
              <Button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                variant="outline"
              >
                Clear Filters
              </Button>
            )}
          </div>
        ) : (
          <div className={`${viewMode === 'grid'
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'
            : 'space-y-6'
            }`}>
            {filteredFavorites.map((item, index) => (
              // <FavoriteCard
              //   key={item.id}
              //   {...item}
              //   viewMode={viewMode}
              //   onRemoveFavorite={handleRemoveFavorite}
              // />
              <Card
                cardDetails={item}
                viewMode={viewMode}
                onRemove={handleRemoveFavorite}
              />

            ))}
          </div>
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

export default FavoritesPage;