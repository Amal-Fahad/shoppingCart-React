import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_TO_CART: (state, action) => {
      state.cart.push(action.payload);
    },
    INCREASE_COUNT: (state, action) => {
      state.cart.forEach((item) => {
        if (item.id === action.payload) {
          item.count++;
        }
      });
    },
    DECREASE_COUNT: (state, action) => {
      state.cart.forEach((item) => {
        if (item.id === action.payload) {
          item.count--;
        }
      });
    },
    REMOVE_ITEM: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    CLEAR_CART: (state, action) => {
      state.cart = [];
    },
  },
});

export const {
  ADD_TO_CART,
  INCREASE_COUNT,
  CLEAR_CART,
  DECREASE_COUNT,
  REMOVE_ITEM,
} = cartSlice.actions;

export default cartSlice.reducer;
