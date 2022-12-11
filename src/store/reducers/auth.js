import { createSlice } from '@reduxjs/toolkit';
import {
  signUp,
  login
} from '../actions/auth';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loggedIn: false,
    data: {},
    loading: false,
    error: ''
  },
  extraReducers: {
    [signUp.pending]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [signUp.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.loggedIn = !!payload.token;
    },
    [signUp.rejected]: (state, { payload: { message } }) => {
      state.loading = false;
      state.error = message;
    },
    [login.pending]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [login.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.loggedIn = !!payload.token;
    },
    [login.rejected]: (state, { payload: { message } }) => {
      state.loading = false;
      state.error = message;
    }
  }
});

export default authSlice.reducer;