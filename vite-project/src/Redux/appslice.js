import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [], 
  userInfo: JSON.parse(localStorage.getItem("userInfo")) || null,
  searchTerm: "",
  selectedCategory: "all",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    increment: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity++;
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    decrement: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity--;
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    deleteFromCart: (state, action) => {
      state.cart = state.cart.filter((i) => i.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    deleteAllItems: (state, action) =>{
      state.cart = [];
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    setUser: (state, action) => {
      state.userInfo = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { addToCart, increment, decrement, deleteFromCart, deleteAllItems, setUser, setSearchTerm, setSelectedCategory } = counterSlice.actions;
export default counterSlice.reducer;