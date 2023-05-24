import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import superJob from '../../api/superJob';

export const getVacancy = createAsyncThunk(
  'vacancy/get',
  async (id) => {
    const response = await superJob.getVacancy(id);

    return response.data;
  },
);

const vacancySlice = createSlice({
  name: 'vacancy',
  initialState: {
    vacancy: null,
  },
  reducers: {
    reset(state) {
      state.vacancy = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getVacancy.fulfilled, (state, action) => {
      state.vacancy = action.payload;
    });
  },
});

export const { reset } = vacancySlice.actions;

export default vacancySlice.reducer;
