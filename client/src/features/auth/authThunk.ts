import { AppThunk } from "../../app/store";
import authApi from "../../api/authApi";
import { loginSuccess } from "./authSlice";

export const getUserProfile = (): AppThunk => async (dispatch, getState) => {
  try {
    const res = await authApi.getProfile();
    console.log("🚀 ~ file: authThunk.ts:8 ~ getUserProfile ~ res:", res);

    dispatch(
      loginSuccess({
        username: res.data.username,
        avatar: res.data.avatar,
        fullname: res.data.fullname,
        id: res.data.id,

        exp: res.data.exp,
        iat: res.data.iat,
      })
    );
  } catch (error) {
    console.log("🚀 ~ file: authThunk.ts:8 ~ getUserProfile ~ error:", error);
  }
};
