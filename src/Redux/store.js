import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./Slice/ProductsSlice";
import cartReducer from "./Slice/CartSlice";

export const store = configureStore({
  reducer: {
    Products: ProductsReducer,
    Cart: cartReducer,
  },
});
