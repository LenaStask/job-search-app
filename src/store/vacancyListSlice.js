import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import superJob from '../api/superJob';

export const getVacancies = createAsyncThunk(
  'vacancies/get',
  async (_, { getState }) => {
    const {
      page, count, query, filters,
    } = getState().vacancyList;
    console.log(filters);
    const response = await superJob.getVacancies({
      page,
      count,
      keyword: query,
      catalogues: filters.catalogue,
    });

    return response.data;
  },
);

export const getCatalogues = createAsyncThunk(
  'catalogues/get',
  async () => {
    const response = await superJob.getCatalogues();
    return response.data;
  },
);

const vacancyListSlice = createSlice({
  name: 'vacancyList',
  initialState: {
    vacancies: [],
    page: 1,
    count: 4,
    query: '',
    isLoading: false,
    catalogues: [],
    filters: {
      catalogue: null,
    },
  },
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
    setQuery(state, action) {
      state.query = action.payload;
    },
    setFilters(state, action) {
      state.filters.catalogue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getVacancies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getVacancies.fulfilled, (state, action) => {
      state.vacancies = action.payload.objects;
      state.isLoading = false;
    });
    builder.addCase(getVacancies.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getCatalogues.fulfilled, (state, action) => {
      state.catalogues = action.payload.map((catalogue) => ({
        title: catalogue.title_rus,
        key: catalogue.key,
      }));
    });
  },
});

export const { setPage, setQuery, setFilters } = vacancyListSlice.actions;
export default vacancyListSlice.reducer;
