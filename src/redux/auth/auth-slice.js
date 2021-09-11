import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, fetchCurrentUser } from './auth-operations';

const initialState = {
    user: { name: null, email: null },
    isLoader: false,
    token: null,
    isLoggedIn: false,
    error: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoader = false;
            state.isLoggedIn = true;
        },
        [register.pending](state) {
            state.isLoader = true;
            state.error = false;
        },
        [register.rejected](state) {
            state = {...initialState, error: true};
        },
        [login.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoader = false;
            state.isLoggedIn = true;
        },
        [login.pending](state) {
            state.isLoader = true;
            state.error = false;
        },
        [login.rejected](state) {
            state = {...initialState, error: true};
        },
        [logout.fulfilled](state) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
            state.isLoader = false;
        },
        [logout.pending](state) {
            state.error = false;
        },
        [logout.rejected](state) {
            state.error = true;
            state.isLoader = true;
        },
        [fetchCurrentUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isLoader = false;
        },
        [fetchCurrentUser.pending](state) {
            state.error = false;
            state.isLoader = true;
        },
        [fetchCurrentUser.rejected](state) {
            state.error = true;
            state.isLoader = false;
        },
    },
});

export default authSlice.reducer;