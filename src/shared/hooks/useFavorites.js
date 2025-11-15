import { useState, useEffect } from 'react';
import { STORAGE_KEYS } from '../constants';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Load favorites from localStorage on mount
  useEffect(() => {
    try {
      const savedFavorites = localStorage.getItem(STORAGE_KEYS.FAVORITES);
      if (savedFavorites && savedFavorites !== 'undefined') {
        const parsed = JSON.parse(savedFavorites);
        if (Array.isArray(parsed)) {
          setFavorites(parsed);
        }
      }
    } catch (error) {
      console.error('Error loading favorites from localStorage:', error);
      localStorage.removeItem(STORAGE_KEYS.FAVORITES);
    }
  }, []);

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
    } catch (error) {
      console.error('Error saving favorites to localStorage:', error);
    }
  }, [favorites]);

  const addToFavorites = async (item) => {
    setIsLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setFavorites(prevFavorites => {
        const exists = prevFavorites.find(fav => fav.id === item.id);
        if (!exists) {
          return [...prevFavorites, { 
            ...item, 
            addedAt: new Date().toISOString(),
            favoriteId: `${item.id}_${Date.now()}`
          }];
        }
        return prevFavorites;
      });
    } catch (error) {
      console.error('Error adding to favorites:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const removeFromFavorites = async (itemId) => {
    setIsLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      setFavorites(prevFavorites => 
        prevFavorites.filter(item => item.id !== itemId)
      );
    } catch (error) {
      console.error('Error removing from favorites:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const toggleFavorite = async (item) => {
    const exists = favorites.find(fav => fav.id === item.id);
    
    if (exists) {
      await removeFromFavorites(item.id);
    } else {
      await addToFavorites(item);
    }
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  const isFavorite = (itemId) => {
    return favorites.some(item => item.id === itemId);
  };

  const getFavoriteCount = () => {
    return favorites.length;
  };

  const getFavoritesByCategory = (category) => {
    if (!category || category === 'all') return favorites;
    return favorites.filter(item => item.category === category);
  };

  return {
    favorites,
    isLoading,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    clearFavorites,
    isFavorite,
    getFavoriteCount,
    getFavoritesByCategory,
  };
};