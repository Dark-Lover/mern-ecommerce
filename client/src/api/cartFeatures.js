import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_TO_CART: (state, { payload }) => {
      const { prod, qty } = payload;
      const indexProd = state.cartItems.findIndex((el) => el._id === prod._id);

      if (indexProd === -1) {
        const newProd = { ...prod };
        newProd.qty = qty;
        state.cartItems.push(newProd);
      } else {
        state.cartItems[indexProd].qty = qty;
      }
    },
    DELETE_FROM_CART: (state, { payload }) => {
      const newCartItems = state.cartItems.filter(
        (item) => item._id !== payload._id
      );
      state.cartItems = [...newCartItems];
    },
  },
});

// Action creators are generated for each case reducer function
export const { ADD_TO_CART, DELETE_FROM_CART } = cartSlice.actions;

export default cartSlice.reducer;
