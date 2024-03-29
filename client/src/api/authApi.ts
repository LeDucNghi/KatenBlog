import { Auth, CommentProfile, Profile } from "../models";

import axiosClient from "./axiosClient";

const authApi = {
  signup(params: Profile): Promise<Auth<Profile>> {
    const url = `/users/signup`;
    return axiosClient.post(url, params);
  },

  signin(params: Profile): Promise<Auth<Profile>> {
    const url = `/users/signin`;
    return axiosClient.post(url, params);
  },

  getProfile(): Promise<Auth<Profile>> {
    const url = `/users/profile`;
    return axiosClient.get(url);
  },

  getCommentProfile(id: string): Promise<CommentProfile> {
    const url = `/users/profile/comment/${id}`;
    return axiosClient.get(url);
  },
};

export default authApi;
