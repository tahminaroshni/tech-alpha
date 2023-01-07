import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
  cartQuantity: 0,
  cartTotalAmount: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    // Product add to cart
    addToCart(state, action) {
      const existedItemIndex = state.cartItems.findIndex(cartItem => cartItem.id === action.payload.id);

      // if product exists into cart
      if (existedItemIndex >= 0) {
        state.cartItems[existedItemIndex].cartQuantity += 1;
        toast.info('Quantity increased', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }

      // if product not exists into cart
      else {
        const assembledItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(assembledItem);
        toast.success('Product added', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    // Decrease product quantity
    decreaseProductQuantity(state, action) {

      if (action.payload.cartQuantity <= 1) {
        const updatedCartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id);
        state.cartItems = updatedCartItems;
        toast.warn('Product removed', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }

      else {
        const productIndex = state.cartItems.findIndex(cartItem => cartItem.id === action.payload.id);
        state.cartItems[productIndex].cartQuantity -= 1;
        toast.info('Quantity decreased', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    // Calculate subtotal price
    getSubTotalPrice(state, action) {
      const subTotal = state.cartItems.reduce((acc, cartItem) => acc += (cartItem.price * cartItem.cartQuantity), 0);
      state.cartTotalAmount = subTotal;
    },

    // Product remove from cart
    removeFromCart(state, action) {
      const updatedCartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id);
      state.cartItems = updatedCartItems;
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      toast.warn('Product removed', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },

    // Clear the cart
    clearCart(state, action) {
      state.cartItems = [];
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      toast.error('Cart cleared', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  },
})

export const { addToCart, removeFromCart, clearCart, decreaseProductQuantity, getSubTotalPrice } = cartSlice.actions;
export default cartSlice.reducer;