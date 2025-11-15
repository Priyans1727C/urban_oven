import { api, demoApi, apiRequest } from './api';

// Menu service functions
const menuService = {
  // Get all menu items
  async getMenuItems(params = {}) {
    const queryParams = new URLSearchParams({
      category: params.category || '',
      search: params.search || '',
      min_price: params.minPrice || '',
      max_price: params.maxPrice || '',
      sort_by: params.sortBy || 'name',
      order: params.order || 'asc',
      page: params.page || 1,
      limit: params.limit || 20,
    }).toString();

    return apiRequest(() => 
      api.get(`/menu/items/?${queryParams}`)
    );
  },

  // Get menu item by ID
  async getMenuItem(id) {
    return apiRequest(() => 
      api.get(`/menu/items/${id}/`)
    );
  },

  // Get menu categories
  async getCategories() {
    return apiRequest(() => 
      api.get('/menu/categories/')
    );
  },

  // Get featured items
  async getFeaturedItems() {
    return apiRequest(() => 
      api.get('/menu/featured/')
    );
  },

  // Search menu items
  async searchMenuItems(query, filters = {}) {
    const searchParams = {
      q: query,
      ...filters,
    };

    const queryString = new URLSearchParams(searchParams).toString();
    return apiRequest(() => 
      api.get(`/menu/search/?${queryString}`)
    );
  },

  // Get menu recommendations
  async getRecommendations(userId) {
    return apiRequest(() => 
      api.get(`/menu/recommendations/${userId}/`)
    );
  },

  // Demo functions using dummy data
  async getDemoMenuItems() {
    return apiRequest(() => 
      demoApi.get('/products?limit=20')
    );
  },

  async getDemoCategories() {
    return apiRequest(() => 
      demoApi.get('/products/categories')
    );
  },
};

export default menuService;