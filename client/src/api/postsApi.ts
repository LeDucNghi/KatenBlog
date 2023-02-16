import { Post, PostListRes } from "../models";

import axiosClient from "./axiosClient";

export const postsApi = {
  getAll(): Promise<PostListRes<Post>> {
    const url = "/posts/";
    return axiosClient.get(url);
  },

  updatePost(id : string): Promise<any> {
    const url = "/posts/";
    return axiosClient.get(url);
  },
};

// export default postsApi
