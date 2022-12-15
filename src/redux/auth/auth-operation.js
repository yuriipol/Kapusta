import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

// import { login, logout } from 'shared/api/auth-api';
// import { userInfoOperation } from 'redux/user/user-operations';

export const logInUser = createAsyncThunk(
  'auth/logIn',
  async (data, { rejectWithValue, dispatch }) => {
    try {
      // const result = await login(data);
      // Notiflix.Notify.success(`Welcome back, ${result.user.username}`);
      // dispatch(userInfoOperation(result.accessToken));
      // dispatch(userInfoOperation(result.accessToken));
      // return result;
    } catch (error) {
      const statusErr = error.response.status;

      if (statusErr === 400) {
        Notiflix.Notify.failure('Bad request. try again later');
      }
      if (statusErr === 403) {
        Notiflix.Notify.failure(`${error.response.data.message}`);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      // const result = await logout();
      // return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
