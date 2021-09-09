import { createAction } from '@reduxjs/toolkit';

// fetch pending
export const registerRequest = createAction('contacts/registerRequest');
// fetch fulfilled
export const registerSuccess = createAction('contacts/registerSuccess');
// fetch rejected
export const registerError = createAction('contacts/registerError');

// add pending
export const loginRequest = createAction('contacts/loginRequest');
// add fulfilled
export const loginSuccess = createAction('contacts/loginSuccess');
// add rejected
export const loginError = createAction('contacts/loginError');

// delete pending
export const logoutRequest = createAction('contacts/logoutRequest');
// delete fulfilled
export const logoutSuccess = createAction('contacts/logoutSuccess');
// delete rejected
export const logoutError = createAction('contacts/logoutError');

// delete pending
export const fetchCurrentUserRequest = createAction('auth/fetchCurrentUserRequest');
// delete fulfilled
export const fetchCurrentUserSuccess = createAction('auth/fetchCurrentUserSucces');
// delete rejected
export const fetchCurrentUserError = createAction('auth/fetchCurrentUserError');