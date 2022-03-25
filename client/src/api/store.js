import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./productsFeatures";

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});
