import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import productReducer from "../features/products/ProductSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    productList: productReducer,
  },
});
