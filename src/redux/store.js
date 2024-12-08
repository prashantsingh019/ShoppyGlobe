import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart";
import dataSlice from "./data";

export const store = configureStore({
  reducer: {
    data: dataSlice,
    cart: cartSlice,
  },
});
