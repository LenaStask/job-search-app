import { combineReducers, configureStore } from '@reduxjs/toolkit';
import vacancyListReducer from './slices/vacancyListSlice';
import searchReduser from './slices/searchSlice';
import filterReduser from './slices/filtersSlice';

const rootReduser = combineReducers({
  vacancyList: vacancyListReducer,
  search: searchReduser,
  filters: filterReduser,
});

const store = configureStore({
  reducer: rootReduser,
});

export default store;
