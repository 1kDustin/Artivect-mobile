import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'authSlice',
  initialState: {
    isAuthenticated: false,
    user: {},
    token: '',
  },
  reducers: {
    setUser: (state, {payload: user}) => {
      state.user = user;
    },
    setIsAuthenticated: (state, {payload: isAuth}) => {
      state.isAuthenticated = isAuth;
    },
    setToken: (state, {payload: token}) => {
      state.token = token;
    },
  },
});

export const {setUser, setIsAuthenticated, setToken} = slice.actions;

export default slice.reducer;
