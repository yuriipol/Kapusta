import { createAsyncThunk } from '@reduxjs/toolkit';
import { userInfo, updateBalance } from '../../shared/api/user-api';

export const userInfoOperation = createAsyncThunk(
  'users/get',
  async (data, { rejectWithValue }) => {
    try {
      const result = await userInfo(data);
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
