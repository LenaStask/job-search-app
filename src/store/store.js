import { combineReducers, configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filtersSlice';
import searchReducer from './slices/searchSlice';
import vacancyListReducer from './slices/vacancyListSlice';
import paginationReducer from './slices/paginationSlice';
import vacancyReducer from './slices/vacancySlice';

const rootReducer = combineReducers({
  filters: filterReducer,
  search: searchReducer,
  vacancyList: vacancyListReducer,
  pagination: paginationReducer,
  vacancy: vacancyReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
