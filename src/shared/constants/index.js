// API Configuration
export const API_CONFIG = {
  BASE_URL: 'http://localhost:8000/api/v1',
  DUMMY_BASE_URL: 'https://dummyjson.com',
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
};

// Routes
export const ROUTES = {
  HOME: '/',
  MENU: '/menu',
  PROFILE: '/profile',
  FAVORITES: '/favorites',
  CART: '/cart',
  AUTH: '/api/v1/auth',
  DEMO: '/demo',
};

// Storage Keys
export const STORAGE_KEYS = {
  TOKEN: 'token',
  USER: 'user',
  CART: 'cart',
  FAVORITES: 'favorites',
  THEME: 'theme',
  LANGUAGE: 'language',
};

// Theme Colors
export const THEME_COLORS = {
  PRIMARY: {
    50: '#fef2f2',
    100: '#fee2e2',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
  },
  SECONDARY: {
    50: '#f8fafc',
    100: '#f1f5f9',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
  },
};

// Animation Durations
export const ANIMATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
};

// Breakpoints
export const BREAKPOINTS = {
  SM: '640px',
  MD: '768px',
  LG: '1024px',
  XL: '1280px',
  '2XL': '1536px',
};