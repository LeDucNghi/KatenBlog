import { PaginationParams, Post, PostData, PostListRes } from "../models";

import axiosClient from "./axiosClient";

const postsApi = {
  getAll({ page, limit }: PaginationParams): Promise<PostListRes<Post>> {
    const url = `/posts/getallpost?page=${page}&limit=${limit}`;
    return axiosClient.get(url);
  },

  addNewPost(params: Post): Promise<any> {
    const formData = new FormData();

    formData.append("image", params.image!);
    formData.append("title", params.title!);
    formData.append("subTitle", params.subTitle!);
    formData.append("categories", params.categories!);
    formData.append("content", params.content!);

    const url = `/posts/createpost`;
    return axiosClient.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  updatePost(params: Post): Promise<any> {
    const formData = new FormData();

    formData.append("image", params.image!);
    formData.append("title", params.title!);
    formData.append("subTitle", params.subTitle!);
    formData.append("categories", params.categories!);
    formData.append("content", params.content!);

    const url = `/posts/${params.id}`;
    return axiosClient.put(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  getDetailPost(id: string | number, type: string): Promise<PostData> {
    const url = `/posts/detail/${id}?type=${type}`;
    return axiosClient.get(url);
  },

  increasePostView(id: string | number): Promise<any> {
    const url = `/posts/view/${id}`;
    return axiosClient.put(url);
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

  getUserPost(
    id: string | number,
    type: string,
    { page, limit }: PaginationParams
  ): Promise<PostListRes<Post>> {
    const url = `/posts/userpostlist/${id}?page=${page}&limit=${limit}&type=${type}`;
    return axiosClient.get(url);
  },
};

export default postsApi;
