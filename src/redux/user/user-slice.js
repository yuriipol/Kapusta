import { createSlice } from '@reduxjs/toolkit';
import { userInfoOperation, updateUsersBalance } from './user-operations';

const initialState = {
  userInfo: { email: '', avatarURL: '', balance: 0 },
  isLogin: false,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUser: state => {
      state.userInfo = {};
      state.isLoading = false;
      state.isLogin = false;
      state.error = null;
    },
  },
  extraReducers: {
    [userInfoOperation.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [userInfoOperation.fulfilled]: (state, { payload }) => {
      state.userInfo = payload;
      state.isLogin = true;
      state.isLoading = false;
    },
    [userInfoOperation.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [updateUsersBalance.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [updateUsersBalance.fulfilled]: (state, { payload }) => {
      state.userInfo.balance = payload;
      state.isLoading = false;
    },
    [updateUsersBalance.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { clearUser } = userSlice.actions;
// export default userSlice.reducer;
