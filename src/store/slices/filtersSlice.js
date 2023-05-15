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
    filters: {
      catalogue: null,
    },
  },
  reducers: {
    setFilters(state, action) {
      state.filters.catalogue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCatalogues.fulfilled, (state, action) => {
      state.catalogues = action.payload.map((catalogue) => ({
        title: catalogue.title_rus,
        key: catalogue.key,
      }));
    });
  },
});

export const { setFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
