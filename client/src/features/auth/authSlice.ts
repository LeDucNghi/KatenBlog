import { AuthState, Profile, UserType } from "../../models";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "./../../app/store";

const initialState: AuthState = {
  userInformation: null,
  isLoggedIn: false,
  isLoading: false,
  userType: {
    isAdd: false,
    isGuest: false,
    isPoster: false,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<Profile>) {
      state.isLoggedIn = true;
      state.userInformation = action.payload;
    },

    setUserType(state, action: PayloadAction<UserType>) {
      state.userType.isAdd = action.payload.isAdd;
      state.userType.isGuest = action.payload.isGuest;
      state.userType.isPoster = action.payload.isPoster;
    },
  },
});

export const { loginSuccess, setUserType } = authSlice.actions;

export const selectIsLoading = (state: RootState) => state.auth.isLoading;
export const selectGetUserInfo = (state: RootState) =>
  state.auth.userInformation;
export const selectGetUserType = (state: RootState) => state.auth.userType;

export const authReducer = authSlice.reducer;
