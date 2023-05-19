import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import superJob from '../../api/superJob';

export const getVacancies = createAsyncThunk(
  'vacancies/get',
  async (_, { getState }) => {
    const {
      filters, search, pagination,
    } = getState().vacancySearch;

    const response = await superJob.getVacancies({
      keyword: search.query,
      catalogues: filters.catalogue,
      paymentFrom: filters.paymentFrom,
      paymentTo: filters.paymentTo,
      page: pagination.page - 1,
      count: pagination.count,
    });
    return response.data;
  },
);

const getSavedFavorites = () => {
  const favorites = localStorage.getItem('favorites');

  return favorites ? JSON.parse(favorites) : [];
};

const setSavedFavorites = (favorites) => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const vacancySearchSlice = createSlice({
  name: 'vacancySearch',
  initialState: {
    filters: {
      catalogue: '',
      paymentFrom: '',
      paymentTo: '',
    },
    search: { query: '' },
    vacancies: [],
    pagination: {
      page: 1,
      count: 4,
      total: 0,
    },
    favorites: getSavedFavorites(),
    isLoading: false,
  },
  reducers: {
    setFilters(state, action) {
      state.filters = action.payload;
      state.pagination.page = 1;
    },
    setQuery(state, action) {
      state.search = { query: action.payload };
      state.pagination.page = 1;
    },
    setPage(state, action) {
      state.pagination.page = action.payload;
    },
    toggleFavorite(state, action) {
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload);
      } else {
        state.favorites = state.favorites.filter((id) => id !== action.payload);
      }
      setSavedFavorites(state.favorites);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getVacancies.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getVacancies.fulfilled, (state, action) => {
      state.vacancies = action.payload.objects;
      state.pagination.total = action.payload.total;
      state.isLoading = false;
    });

    builder.addCase(getVacancies.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const {
  setFilters, setQuery, setPage, toggleFavorite,
} = vacancySearchSlice.actions;
export default vacancySearchSlice.reducer;
