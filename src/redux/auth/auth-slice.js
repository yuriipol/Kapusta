import { createSlice } from '@reduxjs/toolkit';

import {
  logInUser,
  logoutUser,
  registerUser,
  logInGoogle,
} from './auth-operations';

const initialState = {
  token: '',
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.pending]: state => {
      state.token = '';
      state.isLoading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: state => {
      state.token = 'no token';
      state.isLoading = false;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.token = 'error token';
      state.isLoading = false;
      state.error = payload;
    },
    [logInUser.pending]: state => {
      state.token = '';
      state.isLoading = true;
      state.error = null;
    },
    [logInUser.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.isLoading = false;
    },
    [logInUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [logInGoogle.pending]: state => {
      state.token = 'goodle registration';
      state.isLoading = true;
      state.error = null;
    },
    [logInGoogle.fulfilled]: (state, { payload }) => {
      state.token = payload;
      state.isLoading = false;
    },
    [logInGoogle.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [logoutUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [logoutUser.fulfilled]: (state, { payload }) => {
      state.token = '';
      state.isLoading = false;
    },
    [logoutUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

// export default authSlice.reducer;
