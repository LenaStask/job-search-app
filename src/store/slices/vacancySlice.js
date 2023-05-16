import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import superJob from '../../api/superJob';

export const getVacancy = createAsyncThunk(
  'vacancy/get',
  async (_, { getState }) => {
    const { id } = getState().vacancy;
    const response = await superJob.getVacancy({ id });
    return response.data;
  },
);

const vacancySlice = createSlice({
  name: 'vacancy',
  initialState: {
    id: 0,
    vacancy: {},
  },
  reduser: {
    setId(state, action) {
      state.id = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getVacancy.fulfilled, (state, action) => {
      state.vacancy = action.payload;
    });
  },
});

export const { setId } = vacancySlice.actions;
export default vacancySlice.reducer;
