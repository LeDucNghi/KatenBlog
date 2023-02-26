import { Auth, Profile } from "../models";

import axiosClient from "./axiosClient";

const authApi = {
  signup(params: Profile): Promise<Auth<Profile>> {
    const url = `/users/signup`;
    return axiosClient.post(url, params);
  },

  signin(params: Profile): Promise<Auth<Profile>> {
    console.log("🚀 ~ file: authApi.ts:12 ~ signin ~ params:", params);
    const url = `/users/signin`;
    return axiosClient.post(url, params);
  },
};

export default authApi;
