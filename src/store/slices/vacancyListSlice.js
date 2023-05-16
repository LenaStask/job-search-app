import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import superJob from '../../api/superJob';

export const getVacancies = createAsyncThunk(
  'vacancies/get',
  async (_, { getState }) => {
    const { page, count } = getState().pagination;
    const { query } = getState().search;
    const { filters } = getState().filters;
    const response = await superJob.getVacancies({
      page,
      count,
      keyword: query.value,
      catalogues: filters.catalogue,
    });
    return response.data;
  },
);

const vacancyListSlice = createSlice({
  name: 'vacancyList',
  initialState: {
    vacancies: [],
    isLoading: false,
  },
  reducers: {},
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
  },
});

export const { setPage } = vacancyListSlice.actions;
export default vacancyListSlice.reducer;
