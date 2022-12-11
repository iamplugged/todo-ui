import { createAsyncThunk } from '@reduxjs/toolkit';
import client, { getErrorMessage } from '../apiClient';

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await client.post('/auth/sign-up', payload);
      return data;
    } catch (e) {
      return rejectWithValue(getErrorMessage(e));
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await client.post('/auth/login', payload);
      return data;
    } catch (e) {
      return rejectWithValue(getErrorMessage(e));
    }
  }
);
