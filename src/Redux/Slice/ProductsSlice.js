import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  siteName: "React Shop",
  productsData: [],
  loading: true,
};
export const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    GETDATA: (state, action) => {
      state.productsData = action.payload
      state.loading = false
      // return { ...state, productsData: [...action.payload],loading:false };
    },
  },
});

export const { GETDATA } = ProductsSlice.actions;

export default ProductsSlice.reducer;
