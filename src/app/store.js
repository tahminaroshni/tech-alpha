import { configureStore } from "@reduxjs/toolkit";

import productsReducer, { productsFetching } from "../features/products/productSlice";
import cartReducer from '../features/products/cartSlice';

export const store = configureStore({
  reducer: {
    // multiple reducers goes here...
    products: productsReducer,
    cartItems: cartReducer
  },
});

store.dispatch(productsFetching());