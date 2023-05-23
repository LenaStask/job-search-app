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
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCatalogues.fulfilled, (state, action) => {
      state.catalogues = action.payload.map((catalogue) => ({
        title: catalogue.title,
        key: catalogue.key,
      }));
    });

    builder.addCase(getCatalogues.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export default filtersSlice.reducer;
