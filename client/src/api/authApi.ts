import { Profile } from "../models";
import axiosClient from "./axiosClient";

const authApi = {
  signup(params: Profile): Promise<Profile> {
    const url = `/users/signup`;
    return axiosClient.post(url, params);
  },

  signin(params: Profile): Promise<Profile> {
    const url = `/users/signin`;
    return axiosClient.post(url, params);
  },
};

export default authApi;
