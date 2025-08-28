// import { createSlice } from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(
        i=>i.id ===item.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    incrementQty: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrementQty: (state, action) => {
  const item = state.cartItems.find((item) => item.id === action.payload);
  // if (item) {
    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      alert("Quantity cannot go below 1.");
    }
  // }
}

    // decrementQty: (state, action) => {
    //   const item = state.cartItems.find((item) => item.id === action.payload);
    //   if (item && item.quantity > 1) item.quantity -= 1;  
    // },
    // clearCart: (state) => {
    //   state.cartItems = [];
    // item.quantity -= 1
    // },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQty,
  decrementQty,
  // clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

