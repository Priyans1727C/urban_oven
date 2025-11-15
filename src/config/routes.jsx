import React, { lazy } from 'react';
import { ROUTES } from '../shared/constants';

// Lazy load components for better performance
const HomePage = lazy(() => import('../features/home/pages/HomePage'));
const MenuPage = lazy(() => import('../features/menu/pages/MenuPage'));
const CartPage = lazy(() => import('../features/cart/pages/CartPage'));
const FavoritesPage = lazy(() => import('../features/favorites/pages/FavoritesPage'));
const UserProfilePage = lazy(() => import('../features/profile/pages/UserProfilePage'));
const AuthPage = lazy(() => import('../features/auth/pages/AuthPage'));


// Route configuration
export const routes = [
  {
    path: ROUTES.HOME,
    element: <HomePage />,
    title: 'Home',
    description: 'Welcome to our restaurant',
  },
  {
    path: ROUTES.MENU,
    element: <MenuPage />,
    title: 'Menu',
    description: 'Browse our delicious menu',
  },
  {
    path: ROUTES.CART,
    element: <CartPage />,
    title: 'Shopping Cart',
    description: 'Review your order',
  },
  {
    path: ROUTES.FAVORITES,
    element: <FavoritesPage />,
    title: 'Favorites',
    description: 'Your favorite dishes',
  },
  {
    path: ROUTES.PROFILE,
    element: <UserProfilePage />,
    title: 'Profile',
    description: 'Manage your account',
  },
  {
    path: ROUTES.AUTH,
    element: <AuthPage />,
    title: 'Authentication',
    description: 'Sign in or create account',
  },
 
];

// Protected routes that require authentication
export const protectedRoutes = [
  ROUTES.PROFILE,
  ROUTES.CART,
  ROUTES.FAVORITES,
];

// Public routes that don't require authentication
export const publicRoutes = [
  ROUTES.HOME,
  ROUTES.MENU,
  ROUTES.AUTH,
  ROUTES.DEMO,
];

// Route metadata
export const getRouteMetadata = (pathname) => {
  const route = routes.find(r => r.path === pathname);
  return route ? {
    title: route.title,
    description: route.description,
  } : {
    title: 'Restaurant App',
    description: 'Delicious food delivery',
  };
};