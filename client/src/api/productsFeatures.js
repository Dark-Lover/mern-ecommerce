import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  data: [],
  needFetch: true,
  catData: [],
  bestProd: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    FETCH_ALL_PRODUCTS: (state, { payload }) => {
      state.data = payload;
    },
    FETCH_CAT_PRODUCTS: (state, { payload }) => {
      state.catData = payload;
    },
    FETCH_BEST: (state, { payload }) => {
      state.bestProd = payload;
    },
    TURNOFF: (state) => {
      state.needFetch = !state.needFetch;
    },
  },
});

// Action creators are generated for each case reducer function
export const { FETCH_ALL_PRODUCTS, TURNOFF, FETCH_CAT_PRODUCTS, FETCH_BEST } =
  productsSlice.actions;

export default productsSlice.reducer;
