import { createSlice } from '@reduxjs/toolkit';

const vacancySearchSlice = createSlice({
  name: 'vacancySearch',
  initialState: {
    filters: {
      catalogue: '',
      paymentFrom: '',
      paymentTo: '',
    },
    search: { query: '' },
    page: 1,
  },
  reducers: {
    setFilters(state, action) {
      state.filters = { ...action.payload };
      state.page = 1;
    },
    setQuery(state, action) {
      state.search = { query: action.payload };
      state.page = 1;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
});

export const {
  setFilters,
  setQuery,
  setPage,
  toggleFavorite,
} = vacancySearchSlice.actions;

export default vacancySearchSlice.reducer;
