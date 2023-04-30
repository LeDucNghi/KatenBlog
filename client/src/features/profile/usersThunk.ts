import { AppThunk } from "../../app/store";
import authApi from "../../api/authApi";
import { loginSuccess } from "../auth/authSlice";
import { toast } from "react-toastify";

export const getUserProfile = (): AppThunk => async (dispatch, getState) => {
  try {
    const res = await authApi.getProfile();

    if (res.data) {
      dispatch(
        loginSuccess({
          username: res.data.username,
          avatar: res.data.avatar,
          fullname: res.data.fullname,
          id: res.data.id,

          exp: res.data.exp,
          iat: res.data.iat,

          token: res.data.token,
        })
      );
    }
  } catch (error: any) {
    console.log("🚀 ~ file: authThunk.ts:8 ~ getUserProfile ~ error:", error);
    if (error) {
      if (error.response.data.error.message === "jwt expired") {
        localStorage.removeItem("token");

        toast.error(`You need to login 😢`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  }
};
