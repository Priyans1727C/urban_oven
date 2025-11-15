import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  categories: [],
  selectedCategory: 'all',
  isLoading: false,
  error: null,
  searchQuery: '',
  filters: {
    priceRange: [0, 100],
    rating: 0,
    dietary: [],
  },
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    fetchMenuStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchMenuSuccess: (state, action) => {
      state.isLoading = false;
      state.items = action.payload.items;
      state.categories = action.payload.categories;
      state.error = null;
    },
    fetchMenuFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters: (state) => {
      state.filters = initialState.filters;
      state.searchQuery = '';
      state.selectedCategory = 'all';
    },
  },
});

export const {
  fetchMenuStart,
  fetchMenuSuccess,
  fetchMenuFailure,
  setSelectedCategory,
  setSearchQuery,
  setFilters,
  clearFilters
} = menuSlice.actions;

export default menuSlice.reducer;