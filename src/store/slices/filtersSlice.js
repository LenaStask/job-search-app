import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import superJob from '../../api/superJob';

export const getCatalogues = createAsyncThunk(
  'catalogues/get',
  async () => {
    const response = await superJob.getCatalogues();

    return response.data;
  },
);

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    catalogues: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCatalogues.fulfilled, (state, action) => {
      state.catalogues = action.payload.map((catalogue) => ({
        title: catalogue.title_trimmed,
        key: catalogue.key,
      }));
    });
  },
});

export default filtersSlice.reducer;
