import { configureStore } from '@reduxjs/toolkit';
// Import your feature slices here when ready
// import authSlice from '../features/auth/store/authSlice';
// import menuSlice from '../features/menu/store/menuSlice';
// import cartSlice from '../features/cart/store/cartSlice';
// import favoritesSlice from '../features/favorites/store/favoritesSlice';
// import profileSlice from '../features/profile/store/profileSlice';

export const store = configureStore({
  reducer: {
    // Add your reducers here
    // auth: authSlice,
    // menu: menuSlice,
    // cart: cartSlice,
    // favorites: favoritesSlice,
    // profile: profileSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

// Types for TypeScript projects (uncomment if converting to TS)
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;