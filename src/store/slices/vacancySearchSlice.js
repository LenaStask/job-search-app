import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import superJob from '../../api/superJob';

export const getVacancies = createAsyncThunk(
  'vacancies/get',
  async (_, { getState }) => {
    const { filters, search, pagination } = getState().vacancySearch;

    const response = await superJob.getVacancies({
      keyword: search.query,
      catalogues: filters.catalogue,
      page: pagination.page - 1,
      count: pagination.count,
    });

    return response.data;
  },
);

const vacancySearchSlice = createSlice({
  name: 'vacancySearch',
  initialState: {
    filters: {
      catalogue: '',
    },
    search: { query: '' },
    vacancies: [],
    pagination: {
      page: 1,
      count: 4,
      total: 0,
    },
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

export const { setFilters, setQuery, setPage } = vacancySearchSlice.actions;
export default vacancySearchSlice.reducer;
