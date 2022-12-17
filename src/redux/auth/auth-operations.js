import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

import {
  login,
  logout,
  registration,
  userInfo,
} from '../../shared/api/auth-api';
// import { userInfoOperation } from 'redux/user/user-operations';

const userInfoOperation = createAsyncThunk(
  'user/get',
  async (data, { rejectWithValue }) => {
    // console.log('user/get');
    try {
      const result = await userInfo(data);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/register',
  async (data, { rejectWithValue }) => {
    try {
      const result = await registration(data);
      console.log('registerUser-result1', result);
      Notiflix.Report.success(
        `${result.email} registration was successful`,
        'You need to login',
        'Okay'
      );

      console.log('auth/register-result2', result);
      return result;
    } catch (error) {
      console.log('error');
      const statusErr = error.response.status;

      if (statusErr === 400) {
        Notiflix.Notify.failure('Bad request. try again later');
      }
      if (statusErr === 409) {
        Notiflix.Report.failure(
          'Error',
          `${error.response.data.message}`,
          'Okay'
        );
      }
      return rejectWithValue(error.message);
    }
  }
);

export const logInUser = createAsyncThunk(
  'auth/logIn',
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const result = await login(data);
      // console.log(result);
      Notiflix.Notify.success(`Welcome ${result.userData.email}`);
      // Notiflix.Notify.success(`Welcome ${result.email}`);

      dispatch(userInfoOperation(result.accessToken));
      return result;
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
      const result = await logout();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
