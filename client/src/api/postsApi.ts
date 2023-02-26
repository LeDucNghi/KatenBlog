import { Post, PostListRes } from "../models";

import axiosClient from "./axiosClient";

const postsApi = {
  getAll(): Promise<PostListRes<Post>> {
    const url = "/posts/getallpost";
    return axiosClient.get(url);
  },

  addNewPost(params: Post): Promise<any> {
    const url = `/posts/createpost`;
    return axiosClient.post(url, params);
  },

  updatePost(params: Post): Promise<any> {
    const url = `/posts/${params.id}`;
    return axiosClient.patch(url);
  },

  getDetailPost(id: string): Promise<Post> {
    const url = `/posts/${id}`;
    return axiosClient.get(url);
  },

  deletePost(id: string): Promise<any> {
    const url = `/posts/${id}`;
    return axiosClient.delete(url);
  },

  postComment(params: Post): Promise<any> {
    const url = `/posts/${params}`;
    return axiosClient.get(url);
  },

  uploadImage(params: any): Promise<any> {
    console.log("🚀 ~ file: postsApi.ts:37 ~ uploadImage ~ params:", params);
    // const { image } = params;
    const url = `/posts/upload`;
    return axiosClient.post(url, params);
  },
};

export default postsApi;
