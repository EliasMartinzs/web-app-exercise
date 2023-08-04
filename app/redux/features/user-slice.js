'use client';
import { createSlice } from '@reduxjs/toolkit';

const addToFavorite = (state, productToAdd) => {
  const existingCartItem = Array.isArray(state)
    ? state.find(cartItem => cartItem.id === productToAdd.id)
    : null;

  if (existingCartItem) {
    return state.map(cartItem =>
      cartItem.id === productToAdd.id ? { ...cartItem } : cartItem
    );
  }

  return [...state, { ...productToAdd }];
};

const removeToFavories = (state, removeToAdd) => {
  const existingItem = state.find(item => item.id === removeToAdd.id);

  if (existingItem) {
    return state.filter(item => item.id !== removeToAdd.id);
  }
};

const addProgress = (state, progress) => {
  const existingProgress = Array.isArray(state)
    ? state.find(item => item.id === progress.id)
    : null;

  if (existingProgress) {
    return state.map(item => (item.id === progress.id ? { ...item } : item));
  }

  return [...state, { ...progress }];
};

const initialState = {
  fisrtName: '',
  preferMuscle: '',
  muscleFavorites: [],
  save: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.fisrtName = action.payload;
    },
    setPreferMuscle(state, action) {
      state.preferMuscle = action.payload;
    },
    setFavorites(state, action) {
      state.muscleFavorites = addToFavorite(
        state.muscleFavorites,
        action.payload
      );
    },
    setRemoveFromFavorites(state, action) {
      state.save = removeToFavories(state.save, action.payload);
    },
    setSavedProgress(state, action) {
      state.save = addProgress(state.save, action.payload);
    },
  },
});

export const {
  setCurrentUser,
  setPreferMuscle,
  setFavorites,
  setRemoveFromFavorites,
  setSavedProgress,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
