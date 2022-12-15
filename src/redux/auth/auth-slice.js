import { createSlice } from '@reduxjs/toolkit';

import { logInUser, logoutUser } from './auth-operations';

const initialState = {
  token: '',
  isLogin: false,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [logInUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [logInUser.fulfilled]: (state, { payload }) => {
      //   state.accessToken = payload.accessToken;
      //   state.refreshToken = payload.refreshToken;
      //   state.sid = payload.sid;
      //   state.user = { ...state.user, ...payload.user };
      //   state.userId = payload.user.id;
      //   state.isLoading = false;
      //   state.isLogin = true;
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
      //   state.accessToken = '';
      //   state.refreshToken = '';
      //   state.sid = '';
      //   state.user = initialState.user;
      //   state.userId = '';
      //   state.isLoading = false;
      //   state.isLogin = false;
    },
    [logoutUser.rejected]: (state, { payload }) => {
      state.isLogin = false;
      state.isLoading = false;
      state.error = payload;
    },
  },
});

// export default authSlice.reducer;
