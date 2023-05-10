import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import superJob from '../api/superJob';

export const getVacancies = createAsyncThunk(
  'vacancies/get',
  async (_, { getState }) => {
    const { page, count, query } = getState().vacancyList;

    const response = await superJob.getVacancies({
      page,
      count,
      keyword: query,
    });

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
  },
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
    setQuery(state, action) {
      state.query = action.payload;
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
  },
});

export const { setPage, setQuery } = vacancyListSlice.actions;
export default vacancyListSlice.reducer;
