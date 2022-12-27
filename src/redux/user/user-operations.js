import { createAsyncThunk } from '@reduxjs/toolkit';
import { userInfo, updateBalance } from '../../shared/api/user-api';

export const userInfoOperation = createAsyncThunk(
  'users/get',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const token = state.auth.token;

    if (!token) {
      return rejectWithValue(`token is invalid`);
    }
    try {
      const result = await userInfo(token);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUsersBalance = createAsyncThunk(
  'users/balance',
  async (data, { rejectWithValue }) => {
    try {
      const result = await updateBalance(data);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
