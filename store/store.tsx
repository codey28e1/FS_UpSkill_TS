// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import { sessionSlice } from './slice';

export const store = configureStore({
  reducer: {
    sessions: sessionSlice.reducer,
  },
});
