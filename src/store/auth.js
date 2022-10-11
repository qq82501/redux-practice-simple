import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthorized: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthorized = true;
    },
    logout(state) {
      state.isAuthorized = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
