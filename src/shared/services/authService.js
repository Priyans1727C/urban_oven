import { api, apiRequest } from './api';

// Auth service functions
const authService = {
  // Login user
  async login(credentials) {
    return apiRequest(() => 
      api.post('/auth/login/', credentials)
    );
  },

  // Register user
  async register(userData) {
    return apiRequest(() => 
      api.post('/auth/register/', userData)
    );
  },

  // Logout user
  async logout() {
    return apiRequest(() => 
      api.post('/auth/logout/')
    );
  },

  // Refresh token
  async refreshToken() {
    return apiRequest(() => 
      api.post('/auth/refresh/')
    );
  },

  // Get current user
  async getCurrentUser() {
    return apiRequest(() => 
      api.get('/auth/me/')
    );
  },

  // Update user profile
  async updateProfile(userData) {
    return apiRequest(() => 
      api.patch('/auth/profile/', userData)
    );
  },

  // Change password
  async changePassword(passwordData) {
    return apiRequest(() => 
      api.post('/auth/change-password/', passwordData)
    );
  },

  // Reset password request
  async requestPasswordReset(email) {
    return apiRequest(() => 
      api.post('/auth/password-reset/', { email })
    );
  },

  // Confirm password reset
  async confirmPasswordReset(token, newPassword) {
    return apiRequest(() => 
      api.post('/auth/password-reset/confirm/', { token, password: newPassword })
    );
  },
};

export default authService;