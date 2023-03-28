import { AuthState, Profile, UserType } from "../../models";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "./../../app/store";

const initialState: AuthState = {
  userProfile: null,
  isLoggedIn: false,
  isLoading: false,
  userType: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<Profile>) {
      state.isLoggedIn = true;
      state.userProfile = action.payload;
    },

    logout(state) {
      state.isLoggedIn = false;
    },

    setUserType(state, action: PayloadAction<UserType>) {
      state.userType = action.payload;
    },
  },
});

export const { loginSuccess, setUserType, logout } = authSlice.actions;

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectIsLoading = (state: RootState) => state.auth.isLoading;
export const selectUserProfile = (state: RootState) => state.auth.userProfile;
export const selectGetUserType = (state: RootState) => state.auth.userType;

export const authReducer = authSlice.reducer;
