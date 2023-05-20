import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import superJob from '../../api/superJob';
import { getFavorites, setFavorites } from '../localStorage';

const VACANCIES_PER_PAGE = 4;
const MAX_PAGES = 125;

export const getVacancies = createAsyncThunk(
  'vacancies/get',
  async (params) => {
    const response = await superJob.getVacancies({
      ...params,
      count: VACANCIES_PER_PAGE,
    });

    return response.data;
  },
);

const vacancyListSlice = createSlice({
  name: 'vacancyList',
  initialState: {
    vacancies: {
      objects: [],
      totalPages: 0,
    },
    favorites: getFavorites(),
    isLoading: false,
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

export const { toggleFavorite } = vacancyListSlice.actions;

export default vacancyListSlice.reducer;
