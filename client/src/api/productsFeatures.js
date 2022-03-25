import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  data: [],
  needFetch: true,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    FETCH_ALL_PRODUCTS: (state, { payload }) => {
      state.data = payload;
    },
    TURNOFF: (state) => {
      state.needFetch = !state.needFetch;
    },
  },
});

// Action creators are generated for each case reducer function
export const { FETCH_ALL_PRODUCTS, TURNOFF } = productsSlice.actions;

export default productsSlice.reducer;
