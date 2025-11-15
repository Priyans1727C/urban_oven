import { api, apiRequest } from './api';

// User service functions
const userService = {
  // Get user profile
  async getProfile(userId) {
    return apiRequest(() => 
      api.get(`/users/${userId}/profile/`)
    );
  },

  // Update user profile
  async updateProfile(userId, profileData) {
    return apiRequest(() => 
      api.patch(`/users/${userId}/profile/`, profileData)
    );
  },

  // Get user favorites
  async getFavorites(userId) {
    return apiRequest(() => 
      api.get(`/users/${userId}/favorites/`)
    );
  },

  // Add to favorites
  async addToFavorites(userId, itemId) {
    return apiRequest(() => 
      api.post(`/users/${userId}/favorites/`, { item_id: itemId })
    );
  },

  // Remove from favorites
  async removeFromFavorites(userId, itemId) {
    return apiRequest(() => 
      api.delete(`/users/${userId}/favorites/${itemId}/`)
    );
  },

  // Get user preferences
  async getPreferences(userId) {
    return apiRequest(() => 
      api.get(`/users/${userId}/preferences/`)
    );
  },

  // Update user preferences
  async updatePreferences(userId, preferences) {
    return apiRequest(() => 
      api.patch(`/users/${userId}/preferences/`, preferences)
    );
  },

  // Get user achievements
  async getAchievements(userId) {
    return apiRequest(() => 
      api.get(`/users/${userId}/achievements/`)
    );
  },

  // Upload avatar
  async uploadAvatar(userId, avatarFile) {
    const formData = new FormData();
    formData.append('avatar', avatarFile);

    return apiRequest(() => 
      api.post(`/users/${userId}/avatar/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
    );
  },
};

export default userService;