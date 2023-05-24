import { createSlice } from '@reduxjs/toolkit';
import { getFavorites, setFavorites } from '../localStorage';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: getFavorites(),
  },
  reducers: {
    toggleFavorite(state, action) {
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload);
      } else {
        state.favorites = state.favorites.filter((id) => id !== action.payload);
      }
      setFavorites(state.favorites);
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
