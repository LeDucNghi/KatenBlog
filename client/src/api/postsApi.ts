import {
  PaginationParams,
  Post,
  PostData,
  PostListRes,
  RecentBlog,
  RecentBlogRes,
} from "../models";

import axiosClient from "./axiosClient";

const postsApi = {
  getAll(): Promise<PostListRes<Post>> {
    const url = `/posts/getallpost`;
    return axiosClient.get(url);
  },

  getPostByCategories(
    category: string,
    { page, limit }: PaginationParams
  ): Promise<PostListRes<Post>> {
    const url = `/posts/categories/${category}?page=${page}&limit=${limit}`;
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

  updateRecentBlog(postId: string): Promise<any> {
    const url = `/posts/recent/${postId}`;
    return axiosClient.post(url);
  },

  getUserRecentBlog(): Promise<RecentBlogRes<RecentBlog>> {
    const url = `/posts/getrecentblog`;
    return axiosClient.get(url);
  },
};

export default postsApi;
