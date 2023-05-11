import { AppThunk } from "../../app/store";
import { Profile } from "../../models";
import authApi from "../../api/authApi";
import { loginSuccess } from "./authSlice";
import moment from "moment";
import { toast } from "react-toastify";

export const handleAuthForm =
  (values: Profile, isSignin: boolean): AppThunk =>
  async (dispatch, getState) => {
    try {
      var res;
      if (isSignin) {
        res = await authApi.signin(values);
      } else {
        res = await authApi.signup(values);
      }

      if (res.data) {
        if (isSignin) {
          const tokenParams = {
            ...res.data,
            expiresDate: moment(res.data.expiresIn).format("LLL"),
          };

          localStorage.setItem("token", JSON.stringify(tokenParams));
        }

        await toast(`${res.data.message} success 🥳`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        // await setSubmitting(false);
        window.location.href = isSignin ? "/" : "/signin";
      }
    } catch (error: any) {
      if (error) {
        toast(`${error.response.data.message} 😢`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log(error.response.data.message);
      }
    }
  };

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
