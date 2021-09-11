import axios from 'axios';
// import {
//   registerRequest,
//   registerSuccess,
//   registerError,
//   loginRequest,
//   loginSuccess,
//   loginError,
//   logoutRequest,
//   logoutSuccess,
//   logoutError,
//   fetchCurrentUserRequest,
//   fetchCurrentUserSuccess,
//   fetchCurrentUserError,
// } from './auth-actions';
// import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import 'react-toastify/dist/ReactToastify.css';

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

export const register = createAsyncThunk('auth/register', async dataUser => {
  const { data } = await axios.post('/users/signup', dataUser);
  token.set(data.token);
  console.log(axios.defaults.headers.common.Authorization);
  return data;
});

export const login = createAsyncThunk('auth/login', async dataUser => {
  const { data } = await axios.post('/users/login', dataUser);
  token.set(data.token);
  return data;
});

export const logout = createAsyncThunk('auth/logOut', async () => {
  await axios.post('/users/logout');
  token.unset();
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/fetchByToken',
  async (_, thunkApi) => {
    const token = thunkApi.getState().auth.token;
    token.set(token);
    const { data } = await axios('/users/current');
    return data;
  },
);

// export const register = credentials => async dispatch => {
//   dispatch(registerRequest());
//   console.log(credentials);
//   console.log(axios.defaults.baseURL);
//   try {
//     console.log(axios.defaults.baseURL);
//     const { data } = await axios.post('/users/singup', credentials);
//     // token.set(data.token);
//     console.log(token);
//     dispatch(registerSuccess(data));
//   } catch (error) {
//     dispatch(registerError(error));

//     if (error.response.status === 400) {
//       return toast.error('Registration went wrong! Please, try again');
//     }

//     if (error.response.status === 500) {
//       return toast.error('Server not work! Please, try again')
//     }

//     return toast.error('Somthing went wrong! Please, try again');
//   }
// };

// export const login = credentials => async dispatch => {
//   dispatch(loginRequest());

//   try {
//     const { data } = await axios.post('/users/login', credentials);
//     token.set(data.token);
//     dispatch(loginSuccess(data));
//   } catch (error) {
//     dispatch(loginError(error));

//     if (error.response.status === 400) {
//       return toast.error('400');
//     }
//     return toast.error('Somthing went wrong! Please, try again');
//   }
// };

// export const logout = () => async dispatch => {
//   dispatch(logoutRequest());

//   try {
//     axios.post('/users/logout');
//     token.unset();
//     dispatch(logoutSuccess());
//   } catch (error) {
//     dispatch(logoutError(error));

//     if (error.response.status === 401) {
//       return toast.error('401');
//     }

//     if (error.response.status === 500) {
//       return toast.error('500');
//     }

//     return toast.error('Somthing went wrong! Please, try again');
//   }
// };

// export const fetchCurrentUser = () => async (dispatch, getState) => {
//   const state = getState();
//   const persistedToken = state.auth.token;

//   if (persistedToken === null) {
//     return;
//   }

//   token.set(persistedToken);

//   dispatch(fetchCurrentUserRequest());

//   try {
//     const { data } = await axios.get('https://connections-api.herokuapp.com/users/current');
//     dispatch(fetchCurrentUserSuccess(data));
//   } catch (error) {
//     dispatch(fetchCurrentUserError(error));

//     if (error.response.status === 401) {
//       return toast.error('401');
//     }

//     return toast.error('Somthing went wrong! Please, try again');
//   }
// };