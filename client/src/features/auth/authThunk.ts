import { ApiStatus, Profile } from "../../models";

import { AppThunk } from "../../app/store";
import { UsersSampleData } from "../../mock/user";
import authApi from "../../api/authApi";
import { loginSuccess } from "./authSlice";
import moment from "moment";
import { toast } from "react-toastify";

export const handleAuthForm =
  (values: Profile, status: "isSignin" | "isSignup" | "withoutApi"): AppThunk =>
  async (dispatch, getState) => {
    try {
      var res = null;
      if (status === "isSignin") {
        res = await authApi.signin(values);
      } else if (status === "isSignup") {
        res = await authApi.signup(values);
      }

      if (res!.data) {
        if (status === "isSignin") {
          const tokenParams = {
            ...res!.data,
            expiresDate: moment(res!.data.expiresIn).format("LLL"),
          };

          localStorage.setItem("token", JSON.stringify(tokenParams));
        }

        await toast(`${res!.data.message} success 🥳`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        window.location.href = status === "isSignin" ? "/" : "/signin";
      } else if (status === "withoutApi") {
        localStorage.setItem(
          "token",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBoYW1hbmh0dWFuQGdtYWlsLmNvbSIsImF2YXRhciI6Imh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTIxNzE0MTYxODE5LTE1NTM0OTY4ZmM1Zj9peGxpYj1yYi00LjAuMyZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9ODcwJnE9ODAiLCJmdWxsbmFtZSI6IlBo4bqhbSBBbmggVHXhuqVuIiwiaWQiOjIsImlhdCI6MTY4NzU3OTk4NywiZXhwIjoxNjg3NjY2Mzg3fQ.qSAwO6NYsxxGWbKXZBYkD62E0DGJav-ese-hj7nshyY"
        );
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
  const apiStatus: ApiStatus = getState().post.apiStatus;

  if (apiStatus === "Network Error") {
    dispatch(
      loginSuccess({
        username: UsersSampleData.username,
        avatar: UsersSampleData.avatar,
        fullname: UsersSampleData.fullname,
        id: UsersSampleData.id,

        exp: UsersSampleData.exp,
        iat: UsersSampleData.iat,
      })
    );
  } else {
    try {
      const res = await authApi.getProfile();
      console.log(
        "🚀 ~ file: authThunk.ts:63 ~ getUserProfile ~ res:",
        res.data
      );

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
  }
};
