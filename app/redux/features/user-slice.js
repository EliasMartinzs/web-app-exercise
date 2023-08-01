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

const initialState = {
  fisrtName: '',
  preferMuscle: '',
  muscleFavorites: [],
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
      state.muscleFavorites = removeToFavories(
        state.muscleFavorites,
        action.payload
      );
    },
  },
});

export const {
  setCurrentUser,
  setPreferMuscle,
  setFavorites,
  setRemoveFromFavorites,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
