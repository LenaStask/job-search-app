import { configureStore } from '@reduxjs/toolkit';
import vacancyListReducer from './vacancyListSlice';

const store = configureStore({
  reducer: {
    vacancyList: vacancyListReducer,
  },
});

export default store;
