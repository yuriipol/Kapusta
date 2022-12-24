import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

import {
  login,
  logout,
  registration,
  // userInfo,
  googleGetData,
} from '../../shared/api/auth-api';

import { userInfoOperation } from 'redux/user/user-operations';

// const userInfoOperation = createAsyncThunk(
//   'user/get',
//   async (data, { rejectWithValue }) => {
//     try {
//       const result = await userInfo(data);
//       return result;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

export const registerUser = createAsyncThunk(
  'auth/register',
  async (data, { rejectWithValue }) => {
    try {
      const result = await registration(data);
      const [name] = result.email.split('@');
      Notiflix.Report.success(
        `${name} registration was successful`,
        'You need to login',
        'Okay'
      );

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
      const [name] = result.user.email.split('@');

      Notiflix.Notify.success(`Welcome ${name}`);
      dispatch(userInfoOperation(result.token));

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

export const logInGoogle = createAsyncThunk(
  'auth/logIn/google',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const result = await googleGetData();
      const [name] = result.user.email.split('@');
      Notiflix.Report.success(
        `${name} google registration was successful`,
        '',
        'Okay'
      );

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
