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

  uploadImage(file: File): Promise<any> {
    const formData = new FormData();

    formData.append("image", file);

    const url = `/posts/upload`;
    return axiosClient.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};

export default postsApi;
