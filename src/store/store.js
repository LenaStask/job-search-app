import { combineReducers, configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filtersSlice';
import vacancyListReducer from './slices/vacancyListSlice';
import vacancySearchReducer from './slices/vacancySearchSlice';
import vacancyReducer from './slices/vacancySlice';

const rootReducer = combineReducers({
  filters: filterReducer,
  vacancyList: vacancyListReducer,
  vacancySearch: vacancySearchReducer,
  vacancy: vacancyReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
