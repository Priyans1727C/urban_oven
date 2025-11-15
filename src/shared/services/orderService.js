import { api, apiRequest } from './api';

// Order service functions
const orderService = {
  // Create new order
  async createOrder(orderData) {
    return apiRequest(() => 
      api.post('/orders/', orderData)
    );
  },

  // Get user orders
  async getUserOrders(userId, params = {}) {
    const queryParams = new URLSearchParams({
      status: params.status || '',
      page: params.page || 1,
      limit: params.limit || 10,
    }).toString();

    return apiRequest(() => 
      api.get(`/orders/user/${userId}/?${queryParams}`)
    );
  },

  // Get order by ID
  async getOrder(orderId) {
    return apiRequest(() => 
      api.get(`/orders/${orderId}/`)
    );
  },

  // Update order status
  async updateOrderStatus(orderId, status) {
    return apiRequest(() => 
      api.patch(`/orders/${orderId}/`, { status })
    );
  },

  // Cancel order
  async cancelOrder(orderId) {
    return apiRequest(() => 
      api.patch(`/orders/${orderId}/cancel/`)
    );
  },

  // Get order tracking
  async trackOrder(orderId) {
    return apiRequest(() => 
      api.get(`/orders/${orderId}/tracking/`)
    );
  },

  // Rate order
  async rateOrder(orderId, rating, review = '') {
    return apiRequest(() => 
      api.post(`/orders/${orderId}/rate/`, { rating, review })
    );
  },
};

export default orderService;