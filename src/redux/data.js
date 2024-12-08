import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    products: [],
  },
  reducers: {
    giveData: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { giveData } = dataSlice.actions;
export default dataSlice.reducer;
