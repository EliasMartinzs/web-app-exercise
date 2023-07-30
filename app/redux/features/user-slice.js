import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fisrtName: '',
  preferMuscle: '',
  muscleSelected: '',
  categoriesSelected: '',
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
    setMuscleSelected(state, action) {
      state.muscleSelected = action.payload;
    },
    setCategories(state, action) {
      state.categoriesSelected = action.payload;
    },
  },
});

export const {
  setCurrentUser,
  setPreferMuscle,
  setMuscleSelected,
  setCategories,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
