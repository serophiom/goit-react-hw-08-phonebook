import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

console.log(axios.defaults.baseURL);

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  }
};

export const register = createAsyncThunk('auth/register', async credentials  => {
  const { data } = await axios.post('/users/signup', credentials );
  token.set(data.token);
  return data;
});

export const login = createAsyncThunk('auth/login', async credentials  => {
  const { data } = await axios.post('/users/login', credentials );
  token.set(data.token);
  return data;
});

export const logout = createAsyncThunk('auth/logout', async () => {
  await axios.post('/users/logout');
  token.unset();
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/fetchCurrentUser',
  async (_, thunkApi) => {
    const persistedToken = thunkApi.getState().auth.token;
    token.set(persistedToken);
    const { data } = await axios.get('/users/current');
    return data;
  },
);