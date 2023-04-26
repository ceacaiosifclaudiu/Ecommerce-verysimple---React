import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

export const favoriteSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addToWish: (state, action) => {
      const item = state.favorites.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        return;
      } else {
        state.favorites.push(action.payload);
      }
    },
    removeWish: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload
      );
    },
    resetWishLit: (state) => {
      state.favorites = [];
    },
  },
});

export const { addToWish, removeWish, resetWishLit } = favoriteSlice.actions;

export default favoriteSlice.reducer;
