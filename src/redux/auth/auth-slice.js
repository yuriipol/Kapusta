import { createSlice } from '@reduxjs/toolkit';

import { logInUser, logoutUser, registerUser } from './auth-operations';

const initialState = {
  token: '',
  isLogin: false,
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
      state.isLogin = false;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.token = 'error token';
      state.isLogin = false;
      state.isLoading = false;
      state.error = payload;
    },
    [logInUser.pending]: state => {
      state.token = '';
      state.isLoading = true;
      state.error = null;
    },
    [logInUser.fulfilled]: (state, { payload }) => {
      state.token = payload.accessToken;
      state.isLoading = false;
      state.isLogin = true;
    },
    [logInUser.rejected]: (state, { payload }) => {
      state.isLogin = false;
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
      state.isLogin = false;
    },
    [logoutUser.rejected]: (state, { payload }) => {
      state.isLogin = false;
      state.isLoading = false;
      state.error = payload;
    },
  },
});

// export default authSlice.reducer;
