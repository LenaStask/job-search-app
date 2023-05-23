import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: {
    catalogue: '',
    paymentFrom: '',
    paymentTo: '',
  },
  query: '',
  page: 1,
};

const vacancySearchSlice = createSlice({
  name: 'vacancySearch',
  initialState,
  reducers: {
    setFilters(state, action) {
      state.filters = { ...action.payload };
    },
    setQuery(state, action) {
      state.query = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    reset() {
      return initialState;
    },
  },
});

export const {
  setFilters,
  setQuery,
  setPage,
  reset,
} = vacancySearchSlice.actions;

export default vacancySearchSlice.reducer;
