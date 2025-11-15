import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: null,
  orderHistory: [],
  achievements: [],
  preferences: {
    theme: 'light',
    notifications: true,
    language: 'en',
  },
  isLoading: false,
  error: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    fetchProfileStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchProfileSuccess: (state, action) => {
      state.isLoading = false;
      state.userInfo = action.payload.userInfo;
      state.orderHistory = action.payload.orderHistory || [];
      state.achievements = action.payload.achievements || [];
      state.error = null;
    },
    fetchProfileFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    updateProfile: (state, action) => {
      state.userInfo = { ...state.userInfo, ...action.payload };
    },
    updatePreferences: (state, action) => {
      state.preferences = { ...state.preferences, ...action.payload };
    },
    addOrderToHistory: (state, action) => {
      state.orderHistory.unshift(action.payload);
    },
    clearProfile: (state) => {
      state.userInfo = null;
      state.orderHistory = [];
      state.achievements = [];
      state.preferences = initialState.preferences;
    },
  },
});

export const {
  fetchProfileStart,
  fetchProfileSuccess,
  fetchProfileFailure,
  updateProfile,
  updatePreferences,
  addOrderToHistory,
  clearProfile
} = profileSlice.actions;

export default profileSlice.reducer;