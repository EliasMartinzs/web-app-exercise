import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fisrtName: "",
  preferMuscle: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.fisrtName = action.payload;
    },
    setPreferMuscle(state, action) {
      state.preferMuscle = action.payload;
    },
  },
});

export const { setCurrentUser, setPreferMuscle } = userSlice.actions;
export const userReducer = userSlice.reducer;
