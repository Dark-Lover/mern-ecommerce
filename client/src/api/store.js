import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./productsFeatures";
import { cartSlice } from "./cartFeatures";

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
  },
});
