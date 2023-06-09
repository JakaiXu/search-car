import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: { id: 1, carName: "", cost: 0 },
  reducers: {
    changeName(state, action) {
      state.carName = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
  },
});
export const { changeName, changeCost } = formSlice.actions;
export const formReducer = formSlice.reducer;
