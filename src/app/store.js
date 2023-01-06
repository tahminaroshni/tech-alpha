import { configureStore } from "@reduxjs/toolkit";

import productsReducer, { productsFetching } from "../features/products/productSlice";

export const store = configureStore({
  reducer: {
    // multiple reducers goes here...
    products: productsReducer,
  },
});

store.dispatch(productsFetching());