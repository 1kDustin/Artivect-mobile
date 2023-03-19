import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'authSlice',
  initialState: {
    isAuthenticated: false,
    firebaseUserData: {},
    user: {},
    token: '',
  },
  reducers: {
    setUser: (state, {payload: user}) => {
      state.user = user;
    },
    setFirebaseUserData: (state, {payload: data}) => {
      state.firebaseUserData = data;
    },
    setIsAuthenticated: (state, {payload: isAuth}) => {
      state.isAuthenticated = isAuth;
    },
    setToken: (state, {payload: token}) => {
      state.token = token;
    },
    logoutUser: state => {
      (state.isAuthenticated = false),
        (state.firebaseUserData = {}),
        (state.user = {}),
        (state.token = '');
    },
  },
});

export const {
  setUser,
  setFirebaseUserData,
  setIsAuthenticated,
  setToken,
  logoutUser,
} = slice.actions;

export default slice.reducer;
