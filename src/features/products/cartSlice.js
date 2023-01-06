import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
  cartQuantity: 0,
  cartTotalAmount: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const existedItemIndex = state.cartItems.findIndex(cartItem => cartItem.id === action.payload.id);
      if (existedItemIndex >= 0) {
        state.cartItems[existedItemIndex].cartQuantity += 1;
      }
      else {
        const assembledItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(assembledItem);
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    decreaseProductQuantity(state, action) {
      if (action.payload.cartQuantity <= 1) {
        const updatedCartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id);
        state.cartItems = updatedCartItems;
      }
      else {
        const productIndex = state.cartItems.findIndex(cartItem => cartItem.id === action.payload.id);
        state.cartItems[productIndex].cartQuantity -= 1;
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    getSubTotalPrice(state, action) {
      const subTotal = state.cartItems.reduce((acc, cartItem) => acc += (cartItem.price * cartItem.cartQuantity), 0);
      state.cartTotalAmount = subTotal;
    },

    removeFromCart(state, action) {
      const updatedCartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id);
      state.cartItems = updatedCartItems;
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    clearCart(state, action) {
      state.cartItems = [];
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    }
  },
})

export const { addToCart, removeFromCart, clearCart, decreaseProductQuantity, getSubTotalPrice } = cartSlice.actions;
export default cartSlice.reducer;