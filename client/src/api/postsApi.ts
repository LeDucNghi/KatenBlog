import { Post, PostData, PostListRes } from "../models";

import axiosClient from "./axiosClient";

const postsApi = {
  getAll(): Promise<PostListRes<Post>> {
    const url = "/posts/getallpost";
    return axiosClient.get(url);
  },

  addNewPost(params: Post): Promise<any> {
    const formData = new FormData();

    formData.append("image", params.image!);
    formData.append("title", params.title);
    formData.append("subTitle", params.subTitle);
    formData.append("categories", params.categories);
    formData.append("content", params.content);

    const url = `/posts/createpost`;
    return axiosClient.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  updatePost(params: Post): Promise<any> {
    const url = `/posts/${params.id}`;
    return axiosClient.patch(url);
  },

  getDetailPost(id: string | number): Promise<PostData<Post>> {
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
