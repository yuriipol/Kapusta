// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/auth-slice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;
