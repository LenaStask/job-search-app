import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import superJob from '../../api/superJob';

const VACANCIES_PER_PAGE = process.env.REACT_APP_PAGINATION_VACANCIES_PER_PAGE;
const MAX_PAGES = process.env.REACT_APP_PAGINATION_MAX_PAGES;

export const getVacancies = createAsyncThunk(
  'vacancies/get',
  async (data) => {
    const params = {
      published: data.published || 1,
      page: data.page,
      count: data.count,
      no_agreement: 1,
    };

    if (data.keyword) {
      params.keyword = data.keyword;
    }

    if (data.catalogues) {
      params.catalogues = data.catalogues;
    }

    if (data.payment_from) {
      params.payment_from = data.payment_from;
    }

    if (data.payment_to) {
      params.payment_to = data.payment_to;
    }

    if (data.ids) {
      params.ids = data.ids;
    }

    const response = await superJob.getVacancies({
      ...params,
      count: VACANCIES_PER_PAGE,
    });

    return response.data;
  },
);

const initialState = {
  vacancies: {
    objects: [],
    totalPages: 0,
  },
  isLoading: false,
};

const vacancyListSlice = createSlice({
  name: 'vacancyList',
  initialState,
  reducers: {
    reset() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getVacancies.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getVacancies.fulfilled, (state, action) => {
      const { objects, total } = action.payload;
      state.vacancies = {
        objects,
        totalPages: Math.min(Math.ceil(total / VACANCIES_PER_PAGE), MAX_PAGES),
      };
      state.isLoading = false;
    });

    builder.addCase(getVacancies.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { reset } = vacancyListSlice.actions;

export default vacancyListSlice.reducer;
